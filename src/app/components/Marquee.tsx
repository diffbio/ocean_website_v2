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
    <div className="bg-[#e8f4f8] py-10 overflow-hidden">
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
            className="w-8 h-8 md:w-11 md:h-11 opacity-20 flex-shrink-0"
            style={{ filter: 'sepia(0.2) hue-rotate(160deg) saturate(0.5)' }}
          />
        ))}
      </div>
    </div>
  );
}
