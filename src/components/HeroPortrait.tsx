"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const PORTRAIT_URL =
  "https://i.postimg.cc/s2Kw48JR/magic-edit-TUFIUDg5SFJUN2Mj-MSMw-Mz-Vh-ODRl-Yjhm-Mj-Q2Y2U4ODEx-MDBm-ZTQy-NTlh-M2Vl-Ni-Mx-Mjgw-Iy-NUU.jpg";

export default function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 90]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-sm sm:max-w-md">
      <motion.div
        style={{ y }}
        className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-2xl shadow-black/40"
      >
        <Image
          src={PORTRAIT_URL}
          alt="Retrato de Maryanne Machado, estrategista de marketing e conteúdo"
          fill
          priority
          sizes="(min-width: 640px) 420px, 90vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
