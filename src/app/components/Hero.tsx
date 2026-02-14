export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#25373b]">
      <div className="relative z-10 max-w-[820px] mx-auto px-6 md:px-8 pt-20 md:pt-32 pb-6 md:pb-10">
        <h1
          className="text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] leading-[1.05] tracking-[-0.02em] text-[#1d88a4] mb-8"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
        >
          Most computational designs fail when they hit the real world
        </h1>

        <div className="max-w-[700px] space-y-5 mb-8">
          <p
            className="text-[15px] md:text-[17px] text-[#b8d4e3] leading-[1.7] tracking-[-0.01em]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            Generative models can produce thousands of candidate sequences. But{' '}
            <em>in silico</em> scores don't guarantee a protein that folds
            correctly, binds the target tightly, or stays stable under real
            conditions.
          </p>
          <p
            className="text-[15px] md:text-[17px] text-[#b8d4e3] leading-[1.7] tracking-[-0.01em]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            The only way to guarantee you've got the right molecule is to test
            it. We make that loop fast, consistent, and integrated with your
            design process.
          </p>
        </div>

        <a
          href="https://forms.gle/g8EKdN4BsUqQu1zd9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 shadow-[0_4px_24px_rgba(29,136,164,0.25)] hover:shadow-[0_6px_32px_rgba(29,136,164,0.4)] text-[15px] tracking-[-0.01em]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          Request Early Access
        </a>

        {/* Manta ray divider */}
        <div className="flex justify-center mt-10 md:mt-14">
          <img
            src="/svgs/mantaray-coral.svg"
            alt=""
            className="w-[160px] md:w-[220px] pointer-events-none"
            style={{ animation: 'bob 6s ease-in-out infinite' }}
          />
        </div>

        {/* Lighthouse combined illustration */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <img
            src="/svgs/combined.svg"
            alt="Lighthouse — boat, building, and robot"
            className="w-full max-w-[550px] md:max-w-[700px] lg:max-w-[820px]"
          />
        </div>
      </div>

      {/* Wave transition to light section */}
      <div className="relative w-full pointer-events-none -mt-1">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
          <path d="M0,50 C360,90 720,10 1080,50 C1260,70 1380,80 1440,50 L1440,100 L0,100 Z" fill="#c8dfe8" opacity="0.3" />
          <path d="M0,65 C360,95 720,35 1080,65 C1260,80 1380,85 1440,65 L1440,100 L0,100 Z" fill="#d5e8f0" opacity="0.5" />
          <path d="M0,80 C360,98 720,62 1080,80 C1260,90 1380,92 1440,80 L1440,100 L0,100 Z" fill="#e8f4f8" />
        </svg>
      </div>
    </section>
  );
}
