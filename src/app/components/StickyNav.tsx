import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(220, 233, 239, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-[1060px] mx-auto px-6 md:px-8 flex items-center justify-between h-[52px]">
        {/* Left: logo + wordmark */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/svgs/diffbio-logo.svg"
            alt="diffbio"
            className="w-7 h-7"
          />
          <span
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
            className="text-lg tracking-[-0.02em]"
          >
            <span className="text-[#1d88a4]">diff</span>
            <span className="text-[#a4832e]">bio</span>
          </span>
        </a>

        {/* Center: nav links (desktop only) */}
        <div
          className="hidden md:flex items-center gap-8 text-[14px] tracking-[-0.01em]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          <a
            href="#how-it-works"
            className="text-[#003a59] hover:text-[#1d88a4] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="text-[#003a59] hover:text-[#1d88a4] transition-colors"
          >
            About
          </a>
          <a
            href="#team"
            className="text-[#003a59] hover:text-[#1d88a4] transition-colors"
          >
            The Crew
          </a>
        </div>

        {/* Right: CTA */}
        <a
          href="https://forms.gle/g8EKdN4BsUqQu1zd9"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 text-[13px] tracking-[-0.01em]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            animation: 'glow-pulse 3s ease-in-out infinite',
          }}
        >
          Request Early Access
        </a>
      </div>
    </motion.nav>
  );
}
