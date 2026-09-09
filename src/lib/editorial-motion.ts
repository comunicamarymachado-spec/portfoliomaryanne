/** Progressive enhancement: the document is fully visible before and without JS. */
export function mountEditorialMotion() {
  if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) {
    return () => {};
  }

  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));
  const seen = new Set<HTMLElement>();
  const active = new Map<HTMLElement, Animation>();
  let observer: IntersectionObserver | undefined;

  function stop() {
    observer?.disconnect();
    active.forEach(animation => animation.cancel());
    active.clear();
  }

  function start() {
    stop();
    if (preference.matches) return;

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element = entry.target as HTMLElement;
        if (!entry.isIntersecting || seen.has(element)) return;
        seen.add(element);
        observer?.unobserve(element);

        // Keyboard/anchor navigation must never leave the focused content moving.
        if (element.contains(document.activeElement)) return;
        const compact = window.matchMedia("(max-width: 700px)").matches;
        const animation = element.animate(
          [
            { opacity: 0.72, transform: `translateY(${compact ? 8 : 18}px)` },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: compact ? 480 : 720, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        );
        active.set(element, animation);
        animation.onfinish = animation.oncancel = () => active.delete(element);
      });
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

    targets.forEach(element => {
      if (seen.has(element)) return;
      // Preserve restored scroll positions and anything already being read.
      if (element.getBoundingClientRect().top < window.innerHeight - 32) {
        seen.add(element);
      } else {
        observer?.observe(element);
      }
    });
  }

  function settleFocusedContent(event: FocusEvent) {
    if (!(event.target instanceof Node)) return;
    targets.forEach(element => {
      if (!element.contains(event.target as Node)) return;
      seen.add(element);
      observer?.unobserve(element);
      active.get(element)?.cancel();
    });
  }

  start();
  preference.addEventListener("change", start);
  document.addEventListener("focusin", settleFocusedContent);
  return () => {
    stop();
    preference.removeEventListener("change", start);
    document.removeEventListener("focusin", settleFocusedContent);
  };
}
