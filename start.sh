#!/bin/bash
SCREEN_NAME="ocean-web"

# Kill existing session if running
screen -S "$SCREEN_NAME" -X quit 2>/dev/null

# Start new detached screen session
screen -dmS "$SCREEN_NAME" bash -c "cd /home/galuwa/dev/ocean_website_v2 && npm start"

echo "Started in screen session '$SCREEN_NAME'"
echo "  Attach: screen -r $SCREEN_NAME"
