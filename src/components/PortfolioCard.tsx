import Image from "next/image";
import type { PortfolioItem } from "@/lib/portfolio";

const SPAN_CLASSES: Record<PortfolioItem["span"], string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

type PortfolioCardProps = {
  item: PortfolioItem;
  categoryName: string;
};

export default function PortfolioCard({ item, categoryName }: PortfolioCardProps) {
  return (
    <article
      className={`group relative aspect-[4/5] h-full w-full overflow-hidden rounded-2xl bg-[var(--color-surface)] sm:aspect-auto ${SPAN_CLASSES[item.span]}`}
    >
      <Image
        src={item.image}
        alt={`Peça de ${categoryName.toLowerCase()}: ${item.title}`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ocean)]/95 via-[var(--color-ocean)]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-tide-light)]">
          {categoryName}
        </span>
        <p className="mt-1 font-display text-base font-medium leading-tight text-ink sm:text-lg">
          {item.title}
        </p>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-snug text-[var(--color-ink-secondary)] opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100">
          {item.description}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver completo: ${item.title}`}
          className="relative z-10 mt-2 inline-flex w-fit items-center gap-1 text-xs font-medium text-copper transition-colors before:absolute before:inset-0 before:content-[''] hover:text-[#d99669]"
        >
          Ver completo <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
