import ContactForm from "@/components/ContactForm";
import { PROFILE } from "@/lib/profile";
export default function Contato() {
  return <section id="contato" className="contact" aria-labelledby="contact-title"><div className="shell">
    <p className="eyebrow">Contato</p><div className="contact-heading"><h2 id="contact-title">Vamos conversar<span>?</span></h2><a href={"mailto:" + PROFILE.email} className="contact-arrow" aria-label="Enviar e-mail para Maryanne"><span aria-hidden="true">↗</span></a></div>
    <a href={"mailto:" + PROFILE.email} className="email-link">{PROFILE.email}</a>
    <div className="contact-bottom"><p>Recife, Pernambuco · Brasil</p><div><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div></div>
    <details className="contact-details"><summary>Prefere escrever por aqui? <span aria-hidden="true">+</span></summary><ContactForm /></details>
  </div></section>;
}
