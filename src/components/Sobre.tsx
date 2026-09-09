import Image from "next/image";
import { PROFILE } from "@/lib/profile";
export default function Sobre() {
  return <section id="sobre" className="about shell section-space" aria-labelledby="about-title">
    <div className="about-image" data-motion="image"><Image src={PROFILE.portrait} alt="Maryanne Machado" fill sizes="(max-width: 700px) 85vw, 35vw" /></div>
    <div className="about-copy"><p className="eyebrow">Sobre Maryanne</p><h2 id="about-title">Um olhar de jornalista.<br /><em>Uma prática estratégica.</em></h2>{PROFILE.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
  </section>;
}
