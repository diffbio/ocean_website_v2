export function HowItWorks() {
  return (
    <section className="bg-[#B8D4E3] px-6 md:px-8 py-14 md:py-20 overflow-hidden">
      <div className="max-w-[700px] mx-auto">
        {/* Section label */}
        <div className="text-center mb-3">
          <span className="text-[#1d88a4] text-[20px]">&#9776;</span>
        </div>
        <h2
          className="text-[15px] md:text-[17px] text-[#003a59] mb-2 text-center tracking-[0.02em]"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
        >
          How it Works
        </h2>
        <h3
          className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-[#1d88a4] mb-6 text-center"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
        >
          We run a tight ship:
          <br />
          Design to data in days
        </h3>

        {/* Intro text */}
        <div className="max-w-[540px] mx-auto space-y-3 mb-10 text-center">
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
        </div>

        {/* Decorative SVG before first card */}
        <div className="flex justify-center mb-6">
          <img src="/svgs/robot-fish.svg" alt="" className="w-[100px] md:w-[140px]" style={{ animation: 'bob 5s ease-in-out infinite' }} />
        </div>

        {/* Card 1 — Design in the browser */}
        <FeatureCard
          icon="/svgs/computer-combined.svg"
          title="Design in the browser"
          paragraphs={[
            'Explore sequence space, predict structures, and generate candidates without context-switching or messy wrappers.',
            'A/B test parts of your flagship pipeline against the newest models without a total overhaul',
          ]}
        />

        {/* Decorative SVG between cards */}
        <div className="flex justify-end pr-4 my-5">
          <img src="/svgs/squid-combined.svg" alt="" className="w-[90px] md:w-[120px]" style={{ animation: 'bob-alt 6s ease-in-out infinite' }} />
        </div>

        {/* Card 2 — We build and test */}
        <FeatureCard
          icon="/svgs/labrobot.png"
          title="We build and test"
          paragraphs={[
            'Submit your design sequences.',
            'We handle the DNA and the expression. Let our automation run assays to show which sequences are on the right track ... or whether to cut and run!',
          ]}
        />

        {/* Decorative SVG between cards */}
        <div className="flex justify-start pl-4 my-5">
          <img src="/svgs/mantaray-coral.svg" alt="" className="w-[100px] md:w-[130px]" style={{ animation: 'bob 7s ease-in-out infinite' }} />
        </div>

        {/* Card 3 — Data flows back */}
        <FeatureCard
          icon="/svgs/dataflow-logo.svg"
          title="Data flows back"
          paragraphs={[
            'Results integrate directly into your workspace. See what worked and use the data to inform your next batch.',
            'You get all the data right in the browser; even raw outputs, calibrations, and standards.',
            "Never wonder whether it's the construct or the prep again.",
          ]}
        />

        {/* Decorative SVG between cards */}
        <div className="flex justify-center my-5">
          <img src="/svgs/fish-science.svg" alt="" className="w-[100px] md:w-[130px]" style={{ animation: 'bob-alt 5.5s ease-in-out infinite' }} />
        </div>

        {/* Card 4 — Iterate quickly */}
        <FeatureCard
          icon="/svgs/iterate.svg"
          title="Iterate quickly"
          paragraphs={[
            'Find the right hits sooner.',
            'Learn from your designs faster.',
            'Run more experiments per quarter.',
            'De-risk your long shots.',
          ]}
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  paragraphs,
}: {
  icon: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="bg-[#2d6a7a] rounded-[20px] p-5 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
      <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-start">
        {/* Icon in light rounded box */}
        <div className="flex-shrink-0 w-[110px] md:w-[150px] bg-[#B8D4E3] rounded-2xl p-4 flex items-center justify-center">
          <img src={icon} alt="" className="w-full" />
        </div>
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4
            className="text-[1.3rem] md:text-[1.6rem] text-white mb-3 tracking-[-0.01em]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          >
            {title}
          </h4>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[15px] md:text-[16px] text-[#d4e8f0] leading-[1.7] mb-2 last:mb-0"
              style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
