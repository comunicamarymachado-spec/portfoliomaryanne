export type SkillGroup = {
  title: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Estratégia & Conteúdo",
    skills: [
      "Estratégia de Conteúdo",
      "Copywriting",
      "Branding",
      "Growth Marketing",
      "Assessoria de Imprensa",
    ],
  },
  {
    title: "Canais & Ferramentas",
    skills: [
      "Email Marketing",
      "Landing Page",
      "Gestão de Mídias Sociais",
      "Blog (WordPress/Webflow)",
      "RD Station",
    ],
  },
  {
    title: "Tecnologia & IA",
    skills: [
      "Otimização de Processos com IA",
      "Criação de Assistentes Inteligentes",
      "Segmentação de Leads",
      "Podcast",
    ],
  },
];

export const ALL_SKILLS = SKILL_GROUPS.flatMap((group) => group.skills);
