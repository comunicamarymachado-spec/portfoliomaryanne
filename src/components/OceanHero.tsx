"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import "./ocean-hero.css";

export default function OceanHero({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const water = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => { if (paused || preference.matches) water.current?.pauseAnimations(); else water.current?.unpauseAnimations(); };
    sync(); preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, [paused]);
  return <section id="hero" className="hero ocean-hero" aria-labelledby="hero-title" data-paused={paused}>
    <svg ref={water} className="ocean-filter" aria-hidden="true" width="0" height="0"><defs><filter id="ocean-ripple" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.018" numOctaves="1" seed="7" result="water"><animate attributeName="baseFrequency" values="0.006 0.018;0.009 0.022;0.006 0.018" dur="12s" repeatCount="indefinite" /></feTurbulence><feDisplacementMap in="SourceGraphic" in2="water" scale="24" xChannelSelector="R" yChannelSelector="G"><animate attributeName="scale" values="18;34;18" dur="8s" repeatCount="indefinite" /></feDisplacementMap></filter></defs></svg>
    <div className="ocean-water" aria-hidden="true"><Image src="/images/hero-ocean-preview.png" alt="" fill priority sizes="100vw" /></div>
    <div className="ocean-veil" aria-hidden="true" />
    <div className="shell ocean-inner">{children}</div>
    <button className="ocean-pause" type="button" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused ? "Retomar movimento" : "Pausar movimento"}</button>
  </section>;
}
