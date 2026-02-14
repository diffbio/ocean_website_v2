const MARQUEE_SVGS = [
  '/svgs/dna.svg',
  '/svgs/microscope.svg',
  '/svgs/fish.svg',
  '/svgs/beaker.svg',
  '/svgs/robot1.svg',
  '/svgs/gears.svg',
  '/svgs/octopus.svg',
  '/svgs/cpu.svg',
  '/svgs/coral.svg',
  '/svgs/glasses.svg',
  '/svgs/anchor.svg',
  '/svgs/plant.svg',
  '/svgs/testtube.svg',
  '/svgs/sailboat.svg',
  '/svgs/crab.svg',
  '/svgs/carbons.svg',
  '/svgs/ray.svg',
  '/svgs/microbe.svg',
];

export function Marquee() {
  const items = [...MARQUEE_SVGS, ...MARQUEE_SVGS];

  return (
    <div className="bg-[#c4dce8] py-5 overflow-hidden space-y-4">
      {/* Row 1 — scrolls left */}
      <div
        className="flex gap-16 items-center hover:[animation-play-state:paused]"
        style={{
          animation: 'marquee-scroll 50s linear infinite',
          width: 'max-content',
        }}
      >
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-8 h-8 md:w-11 md:h-11 opacity-30 flex-shrink-0"
            style={{ filter: 'sepia(0.2) hue-rotate(160deg) saturate(0.5)' }}
          />
        ))}
      </div>

      {/* Row 2 — scrolls right (counter-scroll) */}
      <div
        className="flex gap-16 items-center hover:[animation-play-state:paused]"
        style={{
          animation: 'marquee-scroll 50s linear infinite reverse',
          width: 'max-content',
        }}
      >
        {[...items].reverse().map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-8 h-8 md:w-11 md:h-11 opacity-30 flex-shrink-0"
            style={{ filter: 'sepia(0.2) hue-rotate(160deg) saturate(0.5)' }}
          />
        ))}
      </div>
    </div>
  );
}
