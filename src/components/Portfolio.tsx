import Image from "next/image";
import Link from "next/link";
import { CLIENT_CASES as CASES } from "@/lib/client-cases";
export default function Portfolio() {
  return <section id="portfolio" className="selected shell section-space" aria-labelledby="work-title">
    <div className="section-heading"><p className="eyebrow">Por cliente</p><h2 id="work-title">Estratégia em contexto<span className="accent">.</span></h2></div>
    <p className="selected-intro">Cada cliente reúne um contexto, decisões de conteúdo e diferentes formas de levar uma narrativa aos canais.</p><div className="selected-list">{CASES.map(project => <article key={project.slug} className={"selected-project " + project.tone}>
      <Link href={"/projetos/" + project.slug} className="project-visual" data-motion="image" aria-label={"Conhecer projeto: " + project.title}>
        <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1400px) 58vw, 800px" className="project-art" />
      </Link>
      <div className="project-copy"><p className="project-index">{project.number}<span>{project.discipline}</span></p>
        <h3><Link href={"/projetos/" + project.slug}>{project.title}</Link></h3><p className="project-summary">{project.summary}</p>
        <dl className="project-role"><dt>Meu papel</dt><dd>{project.role}</dd></dl>
        <Link href={"/projetos/" + project.slug} className="case-action">Explorar case</Link>
      </div>
    </article>)}</div>
    <div className="archive-teaser"><Link href="/arquivo" className="archive-cta">Explorar trabalhos por formato</Link></div>
  </section>;
}



