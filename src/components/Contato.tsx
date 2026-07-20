import SectionEyebrow from "@/components/SectionEyebrow";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5581991188728&text&type=phone_number&app_absent=0";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative bg-[var(--color-surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <SectionEyebrow className="text-center">Contato</SectionEyebrow>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Estratégia começa aqui.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-[var(--color-ink-secondary)]">
            Fale comigo — por e-mail, LinkedIn ou WhatsApp.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a
              href="mailto:comunicamarymachado@gmail.com"
              className="text-ink underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-copper"
            >
              comunicamarymachado@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/comunicamarymachado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-copper"
            >
              linkedin.com/in/comunicamarymachado
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-copper"
            >
              WhatsApp
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
