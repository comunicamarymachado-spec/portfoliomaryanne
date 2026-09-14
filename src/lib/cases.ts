import { PORTFOLIO_CATEGORIES } from "./portfolio";
const social = PORTFOLIO_CATEGORIES[0].items;
const landing = PORTFOLIO_CATEGORIES[1].items;
const podcast = PORTFOLIO_CATEGORIES[4].items;
// Publish documented scope only. Missing evidence is recorded in REDESIGN.md.
export const CASES = [
  {
    slug: "incubascience", number: "01", title: "IncubaScience",
    discipline: "Comunicação institucional", headline: "Ciência em diálogo com o Nordeste.",
    summary: social[0].description,
    role: "Narrativa institucional e divulgação científica", organization: "CETENE / MCTI",
    context: "A IncubaScience integra a atuação de Maryanne como pesquisadora no CETENE / MCTI, com foco na conexão entre ciência e ecossistema de inovação.",
    contribution: "Estrutura da narrativa institucional e execução das ações estratégicas de divulgação e sensibilização da IncubaScience.",
    execution: "Conteúdo institucional para redes sociais. A peça selecionada apresenta a comunicação do processo de incubação da IncubaScience no Nordeste.",
    image: "/images/work-0.png", alt: "Peça IncubaScience: O Nordeste é Deep Tech, com mapa dos estados e comunicação do processo de incubação",
    tone: "science", item: social[0],
  },
  {
    slug: "strateegia", number: "02", title: "strateegia", discipline: "Design de conteúdo",
    headline: "A escrita na experiência de produto.",
    summary: "UX/UI writing para a página da plataforma strateegia, em colaboração com o designer de produto.",
    role: "UX/UI writing", organization: "TDS Company",
    context: "Trabalho de escrita para a página da plataforma strateegia, da TDS Company.",
    contribution: "Atuação como UX/UI writer em colaboração com o designer de produto da plataforma. O trabalho nas landing pages de TDS e strateegia foi realizado em colaboração com design de produto, com uso de Figma e RD Station.",
    execution: "Conteúdo para a página da plataforma e landing page de workshop da strateegia. A captura apresenta a página da plataforma; a landing page do workshop pode ser acessada no link abaixo.",
    image: "/images/work-8.png", alt: "Captura da página da plataforma strateegia, projeto de UX/UI writing",
    tone: "product", item: landing[0],
  },
  {
    slug: "strat-o-cast", number: "03", title: "strat’o’cast", discipline: "Roteiro e produção",
    headline: "Conteúdo que ganha voz.", summary: "Roteiro e produção do videocast e podcast da TDS Company.",
    role: "Roteiro e produção", organization: "TDS Company",
    context: "O strat’o’cast é o videocast e podcast da TDS Company, publicado no YouTube.",
    contribution: "Roteiro e produção do videocast e podcast da marca, dentro da atuação em conteúdo na TDS Company.",
    execution: "Produção em formato audiovisual. A imagem apresenta o programa, e o canal reúne as publicações para assistir e ouvir.",
    image: "/images/work-13.jpeg", alt: "Imagem de apresentação do strat’o’cast, videocast e podcast da TDS Company",
    tone: "podcast", item: podcast[0],
  },
];

