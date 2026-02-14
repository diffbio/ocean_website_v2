export function Footer() {
  return (
    <footer className="bg-[#25373b] px-6 md:px-8 py-10">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Brand */}
          <span
            className="text-lg tracking-[-0.02em]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          >
            <span className="text-[#1d88a4]">diff</span>
            <span className="text-[#a4832e]">bio</span>
          </span>

          {/* Links */}
          <div
            className="flex gap-5 text-[13px] text-[#b8d4e3]/50"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            <a href="#" className="hover:text-[#b8d4e3] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#b8d4e3] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#b8d4e3] transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
