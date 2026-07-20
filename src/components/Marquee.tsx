type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div
      className="relative overflow-hidden border-y border-[var(--color-line)] py-5"
      aria-hidden="true"
    >
      <div className="marquee-track gap-8">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-8 pr-8">
            {items.map((item, i) => (
              <li
                key={`${copy}-${item}-${i}`}
                className="flex items-center gap-8 whitespace-nowrap font-mono text-sm uppercase tracking-wide text-[var(--color-ink-faint)]"
              >
                {item}
                <span className="text-copper">◆</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
