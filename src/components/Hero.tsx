import { PROFILE } from "@/lib/profile";
import OceanHero from "./OceanHero";
export default function Hero() {
  return <OceanHero>
    <div className="hero-topline"><p>Estrategista de conteúdo e comunicação</p><p>Recife, Brasil</p></div>
    <h1 id="hero-title"><span>Maryanne</span><span>Machado<span className="name-period">.</span></span></h1>
        <div className="ocean-marquee">
      <p className="sr-only">estratégia é fluxo contínuo</p>
      <div className="ocean-marquee-track" aria-hidden="true">
        {[0, 1].map(group => <div className="ocean-marquee-group" key={group}>
          {[0, 1, 2].map(item => <span key={item}>estratégia é fluxo contínuo <span className="ocean-marquee-divider"><svg width="32" height="14" viewBox="0 0 32 14" fill="none" aria-hidden="true"><path d="M1 7C6 0 11 0 16 7S26 14 31 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></span>)}
        </div>)}
      </div>
    </div>
    <div className="hero-bottom"><a href="#portfolio" className="text-link">Conheça meu trabalho <span aria-hidden="true">↓</span></a><p>{PROFILE.introduction}</p></div>
  </OceanHero>;
}


