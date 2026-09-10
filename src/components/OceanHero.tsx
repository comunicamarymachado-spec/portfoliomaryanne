"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import "./ocean-hero.css";

export default function OceanHero({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  return <section id="hero" className="hero ocean-hero" aria-labelledby="hero-title" data-paused={paused}>
    <div className="ocean-water" aria-hidden="true"><Image src="/images/hero-ocean-preview.png" alt="" fill priority sizes="100vw" /></div>
    <div className="ocean-veil" aria-hidden="true" />
    <div className="shell ocean-inner">{children}</div>
    <button className="ocean-pause" type="button" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused ? "Retomar movimento" : "Pausar movimento"}</button>
  </section>;
}
