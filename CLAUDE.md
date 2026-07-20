# Maryanne Machado — Portfólio Pessoal

Site pessoal em Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer
Motion. Este documento é a fonte de verdade do design system — qualquer
sessão futura deve seguir isto sem precisar que o conteúdo seja repetido.

## Direção de design — "Entardecer no mar"

**Conceito**: site pessoal sofisticado e em movimento, inspirado
esteticamente na ideia de maré/entardecer sobre o mar — não editorial de
jornal, não "vibe coding" genérico. Fundo médio-escuro com base oceânica
(não preto neutro), acentos que remetem ao sol se pondo sobre a água.

## Paleta de cores

Definida como CSS custom properties em `src/app/globals.css` e exposta ao
Tailwind via `@theme inline` (Tailwind v4 — não há `tailwind.config.ts`).

| Token CSS | Hex | Uso | Utilitário Tailwind |
|---|---|---|---|
| `--color-ocean` | `#1B3438` | Fundo principal | `bg-ocean`, `text-ocean` |
| `--color-surface` | `#234145` | Superfície/painéis | `bg-surface` |
| `--color-surface-hover` | `#2C4C4E` | Superfície hover | `bg-surface-hover` |
| `--color-ink` | `#F5EFE6` | Texto principal | `text-ink`, `bg-ink` |
| `--color-ink-secondary` | `#BFCAC7` | Texto secundário | `text-ink-secondary` |
| `--color-ink-faint` | `#84A09C` | Texto terciário/faint | `text-ink-faint` |
| `--color-copper` | `#C9875A` | Acento "sol" (cobre/terracota) | `text-copper`, `bg-copper` |
| `--color-violet` | `#9C8AAE` | Acento secundário (violeta suave) | `text-violet` |
| `--color-tide` | `#5B9DA0` | Acento "maré" (teal) | `text-tide`, `bg-tide` |
| `--color-tide-light` | `#9BCBCC` | "Maré clara" — texto sobre fundo escuro | `text-tide-light` |
| `--color-line` | `rgba(245,239,230,0.12)` | Linhas/divisórias | usar via `border-[var(--color-line)]` |

Regras de uso:
- **Nunca** usar amarelo/dourado puro para o acento "sol" — sempre cobre/terracota (`#C9875A`).
- Labels, eyebrows e tags: sempre na cor "maré clara" (`#9BCBCC`), nunca cobre.
- Como alguns tokens (`ink`, `line`, `tide-light`) colidem com nomes utilitários
  padrão do Tailwind ou não geram classe direta de forma previsível em v4,
  o código usa `var(--color-*)` inline em vários lugares — isso é intencional,
  não é dívida técnica a "corrigir".

## Tipografia

- **Display/títulos**: Bricolage Grotesque (Google Fonts, geométrica, sem serifa) → `font-display`
- **Corpo**: Inter → `font-body` (também é o `font-sans` padrão do `body`)
- **Labels/eyebrows/tags**: IBM Plex Mono, uppercase, letter-spacing largo, cor "maré clara" → `font-mono` + classes `uppercase tracking-[0.2em]`

Fontes carregadas via `next/font/google` em `src/app/layout.tsx` e expostas
como CSS vars (`--font-bricolage`, `--font-inter`, `--font-plex-mono`).

## Assinatura de movimento

Esta é a característica diferencial do site — não remover nem simplificar
sem necessidade:

1. **Grain/noise overlay**: `.grain-overlay` (globals.css), SVG de
   `feTurbulence` em `data:image/svg+xml`, opacity ~0.035, `mix-blend-mode:
   overlay`, fixo em toda a página, `pointer-events: none`.
2. **Brilhos radiais no hero**: `.glow-copper` (canto superior direito) e
   `.glow-tide` (canto inferior esquerdo), deriva automática lenta via
   `@keyframes drift-copper` / `drift-tide`, ~15-16s, `ease-in-out infinite
   alternate`.
3. **Onda do rodapé do hero**: componente `HeroWave.tsx` — SVG com
   gradiente vertical cobre → maré ("sol derretendo no mar"), path
   periódico duplicado dentro de `.wave-track` para loop horizontal sem
   costura (~22s linear infinite).
4. **Divisor "linha-maré"**: componente `TideDivider.tsx` — linha ondulada
   fina SVG, cor `--color-tide`, mesma técnica de loop horizontal via
   `.tide-line-track` (~18s). Usado entre todas as seções principais em
   `src/app/page.tsx`. É a assinatura visual recorrente que conecta as
   seções — manter em todas as transições de seção.
5. **Parallax no retrato do hero**: `HeroPortrait.tsx`, `useScroll` +
   `useTransform` do Framer Motion, discreto (translateY leve ao rolar).
6. **Cascata de entrada**: `ScrollReveal.tsx` — wrapper com `whileInView`
   (fade + slide up), delay progressivo por seção/elemento. Usar em todo
   texto/bloco novo que entra na viewport.
