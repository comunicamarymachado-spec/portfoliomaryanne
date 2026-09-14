import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { PROFILE } from "@/lib/profile";
export default function Contato() {
  return <section id="contato" className="contact" aria-labelledby="contact-title"><div className="shell">
    <p className="eyebrow">Contato</p><div className="contact-heading"><h2 id="contact-title">Vamos conversar<span>?</span></h2></div>
    <a href={"mailto:" + PROFILE.email} className="email-link">{PROFILE.email}</a>
    <div className="contact-bottom"><p>Recife, Pernambuco · Brasil</p><div className="contact-actions"><a className="contact-button contact-button-primary" href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" /><span>Conversar no WhatsApp</span></a><a className="contact-button" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" /><span>Ver LinkedIn</span></a></div></div>
    <details className="contact-details"><summary>Prefere escrever por aqui? <span aria-hidden="true">+</span></summary><ContactForm /></details>
  </div></section>;
}
