import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES } from "@/lib/cases";
import assets from "@/lib/image-assets.json";
import Contato from "@/components/Contato";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return CASES.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = CASES.find(p => p.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, alternates: { canonical: `/projetos/${slug}` }, openGraph: { title: item.title + " — Maryanne Machado", description: item.summary, url: `/projetos/${slug}`, images: [{ url: item.image, alt: item.alt }] }, twitter: { card: "summary_large_image", title: item.title, description: item.summary, images: [item.image] } };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = CASES.findIndex(p => p.slug === slug);
  if (index < 0) notFound();
  const project = CASES[index];
  const next = CASES[(index + 1) % CASES.length];
  const asset = assets.find(a => a.src === project.image)!;
  return <>
    <article className="case-page shell">
      <Link href="/#portfolio" className="text-link back-link">← Trabalhos selecionados</Link>
      <header className="case-header"><p className="eyebrow">{project.number} / {project.discipline}</p><h1>{project.title}<span className="accent">.</span></h1><p className="case-headline">{project.headline}</p></header>
      <dl className="case-facts"><div><dt>Organização</dt><dd>{project.organization}</dd></div><div><dt>Meu papel</dt><dd>{project.role}</dd></div><div><dt>Formato</dt><dd>{project.slug === "incubascience" ? "Redes sociais" : project.discipline === "Design de conteúdo" ? "Página de produto" : "Videocast e podcast"}</dd></div></dl>
      <div className="case-narrative"><section><h2>Contexto</h2><p>{project.context}</p></section><section><h2>Minha contribuição</h2><p>{project.contribution}</p></section></div>
      <figure className={"case-figure " + project.tone} data-motion="image"><a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={"Ampliar peça: " + project.title}><Image src={project.image} alt={project.alt} width={asset.width} height={asset.height} sizes="(max-width: 700px) 90vw, 1000px" /></a><figcaption>Peça do projeto · {project.title}<a href={project.image} target="_blank" rel="noopener noreferrer">Ampliar imagem ↗</a></figcaption></figure>
      <section className="case-execution"><h2>Trabalho publicado</h2><div><p>{project.execution}</p><a href={project.item.link} target="_blank" rel="noopener noreferrer" className="text-link">{project.slug === "strat-o-cast" ? "Assistir no YouTube" : project.slug === "strateegia" ? "Visitar a plataforma" : "Ver publicação original"} <span aria-hidden="true">↗</span></a></div></section>
      <nav className="next-project" aria-label="Outros projetos"><p className="eyebrow">Próximo trabalho</p><Link href={"/projetos/" + next.slug}>{next.title}<span aria-hidden="true">↗</span></Link><Link href="/arquivo" className="text-link">Ver arquivo completo →</Link></nav>
    </article><Contato />
  </>;
}