7. **Cards de portfólio**: zoom leve na imagem (`group-hover:scale-110`) +
   tag/título sempre visíveis (contraste/acessibilidade), descrição
   expandindo por cima no hover/focus (`PortfolioCard.tsx`).
8. **Marquee de habilidades**: `Marquee.tsx`, loop horizontal infinito via
   `.marquee-track`, conteúdo duplicado, `aria-hidden` (conteúdo já existe
   de forma acessível no grid de skills acima).
9. **`prefers-reduced-motion: reduce`**: todas as animações CSS acima são
   desativadas globalmente em `globals.css`; componentes Framer Motion
   usam `useReducedMotion()` para pular animação (ex.: `ScrollReveal`,
   `HeroPortrait`). Qualquer nova animação **deve** respeitar essa
   preferência.

## Estrutura de seções (`src/app/page.tsx`)

1. **Header** (`Header.tsx`) — sticky, logo "Maryanne." com ponto final em
   cobre, nav desktop + hambúrguer mobile animado com Framer Motion.
2. **Botão WhatsApp flutuante** (`WhatsAppButton.tsx`) — fixo, canto
   inferior direito, escala no hover. Link fixo:
   `https://api.whatsapp.com/send/?phone=5581991188728&text&type=phone_number&app_absent=0`
3. **Hero** (`Hero.tsx` + `HeroPortrait.tsx` + `HeroWave.tsx`)
4. **Portfólio** (`Portfolio.tsx` + `PortfolioCard.tsx` + dados em
   `src/lib/portfolio.ts`) — mosaico em 5 categorias: Redes Sociais,
   Landing Pages, Email Marketing, Newsletter, Podcast. Imagens reais
   hospedadas em `i.postimg.cc` (domínio liberado em
   `next.config.ts` → `images.remotePatterns`).
5. **Trajetória** (`Trajetoria.tsx`, dados em `src/lib/experience.ts`) —
   formato "documento" com cabeçalho + botão "Baixar CV (PDF)" (placeholder
   `href="#"`, ver pendências abaixo). Lista limpa (sem timeline com
   bolinhas), data em mono à esquerda, cargo + empresa (cobre), descrição,
   tags.
6. **Sobre** (`Sobre.tsx`, dados em `src/lib/skills.ts`) — duas colunas
   (monograma "MM" placeholder + texto), pull-quote, 2 parágrafos, grid de
   skills em 3 colunas, marquee de skills abaixo.
7. **Contato** (`Contato.tsx` + `ContactForm.tsx`) — full-bleed,
   `bg-surface`, centralizado, enxuto. Links de e-mail/LinkedIn/WhatsApp +
   formulário funcional (ver seção de e-mail abaixo).
8. **Footer** (`Footer.tsx`) — "© {ano} Maryanne Machado — Estrategista de
   Marketing e Conteúdo — Recife, PE".

## Formulário de contato / envio de e-mail

- Provedor: **Resend** (`resend` npm package), via API route
  `src/app/api/contact/route.ts`.
- Variáveis de ambiente (ver `README.md` para instruções completas):
  - `RESEND_API_KEY` — obrigatória.
  - `CONTACT_TO_EMAIL` — opcional, default `comunicamarymachado@gmail.com`.
  - `CONTACT_FROM_EMAIL` — opcional, default `onboarding@resend.dev`
    (domínio de teste do Resend; trocar por domínio verificado em produção).
- Cliente: `ContactForm.tsx`, componente client-side com estados
  idle/loading/success/error, região `aria-live="polite"` para feedback
  acessível.

## Pendências marcadas no código (buscar por `TROQUE AQUI`)

- `Sobre.tsx` — monograma "MM" como placeholder da segunda foto (seção
  Sobre); trocar por `<Image>` real quando a foto for enviada.

## Acessibilidade

- Skip link ("Pular para o conteúdo") no topo do `<body>` em `layout.tsx`.
- Foco visível global via `:focus-visible` (contorno `tide-light`).
- Todas as imagens com `alt` descritivo (retrato, peças de portfólio).
- Contraste calculado sobre o fundo `ocean`/`surface` — não introduzir
  texto com `ink-faint` sobre `ocean` em tamanhos pequenos sem checar
  contraste.
- Animações sempre com fallback via `prefers-reduced-motion`.

## Convenções gerais

- Tailwind v4: configuração de tema fica em `src/app/globals.css` via
  `@theme inline`. Não criar `tailwind.config.ts` a menos que uma feature
  exija (ex.: plugins) — mantenha a config centralizada em CSS.
- Dados de conteúdo (portfólio, experiência, skills) ficam em `src/lib/*.ts`,
  não hardcoded dentro dos componentes — facilita edição futura.
- Uma seção = um componente em `src/components/`, importado em
  `src/app/page.tsx` na ordem definida acima, com `TideDivider` entre cada
  uma.
