import { EXPERIENCE } from "@/lib/experience";
import { PROFILE } from "@/lib/profile";
export default function Trajetoria() {
  return <section id="trajetoria" className="trajectory shell" aria-labelledby="trajectory-title">
    <div className="trajectory-intro"><p className="eyebrow">Percurso</p><h2 id="trajectory-title">Experiência que<br />informa o trabalho.</h2><a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="text-link">Currículo completo (PDF) <span aria-hidden="true">↗</span></a></div>
    <div className="experience-list">{EXPERIENCE.slice(0, 2).map(item => <article key={item.company} className="experience-row"><p className="period">{item.period}</p><h3>{item.company}</h3><p className="experience-role">{item.role}</p><p>{item.description}</p></article>)}
      <details className="earlier-experience"><summary>Experiências anteriores <span aria-hidden="true">+</span></summary>{EXPERIENCE.slice(2).map(item => <article key={item.company} className="experience-row"><p className="period">{item.period}</p><h3>{item.company}</h3><p className="experience-role">{item.role}</p><p>{item.description}</p></article>)}</details>
    </div>
  </section>;
}
