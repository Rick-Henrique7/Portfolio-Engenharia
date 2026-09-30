// Todo o conteúdo do site mora aqui, separado dos componentes.
// Para trocar um texto, edite este arquivo; os componentes não precisam mudar.
// Campos marcados com "lorem" ou "00" são provisórios (ver documento de requisitos).

export type Stat = { value: string; label: string };

export type Achievement = {
  title: string;
  period: string;
  status?: string; // ex.: "Em beta com cliente"
  image?: { src: string; alt: string }; // print do fluxo
  links?: { label: string; href: string }[]; // vídeo etc.
  context: string;
  action: string;
  result: Stat;
  stack: string[];
};

export type TimelineItem = { period: string; title: string; detail: string };

export type StackGroup = { area: string; items: string[] };

export type FeaturedProject = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  next?: string; // o que ainda está em desenvolvimento
  image?: string; // print/GIF do projeto em /public
  media: string; // legenda do GIF provisório
  caseStudyHref: string;
  codeHref: string;
};

export type Project = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type ContactLink = { label: string; href: string; icon: "arrow" | "external" | "download" };

export const profile = {
  name: "Henrique Santos",
  headline: {
    before: "Engenheiro de software que conecta ",
    highlight: "IA, automação",
    after: " e sistemas industriais.",
  },
  intro:
    "Construo agentes de IA, automações e sistemas web que resolvem problemas reais de negócio. Na Brasa Tecnologia, desenvolvo fluxos multiagente em N8N integrados a WhatsApp, APIs e ERPs, e aplicações em Laravel, React e TypeScript.",
  availability: "Disponível · Indaiatuba, SP",
  role: "Estagiário · Brasa Tecnologia",
  since: "desde mar 2026",
  github: "https://github.com/Rick-Henrique7",
  linkedin: "https://www.linkedin.com/in/henriquesantoshm/",
  email: "henrique.mdsantos2003@gmail.com",
  whatsapp: "https://wa.me/5519983011657",
  cvHref: "/cv-henrique-santos.pdf", // colocar o PDF em /public
  location: "Indaiatuba, SP",
  photo: "/henrique-santos.jpg",
};

export const heroStats: Stat[] = [
  { value: "27+", label: "projetos em que atuei" },
  { value: "8+", label: "stacks em uso ativo" },
  { value: "100s+", label: "horas economizadas em processos" },
];

export const achievements: Achievement[] = [
  {
    title: "Atendente de IA para vendas no WhatsApp",
    period: "2026",
    status: "Em beta com cliente",
    context: "Uma gráfica atendia dúvidas, orçamentos e pagamentos pelo WhatsApp de forma manual.",
    action:
      "Construí sozinho, em N8N, o fluxo completo: RAG sobre o catálogo, orçamento, validação do comprovante Pix por um modelo de visão separado (para reduzir custo), troca de filas via webhook e follow-up em 24h e 48h.",
    result: { value: "2 agentes", label: "da dúvida ao Pix validado; humano só confere no caixa" },
    stack: ["N8N", "RAG", "Visão computacional", "Webhooks"],
    links: [
      {
        label: "Vídeo do funcionamento",
        href: "https://www.linkedin.com/posts/brasa-tecnologia_inteligenciaartificial-ia-iavendas-activity-7507787405530124289-DAnz",
      },
    ],
    image: { src: "/fluxos/grafica-n8n-faixa.jpg", alt: "Fluxo do atendente de IA no N8N" },
  },
  {
    title: "Arquitetura multiagente para clínica médica",
    period: "2026",
    status: "Validado em testes",
    context:
      "O agendamento via WhatsApp dependia de um único “God Agent”: com o fluxo crescendo, o contexto estourava e surgiam inconsistências e alucinações.",
    action:
      "Redesenhei em N8N como um supervisor que coordena agentes especializados (recepção, especialidades, procedimentos, prestadores), com fallback entre modelos, memória em Redis e um agente que decide responder em texto ou áudio.",
    result: { value: "1 → 5", label: "de um agente sobrecarregado para cinco especialistas coordenados" },
    stack: ["N8N", "Multiagente", "Redis", "OpenRouter", "API REST"],
    image: { src: "/fluxos/clinica-n8n.jpg", alt: "Supervisor e agentes especializados no N8N" },
  },
];

