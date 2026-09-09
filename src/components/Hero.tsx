import { PROFILE } from "@/lib/profile";
import HeroCanvas from "./HeroCanvas";
export default function Hero() {
  return <section id="hero" className="hero shell" aria-labelledby="hero-title">
    <div className="hero-topline"><p>Estratégia de conteúdo e comunicação</p><p>Recife, Brasil</p></div>
    <HeroCanvas>
      <h1 id="hero-title"><span>Maryanne</span><span>Machado<span className="name-period">.</span></span></h1>
    </HeroCanvas>
    <div className="hero-bottom"><a href="#portfolio" className="text-link">Conheça meu trabalho <span aria-hidden="true">↓</span></a><p>{PROFILE.introduction}</p></div>
  </section>;
}
