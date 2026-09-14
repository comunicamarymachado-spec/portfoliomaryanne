"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/profile";

export default function PortraitJourney({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = root.current;
    const image = photo.current;
    if (!container || !image) return;
    const source = container.querySelector<HTMLElement>(".portrait-origin");
    const destination = container.querySelector<HTMLElement>(".about-image");
    const thought = container.querySelector<HTMLElement>(".thought");
    if (!source || !destination || !thought) return;
    const enabled = matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let disposed = false;
    const clamp = (n: number) => Math.max(0, Math.min(1, n));
    const smooth = (n: number) => n * n * (3 - 2 * n);
    function draw() {
      frame = 0;
      if (!enabled.matches) { delete container!.dataset.journey; return; }
      container!.dataset.journey = "active";
      const bounds = container!.getBoundingClientRect();
      const from = source!.getBoundingClientRect();
      const to = destination!.getBoundingClientRect();
      const bottom = thought!.getBoundingClientRect().bottom - bounds.top;
      const startY = from.top - bounds.top;
      const endY = to.top - bounds.top;
      // The portrait follows the viewport vertically; side-changing is confined
      // to the empty interval between the two text sections.
      const y = Math.max(startY, Math.min(endY, innerHeight * .2 - bounds.top));
      const crossEnd = endY - Math.max(from.height, to.height) - 16;
      const progress = smooth(clamp((y - bottom) / Math.max(1, crossEnd - bottom)));
      const x = from.left - bounds.left + (to.left - from.left) * progress;
      const width = from.width + (to.width - from.width) * progress;
      const height = from.height + (to.height - from.height) * progress;
      image!.style.width = `${width}px`;
      image!.style.height = `${height}px`;
      image!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    function schedule() { if (!frame && !disposed) frame = requestAnimationFrame(draw); }
    const resize = new ResizeObserver(schedule);
    resize.observe(container); resize.observe(source); resize.observe(destination);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    enabled.addEventListener("change", schedule);
    document.fonts.ready.then(schedule);
    draw();
    return () => { disposed = true; cancelAnimationFrame(frame); resize.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); enabled.removeEventListener("change", schedule); delete container.dataset.journey; };
  }, []);
  return <div className="portrait-journey" ref={root}>
    {children}
    <div className="travelling-portrait" ref={photo}><Image src={PROFILE.portrait} alt="Maryanne Machado" fill sizes="(max-width: 1100px) 30vw, 360px" /></div>
  </div>;
}
