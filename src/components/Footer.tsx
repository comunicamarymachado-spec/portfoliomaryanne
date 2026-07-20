export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ocean)]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[var(--color-ink-faint)]">
        <p>
          © {new Date().getFullYear()} Maryanne Machado — Estrategista de
          Marketing e Conteúdo — Recife, PE
        </p>
      </div>
    </footer>
  );
}
