#!/bin/bash
SCREEN_NAME="ocean-web"
DIR="$(cd "$(dirname "$0")" && pwd)"

# Kill existing session if running
screen -S "$SCREEN_NAME" -X quit 2>/dev/null

# Start new detached screen session with a wrapper that reports errors
screen -dmS "$SCREEN_NAME" bash -c '
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"

  if ! command -v npm &>/dev/null; then
    echo "ERROR: npm not found. Is nvm installed?" >&2
    sleep 30
    exit 1
  fi

  cd "'"$DIR"'" || { echo "ERROR: could not cd to '"$DIR"'" >&2; sleep 30; exit 1; }
  npm start
'

# Verify session is actually running
sleep 1
if screen -list | grep -q "$SCREEN_NAME"; then
  echo "Started in screen session '$SCREEN_NAME'"
  echo "  Attach: screen -r $SCREEN_NAME"
else
  echo "ERROR: screen session failed to start. Run manually to debug:"
  echo "  cd $DIR && npm start"
  exit 1
fi
