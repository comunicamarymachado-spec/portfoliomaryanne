import Link from "next/link";
import { PROFILE } from "@/lib/profile";
export default function Header() {
  return <header className="site-header shell">
    <Link href="/" className="wordmark" aria-label="Maryanne Machado — início">Maryanne Machado<span aria-hidden="true">.</span></Link>
    <nav aria-label="Navegação principal">
      <Link href="/#portfolio">Trabalhos</Link><Link href="/#sobre">Sobre</Link><Link href="/#contato">Contato</Link>
      <a className="nav-cv" href={PROFILE.cv} target="_blank" rel="noopener noreferrer">Currículo <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