export const about = {
  title: { before: "Da mecatrônica à ", highlight: "engenharia de software", after: "." },
  paragraphs: [
    "Sou engenheiro de software em formação, com foco em IA aplicada e automação. Crio agentes e fluxos multiagente que se integram a sistemas reais, como WhatsApp, APIs e ERPs, e aplicações web completas, do banco de dados à interface.",
    "Minha base em Mecatrônica me deu visão sistêmica e lógica para entender como hardware e software se conectam. Hoje aplico isso na construção de softwares mais inteligentes, integrando IA aos sistemas para torná-los mais eficientes e autônomos.",
    "Aberto a oportunidades como Desenvolvedor Full Stack ou Engenheiro de Software Júnior, seguindo em evolução constante em arquitetura, back-end e IA aplicada enquanto concluo a graduação.",
  ],
};

export const timeline: TimelineItem[] = [
  { period: "2026 — hoje", title: "Estágio · Brasa Tecnologia", detail: "IA, automação N8N, integrações com ERP" },
  { period: "2023 — 2027", title: "Engenharia de Software", detail: "Graduação" },
  { period: "2021 — 2023", title: "Técnico em Mecatrônica", detail: "Sensores, automação, montagem de hardware" },
];

export const stack: StackGroup[] = [
  { area: "Back-end", items: ["PHP · Laravel", "Java · Spring Boot", "Python"] },
  { area: "Front-end", items: ["React · Next.js", "TypeScript", "Tailwind"] },
  { area: "Dados", items: ["SQL · PostgreSQL", "Kafka", "Docker"] },
  { area: "IA & automação", items: ["N8N · RAG", "Agentes de IA", "Ollama"] },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "agro-iot",
    eyebrow: "Destaque · Agro / IoT",
    title: "Agro-IoT Integrated Platform",
    description:
      "Simulação de uma plataforma empresarial de monitoramento agrícola em microsserviços Spring Boot, cada um em seu contêiner Docker. Um simulador de sensores envia telemetria em tempo real para o dashboard em Next.js, com eventos via Apache Kafka, debounce no front-end, autenticação JWT e áreas separadas para administrador e usuário.",
    highlights: ["6 microsserviços", "Apache Kafka", "Testes de integração"],
    media: "GIF · dashboard de telemetria e mapa da frota",
    image: "/projetos/agroiot-mapeamento-new.jpg",
    caseStudyHref: "#agro-iot",
    codeHref: "https://github.com/Rick-Henrique7/sdd-iot-java",
  },
  {
    slug: "archexplorer",
    eyebrow: "Destaque · IA local",
    title: "ArchExplorer AI",
    description:
      "Ferramenta desktop para arquitetos de software reaproveitarem o que já construíram. Explore pastas de projetos, encontre componentes React e estruturas de back-end prontas, guarde referências em links e imagens, e receba de uma IA local análises e sugestões de melhoria sobre o código aberto.",
    highlights: ["SDD · Spec Driven", "IA local e offline", "Python · PySide6"],
    next: "Em desenvolvimento: edição de código pela IA e linhas de produto de software (LPS) com diagrama de variabilidade.",
    media: "GIF · análise de arquitetura com LLM local",
    image: "/projetos/archexplorer.jpg",
    caseStudyHref: "#archexplorer",
    codeHref: "https://github.com/Rick-Henrique7/ArchExplorer-AI",
  },
];

export const otherProjects: Project[] = [
  {
    eyebrow: "Mobile · Flutter",
    title: "Daily Flow",
    description:
      "App de gestão pessoal: tarefas do dia, hábitos com gráfico dos melhores horários, Pomodoro com tempos curto, médio e longo, e cores de fundo e texto personalizáveis.",
    href: "https://github.com/Rick-Henrique7/Daily-Flow",
  },
  {
    eyebrow: "Front-end · Cliente",
    title: "Site institucional para designer",
    description: "Landing page para uma designer gráfica, unindo identidade visual forte, tipografia e usabilidade.",
    href: "https://github.com/Rick-Henrique7/DesignPortfolio",
  },
  {
    eyebrow: "Web · JavaScript",
    title: "Finanças Inteligentes",
    description: "Controle financeiro web com cadastro, edição e filtros de registros, relatórios e gráficos.",
    href: "https://github.com/Rick-Henrique7/Financas-Inteligentes",
  },
];

export const contact = {
  intro: "Buscando desafios como Desenvolvedor Full Stack ou Engenheiro de Software Júnior. Se você procura alguém para somar ao seu time, entre em contato.",
  links: [
    { label: "E-mail", href: `mailto:${profile.email}`, icon: "arrow" },
    { label: "WhatsApp", href: profile.whatsapp, icon: "external" },
    { label: "LinkedIn", href: profile.linkedin, icon: "external" },
    { label: "GitHub", href: profile.github, icon: "external" },
    { label: "Currículo (PDF)", href: profile.cvHref, icon: "download" },
  ] satisfies ContactLink[],
};

export const nav = [
  { label: "Feitos", href: "#feitos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
