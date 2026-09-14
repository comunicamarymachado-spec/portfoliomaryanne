import { CASES as EXISTING_CASES } from "./cases";
import { PORTFOLIO_CATEGORIES, type PortfolioItem } from "./portfolio";
import assets from "./image-assets.json";

export type CaseMaterial = { title: string; text: string; image?: string; link?: string; label?: string; screen?: boolean };
export type ClientCase = (typeof EXISTING_CASES)[number] & { formats: string; process: { title: string; text: string }[]; materials: CaseMaterial[] };
const items = PORTFOLIO_CATEGORIES.flatMap(category => category.items);
function work(title: string, text: string): CaseMaterial {
  const item = items.find(item => item.title === title);
  if (!item) throw new Error(`Missing portfolio item: ${title}`);
  return { title, text, screen: PORTFOLIO_CATEGORIES.find(c => c.name === "Landing Pages")?.items.includes(item), image: assets.find(asset => asset.url === item.image)?.src, link: item.link, label: "Ver trabalho original" };
}
const legacy = (slug: string) => EXISTING_CASES.find(item => item.slug === slug)!;
const tdsMaterials = [
  work("TDS Company — Landing page de e-book", "Captação para o e-book sobre paraconsistência. Em colaboração com design de produto, com Figma e RD Station."),
  work("TDS Company — Paraconsistência", "Email de divulgação do e-book sobre paraconsistência."),
  work("Bits and Tips (TDS Company)", "Curadoria de conteúdo e atualizações da marca em formato de newsletter."),
  work("TDS Company — Curso de Prototipação Rápida com IA", "Email de lançamento do curso."),
  work("TDS Company - strat'o'cast", "Roteiro e produção do videocast e podcast."),
  work("TDS Company", "Vídeo para redes sociais."),
  work("TDS Company — Vol. 2", "Outro recorte da produção de vídeos para redes sociais."),
];
export const CLIENT_CASES: ClientCase[] = [
  {
    ...legacy("strat-o-cast"), slug: "tds-company", number: "01", title: "TDS Company", discipline: "Estratégia de conteúdo",
    headline: "Uma narrativa, diferentes pontos de contato.",
    summary: "Conteúdo em páginas, emails, newsletter, redes sociais e podcast. Um percurso pela atuação na comunicação da marca.",
    role: "Estratégia e criação de conteúdo; roteiro e produção", formats: "Landing pages · Email · Newsletter · Redes sociais · Podcast",
    context: "Estratégia de conteúdo e mídias sociais na TDS Company, de dezembro de 2023 a junho de 2025.",
    contribution: "Estratégia e criação de conteúdo, roteiro e produção do strat’o’cast e otimização de processos com IA. Nas landing pages, trabalho em colaboração com design de produto, com uso de Figma e RD Station.",
    execution: "Esta seleção reúne frentes da atuação na TDS. Algumas peças compartilham um tema, como o e-book e o email sobre paraconsistência; outras atendem a diferentes momentos da comunicação da marca.",
    process: [
      { title: "Dar contexto ao tema", text: "Landing page e email apresentam o mesmo tema: o e-book sobre paraconsistência." },
      { title: "Adequar a narrativa ao canal", text: "Curadoria na newsletter, chamadas no email e conversas aprofundadas no podcast." },
    ], materials: tdsMaterials,
  },
  {
    ...legacy("strateegia"), number: "02", role: "Estratégia de conteúdo | UX/UI writing | Comunidades", formats: "Página de produto · Landing page · Redes sociais · Material de evento",
    headline: "Do produto à conversa com quem vai usá-lo.",
    summary: "Conteúdo, escrita de produto e comunidades para aproximar a IA da educação.",
    context: "Plataforma da TDS Company voltada ao setor de educação: professores e gestores do futuro, com IA e colaboração na sala de aula.",
    execution: "A página da plataforma e a landing page da Bett Brasil têm contextos próprios. O flyer amplia a apresentação para o ambiente do evento, enquanto as redes sociais trazem outro formato de contato com a marca.",
    process: [
      { title: "Apresentar o produto", text: "Escrita de produto para apresentar a plataforma a professores e gestores." },
      { title: "Situar a mensagem", text: "Workshop, redes sociais e presença na Bett Brasil aproximam a plataforma do público da educação." },
    ], materials: [
      work("TDS Company — Plataforma strateegia", "Página do produto: UX/UI writing em colaboração com design de produto."),
      { title: "Workshop — Landing page", image: "/images/strateegia-bett-lp.png", screen: true, text: "Inscrições no workshop de planejamento de aulas com IA e colaboração. Com design de produto, Figma e RD Station.", link: "https://www-strateegia-digital.rds.land/strateegia-bettbrasil", label: "Ver página do workshop" },
      { title: "Bett Brasil 2025 — Flyer", text: "Flyer para a Bett Brasil 2025, em São Paulo, apresentada pela organização como o maior evento de inovação e tecnologia para educação da América Latina. A strateegia participou com stand e workshop prático. Peça exibida em mockup.", image: "/images/strateegia-bett-2025.jpg" },
      work("strateegia", "Conteúdo para redes sociais da plataforma strateegia."),
    ],
  },
  {
    ...legacy("strateegia"), slug: "semine", number: "03", title: "Semine", organization: "Semine", discipline: "Conteúdo e comunicação",
    headline: "Tecnologia no contexto de quem cultiva.",
    summary: "Plataforma, redes sociais e material para a Expofruit 2025: uma leitura da comunicação da Semine em diferentes pontos de contato.",
    role: "Estratégia de conteúdo; site em colaboração com IA", formats: "Landing page · Redes sociais · Material de evento",
    context: "Comunicação de soluções para a agricultura, entre plataforma, redes sociais e presença na Expofruit 2025, em Mossoró.",
    contribution: "Estratégia de conteúdo para a marca e desenvolvimento do site em colaboração com IA. Os materiais abaixo reúnem diferentes frentes da comunicação da Semine.",
    image: "/images/semine-plataforma.png", alt: "Página de apresentação da plataforma Semine", tone: "science",
    item: items.find(item => item.title === "Semine — Plataforma") as PortfolioItem,
    execution: "O site apresenta as soluções da marca. O flyer leva essa apresentação ao contexto da Expofruit; os conteúdos sociais incluem um registro sobre a Associação Quilombola Conceição das Crioulas, em Salgueiro (PE).",
    process: [
      { title: "Do digital ao evento", text: "A plataforma apresenta as soluções; o flyer adapta a mensagem ao contexto da Expofruit." },
      { title: "Conectar a atuação ao território", text: "O CODE.NE mostra a colaboração da Semine com o CETENE/MCTI no combate à desertificação do Nordeste." },
    ], materials: [
      work("Semine — Plataforma", "Landing page de apresentação da plataforma, desenvolvida em colaboração com IA."),
      { title: "Expofruit 2025 — Flyer", text: "Material para a Expofruit 2025, em Mossoró. Visualização do flyer em mockup.", image: "/images/semine-expofruit-2025.jpg" },
      work("Semine — CODE.NE", "CODE.NE — programa de combate à desertificação do Nordeste, com colaboração da Semine junto ao CETENE/MCTI. Registro em Conceição das Crioulas, Salgueiro (PE)."),
      work("Semine Agritech", "Conteúdo para redes sociais da marca de inovação agrícola."),
    ],
  },
  {
    ...legacy("incubascience"), number: "04", image: "/images/incubascience-apresentacao.png", alt: "Mockup da apresentação institucional da IncubaScience em um tablet", formats: "Redes sociais · Proposta de newsletter · Apresentações",
    summary: "Narrativa institucional, proposta de newsletter e apresentações para conectar ciência e ecossistema de inovação.",
    context: "Comunicação da IncubaScience, incubadora do CETENE/MCTI, para conectar ciência e ecossistema de inovação.",
    process: [
      { title: "Apresentar a instituição", text: "Apresentações e redes sociais dão contexto à atuação da IncubaScience." },
      { title: "Manter a conversa", text: "A proposta da IncubaNews cria um canal de conexão com o ecossistema de inovação." },
    ],
    materials: [
      { title: "IncubaNews — Proposta de newsletter", text: "Proposta editorial para conectar o ecossistema de inovação. Visualização em mockup.", image: "/images/incubanews-proposta.png" },
      { title: "Apresentações institucionais", text: "Apresentação da IncubaScience e de sua atuação. Visualização em mockup.", image: "/images/incubascience-apresentacao.png" },
      work("IncubaScience", "Divulgação institucional do processo de incubação no Nordeste."),
    ],
  },
];
// Keep the original podcast URL available, while placing it within the TDS case on the home page.
export const ALL_CASES: ClientCase[] = [...CLIENT_CASES, { ...legacy("strat-o-cast"), formats: "Videocast e podcast", process: [], materials: [] }];
