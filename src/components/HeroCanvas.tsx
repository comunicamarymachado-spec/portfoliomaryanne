"use client";

import { useState, type ReactNode } from "react";
import "./hero-canvas.css";

export default function HeroCanvas({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  return <div className="hero-composition" data-paused={paused}>
    <div className="hero-fragment hero-fragment-science" aria-hidden="true">
      <svg viewBox="0 0 300 250" className="strategy-exploration" fill="none">
        <g className="strategy-orbits">
          <ellipse cx="150" cy="125" rx="115" ry="48" />
          <ellipse cx="150" cy="125" rx="115" ry="48" transform="rotate(60 150 125)" />
          <ellipse cx="150" cy="125" rx="115" ry="48" transform="rotate(120 150 125)" />
        </g>
        <circle cx="150" cy="125" r="5" className="strategy-center" />
      </svg>
    </div>
    {children}
    <div className="hero-fragment hero-fragment-product">
      <svg viewBox="0 0 360 200" preserveAspectRatio="none" className="strategy-convergence" aria-hidden="true" fill="none">
        <g className="strategy-fan">
          {[28,52,76,100,124,148,172].map(y=><path key={y} d={`M10 ${y}C90 ${y} 105 100 160 100H200C255 100 270 ${y} 350 ${y}`} />)}
        </g>
        <path className="strategy-direction" pathLength="100" d="M10 100H350" />
      </svg><p className="strategy-flow-phrase">estratégia é fluxo contínuo</p></div><button className="canvas-pause" type="button" aria-label={paused ? "Retomar movimento do hero" : "Pausar movimento do hero"} aria-pressed={paused} onClick={()=>setPaused(!paused)}>
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">{paused ? <path d="M3 1 11 6 3 11Z" fill="currentColor" /> : <path d="M3 1V11M9 1V11" stroke="currentColor" strokeWidth="2" />}</svg>
    </button>
  </div>;
}



