export function Footer() {
  return (
    <footer className="bg-[#25373b] px-6 md:px-8 py-10">
      <div className="max-w-[1060px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <span
            className="text-lg tracking-[-0.02em]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          >
            <span className="text-[#1d88a4]">diff</span>
            <span className="text-[#a4832e]">bio</span>
          </span>

          {/* Copyright */}
          <p
            className="text-[12px] text-[#b8d4e3]/40"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            © 2026 Different Biotechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
