import Image from "next/image";
import Link from "next/link";
import { CASES } from "@/lib/cases";
export default function Portfolio() {
  return <section id="portfolio" className="selected shell section-space" aria-labelledby="work-title">
    <div className="section-heading"><p className="eyebrow">Uma seleção</p><h2 id="work-title">Trabalhos selecionados<span className="accent">.</span></h2></div>
    <div className="selected-list">{CASES.map(project => <article key={project.slug} className={"selected-project " + project.tone}>
      <Link href={"/projetos/" + project.slug} className="project-visual" data-motion="image" aria-label={"Conhecer projeto: " + project.title}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1400px) 58vw, 800px" className="project-art" />
        <span className="visual-link" aria-hidden="true">↗</span>
      </Link>
      <div className="project-copy"><p className="project-index">{project.number}<span>{project.discipline}</span></p>
        <h3><Link href={"/projetos/" + project.slug}>{project.title}</Link></h3><p className="project-summary">{project.summary}</p>
        <dl className="project-role"><dt>Meu papel</dt><dd>{project.role}</dd></dl>
        <Link href={"/projetos/" + project.slug} className="text-link">Conhecer projeto <span aria-hidden="true">↗</span></Link>
      </div>
    </article>)}</div>
    <div className="archive-teaser"><p>Outros contextos, formatos e trabalhos.</p><Link href="/arquivo" className="text-link">Explorar o arquivo <span aria-hidden="true">↗</span></Link></div>
  </section>;
}
