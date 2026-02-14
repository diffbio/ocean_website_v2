export function BottomDark() {
  return (
    <section className="bg-[#25373b] px-6 md:px-8 py-16 md:py-24 text-center">
      <div className="max-w-[620px] mx-auto">
        <h2
          className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.1] tracking-[-0.02em] text-[#1d88a4] mb-8"
          style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
        >
          Most computational designs fail when they hit the real world
        </h2>

        <div className="space-y-5 mb-10">
          <p
            className="text-[14px] md:text-[16px] text-[#b8d4e3] leading-[1.7]"
            style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 300 }}
          >
            Generative models can produce thousands of candidate sequences. But{' '}
            <em>in silico</em> scores don't guarantee a protein that folds
            correctly, binds the target tightly, or stays stable under real
            conditions.
          </p>
          <p
            className="text-[14px] md:text-[16px] text-[#b8d4e3] leading-[1.7]"
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
          className="inline-block px-7 py-3 bg-[#1d88a4] text-white rounded-full hover:bg-[#2398b6] transition-all duration-300 text-[14px] tracking-[-0.01em]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          Request Early Access
        </a>
      </div>
    </section>
  );
}
