export function SequenceHero() {
  return (
    <section className="relative bg-[#dce9ef] px-6 md:px-8 pt-16 md:pt-24 pb-0 text-center overflow-hidden">
      <div className="max-w-[700px] mx-auto">
        {/* DNA logo from the real site */}
        <div className="mb-4 flex justify-center">
          <img
            src="/svgs/diffbio-logo.svg"
            alt="diffbio DNA logo"
            className="w-[160px] h-[160px] md:w-[220px] md:h-[220px]"
          />
        </div>

        {/* Brand name */}
        <div className="mb-5">
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}>
            <span className="text-[2.5rem] md:text-[3.2rem] tracking-[-0.03em] text-[#1d88a4]">diff</span>
            <span className="text-[2.5rem] md:text-[3.2rem] tracking-[-0.03em] text-[#a4832e]">bio</span>
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-[1.8rem] md:text-[2.6rem] lg:text-[3rem] leading-[1.15] tracking-[-0.02em] text-[#003a59] mb-5"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
        >
          Sequence to Validation
        </h1>

        {/* Subtitle */}
        <p
          className="text-[15px] md:text-[18px] text-[#1d88a4] mb-8"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
        >
          The platform to design &amp; lab-validate protein function in days, not weeks
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 md:mb-16">
          <a
            href="https://forms.gle/g8EKdN4BsUqQu1zd9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 text-[14px] tracking-[-0.01em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Request Early Access
          </a>
          <a
            href="#team"
            className="px-6 py-2.5 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 text-[14px] tracking-[-0.01em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Meet The Team
          </a>
        </div>

      </div>

        {/* Lighthouse island — sits behind the waves */}
        <div className="relative z-[1] flex justify-center mt-8 md:mt-12 mb-[-20px] md:mb-[-30px]">
          <img
            src="/svgs/combined.svg"
            alt="Lighthouse — boat, building, and robot"
            className="w-[220px] md:w-[300px]"
          />
        </div>

        {/* Soft tiling waves at the bottom — in front of lighthouse */}
        <div className="relative z-[2] leading-[0] mt-[-25px] md:mt-[-35px]">
          {/* Back wave — slower, slightly offset */}
          <svg
            className="absolute bottom-0 left-0 w-[120%] -ml-[10%] h-[45px] md:h-[65px]"
            style={{ animation: 'wave-drift-slow 10s ease-in-out infinite' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C160,90 320,10 480,50 C640,90 800,10 960,50 C1120,90 1280,10 1440,50 L1440,120 L0,120 Z"
              fill="#c8e0eb"
            />
          </svg>
          {/* Front wave — main */}
          <svg
            className="relative block w-[120%] -ml-[10%] h-[35px] md:h-[50px]"
            style={{ animation: 'wave-drift 7s ease-in-out infinite' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,120 L0,120 Z"
              fill="#B8D4E3"
            />
          </svg>
        </div>
    </section>
  );
}
