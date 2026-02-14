export function BottomCTA() {
  return (
    <section className="relative bg-[#e8f4f8] px-6 md:px-8 pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-[820px] mx-auto text-center relative z-10">
        {/* DNA Logo — colorized with brand palette */}
        <div className="mb-6 flex justify-center">
          <svg className="w-20 h-20 md:w-28 md:h-28" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m1192.5 317.5c-10-10-25-10-35 0-70 70-187.5 87.5-327.5 52.5-37.5-140-17.5-255 52.5-327.5 10-10 10-25 0-35s-25-10-35 0c-77.5 80-102.5 202.5-70 347.5-42.5-10-80-12.5-117.5-12.5-110 0-197.5 40-255 112.5-60 77.5-75 192.5-47.5 322.5-147.5-32.5-270-7.5-347.5 70-10 10-10 25 0 35s25 10 35 0c70-70 187.5-87.5 327.5-52.5 37.5 140 17.5 255-52.5 327.5-10 10-10 25 0 35 5 5 10 7.5 17.5 7.5s12.5-2.5 17.5-7.5c77.5-80 102.5-202.5 70-347.5 42.5 10 80 12.5 117.5 12.5 110 0 197.5-40 255-112.5 60-77.5 75-192.5 47.5-322.5 42.5 10 82.5 15 120 15 95 0 172.5-27.5 230-85 7.5-7.5 7.5-25-2.5-35zm-435 397.5c-45 60-120 92.5-215 92.5-40 0-85-5-132.5-17.5-32.5-125-20-235 32.5-305 45-60 120-92.5 215-92.5 40 0 85 5 132.5 17.5 32.5 125 20 235-32.5 305z" fill="#1d88a4"/>
            <path d="m880 130 190 190c5 5 12.5 7.5 17.5 7.5 7.5 0 12.5-2.5 17.5-7.5 10-10 10-25 0-35l-190-190c-10-10-25-10-35 0-7.5 10-7.5 25 0 35z" fill="#a4832e"/>
            <path d="m842.5 192.5c-10 10-10 25 0 35l130 130c5 5 12.5 7.5 17.5 7.5 7.5 0 12.5-2.5 17.5-7.5 10-10 10-25 0-35l-130-130c-10-10-25-10-35 0z" fill="#a4832e"/>
            <path d="m110 882.5 190 190c5 5 12.5 7.5 17.5 7.5s12.5-2.5 17.5-7.5c10-10 10-25 0-35l-190-190c-10-10-25-10-35 0s-10 25 0 35z" fill="#7a2d4a"/>
            <path d="m152.5 805c-10 10-10 25 0 35l130 130c5 5 12.5 7.5 17.5 7.5 7.5 0 12.5-2.5 17.5-7.5 10-10 10-25 0-35l-130-130c-10-10-25-10-35 0z" fill="#7a2d4a"/>
            <path d="m505 420c-10 10-10 25 0 35l52.5 52.5c10 10 25 10 35 0s10-25 0-35l-52.5-52.5c-10-10-25-10-35 0z" fill="#003a59"/>
            <path d="m607.5 697.5c-10-10-25-10-35 0s-10 25 0 35l52.5 52.5c5 5 12.5 7.5 17.5 7.5s12.5-2.5 17.5-7.5c10-10 10-25 0-35z" fill="#003a59"/>
          </svg>
        </div>

        {/* Brand */}
        <div className="mb-4">
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}>
            <span className="text-[2.5rem] md:text-[3.5rem] tracking-[-0.04em] text-[#1d88a4]">
              diff
            </span>
            <span className="text-[2.5rem] md:text-[3.5rem] tracking-[-0.04em] text-[#a4832e]">
              bio
            </span>
          </span>
        </div>

        {/* Tagline */}
        <h2
          className="text-[1.6rem] md:text-[2.2rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-[#003a59] mb-3"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
        >
          Sequence to Validation
        </h2>

        <p
          className="text-[14px] md:text-[16px] text-[#205867] opacity-65 mb-8 max-w-[480px] mx-auto"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
        >
          The platform to design & lab-validate protein function in days, not weeks
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://forms.gle/g8EKdN4BsUqQu1zd9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 shadow-[0_4px_24px_rgba(29,136,164,0.25)] text-[15px] tracking-[-0.01em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Request Early Access
          </a>
          <a
            href="#team"
            className="inline-block px-7 py-3 text-[#1d88a4] border border-[#1d88a4]/25 rounded-full hover:bg-[#1d88a4]/5 transition-all duration-300 text-[15px] tracking-[-0.01em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
          >
            Meet The Team
          </a>
        </div>

        {/* Small lighthouse illustration */}
        <div className="mt-10 flex justify-center">
          <img
            src="/svgs/combined.svg"
            alt=""
            className="w-[180px] md:w-[240px] opacity-40"
          />
        </div>
      </div>
    </section>
  );
}
