"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { mountEditorialMotion } from "@/lib/editorial-motion";

export default function EditorialMotion() {
  const pathname = usePathname();
  useEffect(mountEditorialMotion, [pathname]);
  return null;
}
