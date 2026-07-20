const WAVE_FILL_PATH =
  "M0,30 Q25,10 50,30 T100,30 T150,30 T200,30 L200,60 L0,60 Z";

/**
 * Onda do rodapé do hero: "sol derretendo no mar" — gradiente cobre → maré,
 * deriva horizontal lenta em loop infinito.
 */
export default function HeroWave() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-16 sm:h-24 overflow-hidden"
      aria-hidden="true"
    >
      <div className="wave-track h-full">
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            className="h-full"
          >
            <defs>
              <linearGradient
                id={`heroWaveGradient-${i}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#C9875A" />
                <stop offset="100%" stopColor="#5B9DA0" />
              </linearGradient>
            </defs>
            <path d={WAVE_FILL_PATH} fill={`url(#heroWaveGradient-${i})`} opacity="0.85" />
          </svg>
        ))}
      </div>
    </div>
  );
}
