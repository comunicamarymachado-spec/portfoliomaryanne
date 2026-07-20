import SectionEyebrow from "@/components/SectionEyebrow";
import ScrollReveal from "@/components/ScrollReveal";
import TideDivider from "@/components/TideDivider";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioFeatureCard from "@/components/PortfolioFeatureCard";
import { PORTFOLIO_CATEGORIES } from "@/lib/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionEyebrow>Portfólio</SectionEyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Estratégia em movimento, do social ao dado.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink-secondary)]">
            Uma seleção de trabalhos entre mídias sociais, landing pages,
            email marketing, newsletter e podcast.
          </p>
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-16">
          {PORTFOLIO_CATEGORIES.map((category, index) => (
            <div key={category.name}>
              {index > 0 && <TideDivider className="mb-16" />}
              <ScrollReveal>
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {category.name}
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="mt-6 block">
                {category.items.length === 1 ? (
                  <PortfolioFeatureCard
                    item={category.items[0]}
                    categoryName={category.name}
                  />
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 sm:[grid-auto-flow:dense] lg:grid-cols-4">
                    {category.items.map((item) => (
                      <PortfolioCard
                        key={item.title}
                        item={item}
                        categoryName={category.name}
                      />
                    ))}
                  </div>
                )}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
