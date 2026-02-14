import { motion } from 'motion/react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export function BottomDark() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-8 pt-12 md:pt-20 pb-0 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #25373b 0%, #1a2a2e 100%)',
      }}
    >
      <div className="max-w-[800px] mx-auto">
        <motion.h2
          className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-[#1d88a4] mb-6"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0)}
        >
          Most computational designs fail when they hit the real world
        </motion.h2>

        <motion.div className="space-y-4 mb-8" {...fadeUp(0.2)}>
          <p
            className="text-[14px] md:text-[16px] text-[#b8d4e3] leading-[1.7]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            Protein design is fast on the surface — generative models can produce
            thousands of candidate sequences in hours. But validation is where
            things break down. Most candidates that look plausible{' '}
            <em>in silico</em> fail basic biochemical screens: they misfold, bind
            weakly, or fall apart under real conditions.
          </p>
          <p
            className="text-[14px] md:text-[16px] text-[#b8d4e3] leading-[1.7]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            The only way to guarantee you've got the right molecule is to test
            it. We close the loop — making that cycle fast, consistent, and
            integrated with your design process so you can iterate with
            confidence.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.4)}>
          <a
            href="https://forms.gle/g8EKdN4BsUqQu1zd9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 text-[14px] tracking-[-0.01em]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              animation: 'glow-pulse 3s ease-in-out infinite',
            }}
          >
            Request Early Access
          </a>
        </motion.div>
      </div>

      {/* Wave transition to Team */}
      <div className="relative z-[2] leading-[0] mt-10 md:mt-14 -mx-6 md:-mx-8">
        <svg
          className="block w-full h-[40px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,120 L0,120 Z"
            fill="#1f3438"
          />
        </svg>
      </div>
    </section>
  );
}
