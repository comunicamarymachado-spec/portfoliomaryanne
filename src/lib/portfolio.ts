export type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  relatedLinks?: { label: string; href: string }[];
  /** Controla o tamanho do bloco no mosaico. */
  span: "tall" | "wide" | "normal";
};

export type PortfolioCategory = {
  name: string;
  items: PortfolioItem[];
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    name: "Redes Sociais",
    items: [
      {
        title: "IncubaScience",
        description:
          "Narrativa institucional para conectar ciência e ecossistema de inovação no Nordeste.",
        image: "https://i.postimg.cc/ZRKc6TZS/Homologacao-post-(1).png",
        link: "https://www.instagram.com/p/DZaQocIgH6l/?img_index=1",
        span: "tall",
      },
      {
        title: "TDS Company",
        description:
          "Conteúdo em vídeo (reel) com foco em growth e engajamento orgânico.",
        image: "https://i.postimg.cc/13qpLvsj/image.png",
        link: "https://www.instagram.com/reel/DAWW6_RuVMr/",
        span: "normal",
      },
      {
        title: "TDS Company — Vol. 2",
        description:
          "Segunda linha criativa de reels para campanha de mídias sociais.",
        image: "https://i.postimg.cc/RF9Q1w5W/image.png",
        link: "https://www.instagram.com/reel/DCCSigyOu6M/",
        span: "normal",
      },
      {
        title: "Semine Agritech",
        description:
          "Estratégia de conteúdo para marca de inovação agrícola.",
        image: "https://i.postimg.cc/c1RPNc47/image.png",
        link: "https://www.instagram.com/p/DOeXsh5Eqhc/?img_index=1",
        span: "wide",
      },
      {
        title: "Semine — CODE.NE",
        description: "CODE.NE — programa de combate à desertificação do Nordeste, com colaboração da Semine junto ao CETENE/MCTI. Registro em Conceição das Crioulas, Salgueiro (PE).",
        image: "/images/semine-conceicao-das-crioulas.png",
        link: "https://www.instagram.com/p/DUHoqWOkc9x/",
        span: "wide",
      },
      {
        title: "strateegia",
        description:
          "Conteúdo de mídias sociais para a plataforma strateegia, da TDS Company.",
        image:
          "https://i.postimg.cc/vm21GLzR/Save-Inta-com-491896100-18043667531612834-3139438261491044614-n.jpg",
        link: "https://www.instagram.com/p/DJCqVgrSzHV/?img_index=1",
        span: "normal",
      },
      {
        title: "Agência Prosperitas (Novotel Santos Gonzaga)",
        description:
          "Criativos para campanhas ADS e conteúdo editorial do setor de A&B.",
        image: "https://i.postimg.cc/0QWxGdM0/image.png",
        link: "https://www.instagram.com/p/Cq_G2Tmu1x9/?img_index=1",
        span: "normal",
      },
      {
        title: "Agência Prosperitas (Atrio Hotéis)",
        description:
          "Cobertura e estratégia de comunicação para rede hoteleira.",
        image: "https://i.postimg.cc/9fcjvNyZ/image.png",
        link: "https://www.linkedin.com/posts/atrio-hoteis-s-a_atriohoteis-atriohotelmanagement-infohb-activity-7078356427790069760-Lsol/",
        span: "tall",
      },
      {
        title: "Colégio Elo",
        description:
          "Planejamento editorial e cobertura de eventos institucionais.",
        image: "https://i.postimg.cc/YSvxqtN9/image.png",
        link: "https://www.instagram.com/p/CU7fevgLLIu/?img_index=1",
        span: "normal",
      },
    ],
  },
  {
    name: "Landing Pages",
    items: [
      {
        title: "TDS Company — Plataforma strateegia",
        description:
          "UX/UI writing em colaboração com design de produto. Processo de trabalho com Figma e RD Station.",
        image: "https://i.postimg.cc/DfGn4sfL/image.png",
        link: "https://strateegia.digital/pt",
        relatedLinks: [{ label: "Ver landing page do workshop", href: "https://www-strateegia-digital.rds.land/strateegia-bettbrasil" }],
        span: "wide",
      },
      {
        title: "strateegia — Workshop",
 description: "Landing page em colaboração com design de produto, com Figma e RD Station.",
 image: "/images/strateegia-bett-lp.png", link: "https://www-strateegia-digital.rds.land/strateegia-bettbrasil", span: "wide",
 },
 {
 title: "Semine — Plataforma",
        description: "Landing page de apresentação da plataforma Semine e de suas soluções para a agricultura, desenvolvida em colaboração com IA.",
        image: "/images/semine-plataforma.png",
        link: "https://app.semine.ag/",
        span: "wide",
      },
      {
        title: "TDS Company — Landing page de e-book",
        description:
          "Página de conversão para captação de leads via e-book sobre paraconsistência de estratégias. Trabalho em colaboração com design de produto, com uso de Figma e RD Station.",
        image: "https://i.postimg.cc/rygswxf1/image.png",
        link: "https://biblioteca.tds.company/tds-books-exploring-the-paraconsistency-of-strategies-in-minimally-complex-businesses",
        span: "tall",
      },
    ],
  },
  {
    name: "Email Marketing",
    items: [
      {
        title: "TDS Company — Curso de Prototipação Rápida com IA",
        description: "Campanha de e-mail marketing para lançamento do curso.",
        image: "https://i.postimg.cc/26MjR7zg/image.png",
        link: "https://app.rdstation.email/mail/c7f248a7-2887-4035-8c52-1a933c851168",
        span: "tall",
      },
      {
        title: "TDS Company — Paraconsistência",
        description:
          "Campanha de e-mail marketing ligada ao conteúdo sobre paraconsistência de estratégias.",
        image: "https://i.postimg.cc/c4q1Fhkf/image.png",
        link: "https://app.rdstation.email/mail/b3c5a7d5-461f-48f7-ad72-60fc901050bc",
        span: "normal",
      },
    ],
  },
  {
    name: "Newsletter",
    items: [
      { title: "IncubaNews — Proposta de newsletter", description: "Proposta editorial para conectar o ecossistema de inovação. Visualização em mockup.", image: "/images/incubanews-proposta.png", link: "/images/incubanews-proposta.png", span: "wide" },
      {
        title: "Bits and Tips (TDS Company)",
        description:
          "Edição da newsletter com curadoria de conteúdo e atualizações da marca.",
        image: "https://i.postimg.cc/QNvCRhCD/image.png",
        link: "https://app.rdstation.email/mail/4ae28943-522e-4918-af77-a2599141df34",
        span: "wide",
      },
    ],
  },
  {
    name: "Podcast",
    items: [
      {
        title: "TDS Company - strat'o'cast",
        description:
          "Roteiro e produção do videocast/podcast da marca no YouTube.",
        image: "https://i.postimg.cc/DyQcd0FB/Whats-App-Image-2026-07-20-at-17-38-50.jpg",
        link: "https://www.youtube.com/@tdscompany/podcasts",
        span: "wide",
      },
    ],
  },
  { name: "Apresentações institucionais", items: [{ title: "IncubaScience — Apresentação institucional", description: "Apresentação da incubadora e de sua atuação. Visualização em mockup.", image: "/images/incubascience-apresentacao.png", link: "/images/incubascience-apresentacao.png", span: "wide" }] },
];



