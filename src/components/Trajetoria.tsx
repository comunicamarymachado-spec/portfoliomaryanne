import { PROFILE } from "@/lib/profile";

export default function Trajetoria() {
  return <section id="trajetoria" className="cv-download shell" aria-labelledby="trajectory-title">
    <h2 id="trajectory-title">Currículo.</h2>
    <a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="case-action">Baixar currículo (PDF)</a>
  </section>;
}
