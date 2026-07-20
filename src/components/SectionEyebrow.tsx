type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionEyebrow({
  children,
  className = "",
}: SectionEyebrowProps) {
  return (
    <p
      className={`font-mono uppercase tracking-[0.2em] text-xs sm:text-sm text-[var(--color-tide-light)] ${className}`}
    >
      {children}
    </p>
  );
}
