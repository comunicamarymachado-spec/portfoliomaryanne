import ScrollReveal from "@/components/ScrollReveal";
import HeroPortrait from "@/components/HeroPortrait";
import HeroWave from "@/components/HeroWave";
import SectionEyebrow from "@/components/SectionEyebrow";
import StatCounter from "@/components/StatCounter";

const STATS = [
  { value: 6, suffix: "+", label: "Anos de experiência" },
  { value: 20, suffix: "+", label: "Clientes atendidos" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-24"
    >
      <div className="glow-copper" />
      <div className="glow-tide" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <ScrollReveal delay={0}>
            <SectionEyebrow>
              Marketing, estratégia, conteúdo &amp; inovação.
            </SectionEyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Estratégia é fluxo. Não{" "}
              <span className="text-copper">campanha</span>.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-secondary)] sm:text-lg">
              Sou jornalista e estrategista de conteúdo, trabalho na fronteira
              entre narrativa, dados e inteligência artificial integrada a
              inteligência humana e social. Acredito que cultura é
              diferencial competitivo — não decoração — e que conteúdo bom
              nasce de estratégia, não do contrário.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="rounded-full bg-copper px-6 py-3 text-sm font-medium text-ocean transition-colors hover:bg-[#d99669]"
              >
                Ver portfólio
              </a>
              <a
                href="#contato"
                className="rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-[var(--color-surface)]"
              >
                Fale comigo
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <dl className="mt-12 flex gap-10">
              {STATS.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </dl>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <HeroPortrait />
        </ScrollReveal>
      </div>

      <HeroWave />
    </section>
  );
}
