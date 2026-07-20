import SectionEyebrow from "@/components/SectionEyebrow";
import ScrollReveal from "@/components/ScrollReveal";
import { EXPERIENCE } from "@/lib/experience";

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <SectionEyebrow>Trajetória</SectionEyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Experiência profissional.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-10">
            <div className="flex flex-col gap-6 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Maryanne Machado
                </p>
                <p className="mt-1 text-[var(--color-ink-secondary)]">
                  Estrategista de Marketing e Conteúdo
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
                  comunicamarymachado@gmail.com · Recife, PE
                </p>
              </div>

              {/* TROQUE AQUI: substituir href="#" pelo link real do PDF do currículo quando disponível */}
              <a
                href="#"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-[var(--color-surface-hover)]"
              >
                Baixar CV (PDF)
              </a>
            </div>

            <ol className="mt-8 flex flex-col gap-8">
              {EXPERIENCE.map((item) => (
                <li
                  key={`${item.company}-${item.period}`}
                  className="flex flex-col gap-2 sm:flex-row sm:gap-8"
                >
                  <div className="shrink-0 sm:w-40">
                    <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
                      {item.period}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-lg font-medium text-ink">
                      {item.role} ·{" "}
                      <span className="text-copper">{item.company}</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-faint)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
