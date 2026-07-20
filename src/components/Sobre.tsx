import SectionEyebrow from "@/components/SectionEyebrow";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";
import { SKILL_GROUPS, ALL_SKILLS } from "@/lib/skills";

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionEyebrow>Sobre</SectionEyebrow>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal delay={0.1}>
            {/* TROQUE AQUI: substituir o monograma "MM" por uma foto real quando disponível */}
            <div className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)]">
              <span
                className="font-display text-7xl font-semibold text-[var(--color-ink-faint)] sm:text-8xl"
                aria-hidden="true"
              >
                MM
              </span>
              <span className="sr-only">
                Monograma de Maryanne Machado — foto em breve
              </span>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.15}>
              <blockquote className="border-l-2 border-copper pl-5 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                “Estrategista de conteúdo e integração de inteligências —
                trabalho onde o marketing deixa de ser campanha e vira
                fluxo.”
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 leading-relaxed text-[var(--color-ink-secondary)]">
                Sou Maryanne Machado, jornalista formada pelo Centro
                Universitário Maurício de Nassau (2021) e atualmente cursando
                pós-graduação em Design de Conteúdo na CESAR School.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 leading-relaxed text-[var(--color-ink-secondary)]">
                Tenho experiência em empresas de tecnologia, comunicação,
                educação e terceiro setor — sempre com foco em conteúdo que
                gera conexão real com as pessoas certas. Hoje, aplico
                inteligência artificial para otimizar estratégia, produção e
                distribuição de conteúdo em cada etapa do funil.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-mono text-xs uppercase tracking-wide text-[var(--color-tide-light)]">
                      {group.title}
                    </h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-sm leading-snug text-[var(--color-ink-secondary)]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <ScrollReveal delay={0.1} className="mt-16 block">
        <Marquee items={ALL_SKILLS} />
      </ScrollReveal>
    </section>
  );
}
