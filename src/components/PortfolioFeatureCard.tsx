import Image from "next/image";
import type { PortfolioItem } from "@/lib/portfolio";

type PortfolioFeatureCardProps = {
  item: PortfolioItem;
  categoryName: string;
};

/**
 * Layout maior/editorial para categorias com um único item (ex.: Newsletter,
 * Podcast) — evita um bloco pequeno e desalinhado no meio do mosaico.
 */
export default function PortfolioFeatureCard({
  item,
  categoryName,
}: PortfolioFeatureCardProps) {
  return (
    <article className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] sm:grid-cols-2">
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-auto">
        <Image
          src={item.image}
          alt={`Peça de ${categoryName.toLowerCase()}: ${item.title}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center gap-3 p-6 sm:p-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-tide-light)]">
          {categoryName}
        </span>
        <p className="font-display text-xl font-medium leading-tight text-ink sm:text-2xl">
          {item.title}
        </p>
        <p className="text-sm leading-relaxed text-[var(--color-ink-secondary)] sm:text-base">
          {item.description}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver completo: ${item.title}`}
          className="relative z-10 mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-copper transition-colors before:absolute before:inset-0 before:content-[''] hover:text-[#d99669]"
        >
          Ver completo <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
