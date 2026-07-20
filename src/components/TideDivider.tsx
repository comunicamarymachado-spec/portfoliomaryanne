type TideDividerProps = {
  className?: string;
};

const WAVE_PATH = "M0,12 Q25,0 50,12 T100,12 T150,12 T200,12";

/**
 * Linha-maré: divisor ondulado fino que se repete entre as seções,
 * assinatura visual recorrente do site. Duplicado para loop horizontal sem costura.
 */
export default function TideDivider({ className = "" }: TideDividerProps) {
  return (
    <div
      className={`relative overflow-hidden h-6 w-full ${className}`}
      aria-hidden="true"
    >
      <div className="tide-line-track absolute inset-y-0 left-0 h-full">
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox="0 0 200 24"
            preserveAspectRatio="none"
            className="h-full"
          >
            <path
              d={WAVE_PATH}
              fill="none"
              stroke="var(--color-tide)"
              strokeWidth="1"
              strokeOpacity="0.55"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
