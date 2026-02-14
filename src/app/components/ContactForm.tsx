import { motion } from 'motion/react';
import { useState } from 'react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/mnjbdpob', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      setSubmitted(true);
    } catch {
      // Handle error silently for now
    }
  };

  return (
    <section
      id="early-access"
      className="relative px-6 md:px-8 pt-12 md:pt-20 pb-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1d3a42 0%, #152a30 100%)',
      }}
    >
      <div className="max-w-[600px] mx-auto">
        {/* Section header */}
        <motion.h2
          className="text-[15px] md:text-[17px] text-[#b8d4e3]/60 mb-1 text-center tracking-[0.02em]"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0)}
        >
          Get Started
        </motion.h2>
        <motion.h3
          className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-[#1d88a4] mb-3 text-center"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
          {...fadeUp(0.05)}
        >
          Request Early Access
        </motion.h3>
        <motion.p
          className="text-[14px] md:text-[16px] text-[#b8d4e3]/60 mb-8 md:mb-10 text-center max-w-[500px] mx-auto leading-[1.7]"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          {...fadeUp(0.1)}
        >
         Tell us about your workflow and learn how DiffBio can accelerate your designs. 
        </motion.p>

        {submitted ? (
          <motion.div
            className="bg-[#2d6a7a]/90 border border-white/10 rounded-[20px] p-8 md:p-10 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-[2.5rem] mb-4">
              <img
                src="/svgs/fish-science.svg"
                alt=""
                className="w-[80px] mx-auto"
                style={{ animation: 'bob 5s ease-in-out infinite' }}
              />
            </div>
            <h4
              className="text-[1.3rem] md:text-[1.6rem] text-white mb-2"
              style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 500 }}
            >
              Thanks for your interest!
            </h4>
            <p
              className="text-[14px] md:text-[16px] text-[#b8d4e3]"
              style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
            >
              We'll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-[#2d6a7a]/90 border border-white/10 rounded-[20px] p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
            {...fadeUp(0.15)}
          >
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] text-[#b8d4e3]/80 mb-1.5 tracking-[0.02em]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#0a1a1e]/50 border border-white/10 rounded-lg text-white placeholder-[#b8d4e3]/40 focus:outline-none focus:border-[#1d88a4] transition-colors text-[15px]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] text-[#b8d4e3]/80 mb-1.5 tracking-[0.02em]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#0a1a1e]/50 border border-white/10 rounded-lg text-white placeholder-[#b8d4e3]/40 focus:outline-none focus:border-[#1d88a4] transition-colors text-[15px]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                  placeholder="you@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-[13px] text-[#b8d4e3]/80 mb-1.5 tracking-[0.02em]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Company <span className="text-[#b8d4e3]/40">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-[#0a1a1e]/50 border border-white/10 rounded-lg text-white placeholder-[#b8d4e3]/40 focus:outline-none focus:border-[#1d88a4] transition-colors text-[15px]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                  placeholder="Your company"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] text-[#b8d4e3]/80 mb-1.5 tracking-[0.02em]"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                >
                  Message <span className="text-[#b8d4e3]/40">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 bg-[#0a1a1e]/50 border border-white/10 rounded-lg text-white placeholder-[#b8d4e3]/40 focus:outline-none focus:border-[#1d88a4] transition-colors text-[15px] resize-none"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                  placeholder="Tell us about your use case..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-2 px-6 py-3 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 text-[15px] tracking-[-0.01em]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  animation: 'glow-pulse 3s ease-in-out infinite',
                }}
              >
                Request Access
              </button>
            </div>
          </motion.form>
        )}
      </div>

      {/* Wave transition to Footer */}
      <div className="relative z-[2] leading-[0] mt-10 md:mt-14 -mx-6 md:-mx-8">
        <svg
          className="block w-full h-[40px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,120 L0,120 Z"
            fill="#0f1e22"
          />
        </svg>
      </div>
    </section>
  );
}
