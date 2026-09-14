"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

/** Keep normal links, scroll restoration and no-JS navigation intact. */
export default function PageMotion() {
  const pathname = usePathname();
  const router = useRouter();
  const previous = useRef(pathname);
  useEffect(() => {
    const main = document.getElementById("conteudo");
    if (!main || !main.animate) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let navigating = false;
    if (previous.current !== pathname && !preference.matches) {
      animation = main.animate([{ opacity: .15, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 600, easing: "cubic-bezier(.22,1,.36,1)" });
    }
    previous.current = pathname;
    function settle() { animation?.cancel(); }
    async function navigate(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.hasAttribute("download") || (link.target && link.target !== "_self") || preference.matches) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      event.preventDefault();
      event.stopPropagation();
      if (navigating) return;
      navigating = true;
      animation?.cancel();
      animation = main!.animate([{ opacity: 1 }, { opacity: .15 }], { duration: 180, fill: "forwards", easing: "ease-out" });
      await animation.finished.catch(() => {});
      router.push(url.pathname + url.search + url.hash);
      // Never leave a failed or delayed navigation obscured.
      timer = setTimeout(() => { settle(); navigating = false; }, 1800);
    }
    document.addEventListener("click", navigate, true);
    preference.addEventListener("change", settle);
    return () => { settle(); clearTimeout(timer); document.removeEventListener("click", navigate, true); preference.removeEventListener("change", settle); };
  }, [pathname, router]);
  return null;
}
