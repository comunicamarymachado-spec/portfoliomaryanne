# Redesign editorial — Maryanne Machado

## Origem e entrega

Cópia do repositório público comunicamarymachado-spec/portfoliomaryanne, branch claude/portfolio-pessoal-nextjs-2cq85z, revisão original 02101e5. O Git local registra snapshots de trabalho, não substitui o histórico remoto. Nenhuma alteração foi enviada ao GitHub ou publicada na Vercel nesta entrega.

## Direção vigente

Marfim #F3F0E8, verde #213B36, terracota #9E4D34. Instrument Serif nos títulos e Inter na leitura, ambas via next/font. Grid amplo, fios divisórios e imagens sem texto de interface sobreposto. Desktop e mobile têm composição própria. Navegação visível no mobile, sem menu dependente de JavaScript. Sem efeitos de entrada que ocultem conteúdo. Transições de hover respeitam prefers-reduced-motion.

Home: apresentação → três trabalhos selecionados → pensamento → sobre → trajetória → contato. Páginas próprias para IncubaScience, Strateegia e strat’o’cast. Arquivo mantém as 14 peças e os links originais em cinco categorias. As sete experiências permanecem disponíveis: duas abertas e cinco em uma expansão nativa. E-mail prioritário; formulário e API originais preservados como opção secundária.

## Organização

- src/lib/portfolio.ts, experience.ts e skills.ts: dados originais preservados.
- src/lib/profile.ts: apresentação, biografia e contatos.
- src/lib/cases.ts: seleção e textos dos projetos baseados no conteúdo existente.
- src/lib/image-assets.json: procedência, dimensões e cópias locais das imagens originais.
- src/app/globals.css: sistema editorial e responsividade.
- src/app/projetos/[slug]/page.tsx: páginas de projeto e seus metadados.
- src/app/arquivo/page.tsx: inventário completo, com links para ampliar as peças.

## Preservação técnica

Next.js 16.2.10, React, Tailwind, scripts, dependências e package-lock.json mantidos. Nenhuma dependência adicionada. next.config.ts e API de contato inalterados. Os componentes antigos de efeitos permanecem nos arquivos, mas não são importados pela nova home. Nenhum asset original foi apagado. Corrigido o endereço dos metadados para portfoliomaryanne.vercel.app. Prévia social original mantida.

## Conteúdo simplificado

Os contadores originais eram 6+ anos e 20+ clientes. Foram retirados do hero para dar prioridade à apresentação; não foram substituídos por números novos. As listas de competências continuam em src/lib/skills.ts, sem exibição repetitiva. O texto e a versão anterior também acompanham a entrega como backup original.

## Informações que faltam para aprofundar os cases

Não foram inventados problemas, decisões, responsabilidades, resultados ou métricas. As páginas atuais apresentam contexto, contribuição documentada, peça e link publicado. Só incluir as etapas problema, estratégia e resultado depois de receber informações verificáveis.

1. IncubaScience: qual era a dificuldade de comunicação, o público prioritário, suas decisões de narrativa, período, equipe e resultados observados? Enviar carrossel completo e outras peças relevantes.
2. Strateegia: quais páginas e trechos você escreveu? Quais decisões de linguagem tomou e por quê? Quem participou do design? Há versão anterior, pesquisa ou resultado documentado?
3. strat’o’cast: quais episódios você roteirizou/produziu? Qual era a proposta editorial, seu escopo na produção e o desdobramento do programa? Enviar episódios específicos e trechos de roteiro.
4. Confirmar a situação atual da pós-graduação e do vínculo no CETENE, mantidos conforme o site original.
5. Confirmar qual oportunidade profissional deve orientar a curadoria final. O terceiro destaque pode ser substituído por um projeto de outro setor quando houver documentação mais forte.

As imagens foram recuperadas das URLs originais, sem geração ou alteração das peças. Duas capturas de reels têm cerca de 346 px de largura; permanecem pequenas no arquivo. Para ampliações futuras, solicitar arquivos maiores. Strateegia e podcast já têm arquivos acima de 1100 px.

## Validação e limites

Build de produção e TypeScript passaram. ESLint passou. Verificação visual na home desktop e mobile; case IncubaScience e arquivo em mobile; ausência de overflow horizontal na home com viewports de 320 e 390 px; navegação dos projetos e expansão das experiências verificadas. Formulário vazio bloqueado pela validação nativa, sem enviar mensagens. O envio real depende das variáveis Resend existentes e não foi testado. Não há pontuação Lighthouse ou certificação de acessibilidade nesta entrega.

## Executar e publicar

Usar os comandos existentes: npm ci, npm run dev e npm run build. Para publicar, aplicar os arquivos no mesmo repositório e branch de deploy, preservando variáveis de ambiente e configuração Vercel. Recomenda-se revisar primeiro em uma branch de preview. O código está pronto para isso, mas não há acesso autenticado de escrita ao GitHub nesta conversa.

## Motion editorial — atualização

Adicionada uma camada discreta de movimento, sem alterar conteúdo, tipografia, cores ou composição:

- Nome em duas entradas curtas, com intervalo de 90 ms (60 ms no mobile), mantendo opacidade inicial de 84%.
- Entrada única das três peças selecionadas, do título do manifesto, do retrato e da imagem de cada case. No arquivo, apenas os títulos de categoria recebem entrada.
- Deslocamento de 18 px por 720 ms no desktop; 8 px por 480 ms no mobile. O conteúdo fica totalmente visível antes do JavaScript, sem telas vazias ou opacidade zero.
- Sublinhados e setas respondem a hover/foco; imagens têm aproximação de 2,5% apenas com mouse. Sem loops, parallax ou captura de scroll.
- prefers-reduced-motion desativa as entradas CSS e JS. Alterar a preferência durante uma animação cancela o movimento imediatamente. Foco por teclado também estabiliza o elemento.
- Implementação com CSS, IntersectionObserver e Web Animations nativos, sem dependências novas. Conteúdo permanece em Server Components; EditorialMotion é uma pequena camada cliente que reinicializa na troca de rota e limpa observadores e animações.

Verificação: ESLint, build de produção e TypeScript aprovados. Oito testes de comportamento passaram: fallback de APIs, preferência reduzida inicial, conteúdo já visível, entrada única, alteração da preferência, foco, parâmetros mobile e limpeza na troca de página. Prévia conferida visualmente em desktop/mobile, sem erros de execução capturados.
