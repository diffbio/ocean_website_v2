import { motion } from 'motion/react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const team = [
  {
    name: 'Dmitri Zorine',
    role: 'CEO',
    photo: '/images/dmitri.png',
    background: ['Institute for Protein Design', 'Zip Bio'],
    linkedin: 'https://www.linkedin.com/in/dzorine/',
  },
  {
    name: 'Luke Miller',
    role: 'CTO',
    photo: '/images/luke.png',
    background: ['Microsoft, Xbox Hardware', 'Reliable Robotics', 'SpaceX Flight Software'],
    linkedin: 'https://www.linkedin.com/in/lukemillerrobotics/',
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="relative px-6 md:px-8 pt-12 md:pt-20 pb-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #2d5a68 0%, #234550 100%)',
      }}
    >
      <div className="max-w-[1060px] mx-auto">
        {/* Section header */}
        <motion.h2
          className="text-[15px] md:text-[17px] text-[#b8d4e3]/60 mb-1 text-center tracking-[0.02em]"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0)}
        >
          The Crew
        </motion.h2>
        <motion.h3
          className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-[#1d88a4] mb-3 text-center"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0.05)}
        >
          Merging first-rate science
          <br />
          with ironclad engineering
        </motion.h3>
        <motion.p
          className="text-[14px] md:text-[16px] text-[#b8d4e3]/60 mb-6 text-center max-w-[600px] mx-auto leading-[1.7]"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          {...fadeUp(0.1)}
        >
          Built by those who have closed the loop for real
        </motion.p>

        {/* Squid divider */}
        <motion.div className="flex justify-center mb-8 md:mb-10" {...fadeUp(0.15)}>
          <img
            src="/svgs/squid-combined.svg"
            alt=""
            className="w-[140px] md:w-[180px] pointer-events-none"
            style={{ animation: 'bob 7s ease-in-out infinite' }}
          />
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px] mx-auto">
          {team.map((member, i) => (
            <motion.div key={member.name} {...fadeUp(i * 0.15)}>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2d6a7a]/90 border border-white/10 rounded-[20px] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Photo */}
                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden mb-4 border-2 border-white/10">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h4
                  className="text-[1.3rem] md:text-[1.6rem] text-white mb-0.5 tracking-[-0.01em]"
                  style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}
                >
                  {member.name}
                </h4>

                {/* Role */}
                <p
                  className="text-[12px] md:text-[13px] text-[#7ec8d8] tracking-[0.04em] uppercase mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  {member.role}
                </p>

                {/* Background */}
                <div className="space-y-1">
                  {member.background.map((item) => (
                    <p
                      key={item}
                      className="text-[14px] md:text-[15px] text-[#d4e8f0]/70 leading-[1.6]"
                      style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave transition to ContactForm */}
      <div className="relative z-[2] leading-[0] mt-10 md:mt-14 -mx-6 md:-mx-8">
        <svg
          className="block w-full h-[40px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,120 L0,120 Z"
            fill="#1d3a42"
          />
        </svg>
      </div>
    </section>
  );
}
