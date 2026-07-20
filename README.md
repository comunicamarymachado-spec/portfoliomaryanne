# Portfólio — Maryanne Machado

Site pessoal de portfólio (Next.js App Router + TypeScript + Tailwind CSS v4
+ Framer Motion), direção de design "Entardecer no mar". O design system
completo está documentado em [`CLAUDE.md`](./CLAUDE.md).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

O formulário de contato (seção "Contato") envia e-mail via
[Resend](https://resend.com). Crie um arquivo `.env.local` na raiz com:

```bash
# Obrigatória — gere em https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Opcional — para onde as mensagens do formulário são enviadas
# (default: comunicamarymachado@gmail.com)
CONTACT_TO_EMAIL=comunicamarymachado@gmail.com

# Opcional — remetente do e-mail
# Em desenvolvimento, o domínio de teste do Resend (onboarding@resend.dev)
# funciona sem configuração extra. Em produção, verifique um domínio próprio
# em https://resend.com/domains e use um endereço desse domínio aqui.
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

Sem `RESEND_API_KEY`, a rota `/api/contact` responde com erro 500 (o
formulário no site mostra a mensagem de erro amigável, mas não envia
e-mail).

## Deploy na Vercel

1. Suba o repositório para o GitHub (branch já usada neste projeto:
   `claude/portfolio-pessoal-nextjs-2cq85z`, mas o deploy normalmente é
   feito a partir da branch principal do repositório).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório —
   a Vercel detecta Next.js automaticamente, sem configuração extra de
   build.
3. Em **Settings → Environment Variables**, adicione:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (opcional)
   - `CONTACT_FROM_EMAIL` (opcional, mas recomendado usar um domínio
     verificado em produção em vez de `onboarding@resend.dev`)
4. Deploy. Builds seguintes (novos pushes) fazem redeploy automático.

## Pendências de conteúdo

Busque por `TROQUE AQUI` no código para os itens que dependem de material
que ainda não foi enviado:

- Foto real para a seção Sobre (hoje mostra o monograma "MM").

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (tema definido em `src/app/globals.css` via `@theme inline`)
- Framer Motion (animações e transições)
- Resend (envio de e-mail do formulário de contato)
