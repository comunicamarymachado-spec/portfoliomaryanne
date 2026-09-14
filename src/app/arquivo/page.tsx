import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_CATEGORIES } from "@/lib/portfolio";
import assets from "@/lib/image-assets.json";
import Contato from "@/components/Contato";

export const metadata: Metadata = { title: "Arquivo de trabalhos", description: "Trabalhos de Maryanne Machado em redes sociais, páginas, e-mail marketing, newsletter e podcast.", alternates: { canonical: "/arquivo" }, openGraph: { title: "Arquivo de trabalhos — Maryanne Machado", description: "Conteúdo e comunicação em diferentes formatos e contextos.", url: "/arquivo" } };
export default function Archive() {
  return <><div className="archive-page shell"><Link href="/#portfolio" className="text-link back-link">← Trabalhos selecionados</Link><header className="archive-header"><p className="eyebrow">Por formato</p><h1>Arquivo<span className="accent">.</span></h1><p>Consulte as peças por formato ou conheça o contexto de cada cliente nos cases.</p><nav className="archive-clients" aria-label="Cases por cliente"><Link href="/projetos/tds-company">TDS Company</Link><Link href="/projetos/strateegia">strateegia</Link><Link href="/projetos/semine">Semine</Link></nav></header>
    <nav className="archive-nav" aria-label="Formatos de trabalho">{PORTFOLIO_CATEGORIES.map((category, i) => <a key={category.name} href={"#formato-" + i}>{category.name}</a>)}</nav>
    {PORTFOLIO_CATEGORIES.map((category, i) => <section key={category.name} id={"formato-" + i} className="archive-category"><h2 data-motion="heading">{category.name}</h2><div>{category.items.map(item => {
      const asset = assets.find(a => a.url === item.image)!;
      return <article key={item.title} className="archive-row"><a className="archive-image" href={asset.src} target="_blank" rel="noopener noreferrer" aria-label={"Ampliar peça: " + item.title}><Image src={asset.src} alt={"Peça de " + category.name.toLowerCase() + ": " + item.title} width={asset.width} height={asset.height} sizes="(max-width: 700px) 30vw, 180px" /></a><div><h3>{item.title}</h3><p>{item.description}</p><a href={item.link} target="_blank" rel="noopener noreferrer" className="case-action">Ver trabalho</a>{item.relatedLinks?.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="case-action">{link.label}</a>)}</div></article>;
    })}</div></section>)}
  </div><Contato /></>;
}


