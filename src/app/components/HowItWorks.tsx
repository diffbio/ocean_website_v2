import { motion } from 'motion/react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const BUBBLES = [
  // Left edge
  { left: '3%', size: 28, duration: 12, delay: 0 },
  { left: '7%', size: 18, duration: 15, delay: 2 },
  { left: '1%', size: 36, duration: 18, delay: 5 },
  // Left-center
  { left: '18%', size: 14, duration: 20, delay: 3 },
  { left: '25%', size: 22, duration: 16, delay: 8 },
  // Center
  { left: '38%', size: 16, duration: 17, delay: 6 },
  { left: '50%', size: 20, duration: 14, delay: 1 },
  { left: '62%', size: 14, duration: 19, delay: 9 },
  // Right-center
  { left: '75%', size: 24, duration: 15, delay: 4 },
  { left: '82%', size: 12, duration: 18, delay: 11 },
  // Right edge
  { left: '90%', size: 32, duration: 13, delay: 7 },
  { left: '95%', size: 16, duration: 16, delay: 2 },
  { left: '97%', size: 28, duration: 20, delay: 10 },
] as const;

const steps = [
  {
    number: '01',
    icon: '/svgs/computer-combined.svg',
    title: 'Design in the browser',
    paragraphs: [
      'Explore sequence space, predict structures, and generate candidates without context-switching or messy wrappers.',
      'A/B test parts of your flagship pipeline against the newest models without a total overhaul.',
    ],
  },
  {
    number: '02',
    icon: '/svgs/labrobot.png',
    title: 'We build and test',
    subtitle: 'Hardware in the Loop',
    paragraphs: [
      'Submit your design sequences.',
      'We handle the DNA and the expression. Let our automation run assays to show which sequences are on the right track ... or whether to cut and run!',
    ],
  },
  {
    number: '03',
    icon: '/svgs/dataflow-logo.svg',
    title: 'Data flows back',
    paragraphs: [
      'Results integrate directly into your workspace with full traceability. See what worked and use the data to inform your next batch.',
      'You get all the data right in the browser; even raw outputs, calibrations, and standards.',
      "Never wonder whether it's the construct or the prep again.",
    ],
  },
  {
    number: '04',
    icon: '/svgs/iterate.svg',
    title: 'Iterate quickly',
    paragraphs: [
      'Find the right hits sooner.',
      'Learn from your designs faster.',
      'Run more experiments per quarter.',
      'De-risk your long shots.',
      'Early proof before expensive optimization.',
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#B8D4E3] px-6 md:px-8 pt-10 md:pt-16 pb-0 overflow-hidden">
      {/* Rising bubbles — full width, behind cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: -20,
              left: b.left,
              width: b.size,
              height: b.size,
              borderRadius: '50%',
              background: 'rgba(29, 136, 164, 0.6)',
              animation: `bubble-rise ${b.duration}s linear ${b.delay}s infinite`,
              animationFillMode: 'backwards',
            }}
          />
        ))}
      </div>

      <div className="max-w-[1060px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <motion.div className="text-center mb-2" {...fadeUp(0)}>
          <span className="text-[#1d88a4] text-[20px]">&#9776;</span>
        </motion.div>
        <motion.h2
          className="text-[15px] md:text-[17px] text-[#003a59] mb-1 text-center tracking-[0.02em]"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0.05)}
        >
          How it Works
        </motion.h2>
        <motion.h3
          className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-[#1d88a4] mb-2 text-center"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0.1)}
        >
          We run a tight ship:
          <br />
          Design to data in days
        </motion.h3>

        {/* Subtitle tagline from deck */}
        <motion.p
          className="text-[14px] md:text-[16px] text-[#003a59]/60 mb-5 text-center tracking-[0.01em] italic"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0.15)}
        >
          Engineered for speed, consistency, and trust
        </motion.p>

        {/* Intro text — wider */}
        <motion.div className="max-w-[860px] mx-auto space-y-3 mb-6 text-center" {...fadeUp(0.2)}>
          <p
            className="text-[15px] md:text-[17px] text-[#1a4a5e] leading-[1.7]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            Use our app for intuitive design, get access to even-keeled
            inference autoscaling, and share a project workspace with your
            colleagues.
          </p>
          <p
            className="text-[15px] md:text-[17px] text-[#1a4a5e] leading-[1.7]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            Let us handle gene synthesis and cloning; get actionable
            biochemical data at a turnaround time you can't get anywhere else.
          </p>
        </motion.div>

        {/* Deliberate creature accent — centered divider */}
        <motion.div className="flex justify-center mb-6" {...fadeUp(0.25)}>
          <img
            src="/svgs/robot-fish.svg"
            alt=""
            className="w-[120px] md:w-[160px] pointer-events-none"
            style={{ animation: 'bob 5s ease-in-out infinite' }}
          />
        </motion.div>

        {/* 2-col card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div key={step.number} {...fadeUp(i % 2 === 0 ? 0 : 0.15)}>
              <FeatureCard
                number={step.number}
                icon={step.icon}
                title={step.title}
                subtitle={step.subtitle}
                paragraphs={step.paragraphs}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave transition to BottomDark — flush, full-width */}
      <div className="relative z-[2] leading-[0] mt-10 md:mt-14 -mx-6 md:-mx-8">
        <svg
          className="block w-full h-[40px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,120 L0,120 Z"
            fill="#25373b"
          />
        </svg>
      </div>
    </section>
  );
}

function FeatureCard({
  number,
  icon,
  title,
  subtitle,
  paragraphs,
}: {
  number: string;
  icon: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
}) {
  return (
    <div className="bg-[#2d6a7a]/90 border border-white/10 rounded-[20px] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col items-center text-center">
      {/* Step number */}
      <span
        className="self-start text-[3rem] leading-none text-white/10 mb-2"
        style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 600 }}
      >
        {number}
      </span>

      {/* Icon */}
      <div className="w-[100px] md:w-[120px] bg-[#B8D4E3] rounded-2xl p-3 flex items-center justify-center mb-4">
        <img src={icon} alt="" className="w-full" />
      </div>

      {/* Title */}
      <h4
        className="text-[1.3rem] md:text-[1.6rem] text-white mb-1 tracking-[-0.01em]"
        style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}
      >
        {title}
      </h4>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-[12px] md:text-[13px] text-[#7ec8d8] tracking-[0.04em] uppercase mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          {subtitle}
        </p>
      )}
      {!subtitle && <div className="mb-3" />}

      {/* Paragraphs */}
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[14px] md:text-[16px] text-[#d4e8f0] leading-[1.7] mb-2.5 last:mb-0"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}
