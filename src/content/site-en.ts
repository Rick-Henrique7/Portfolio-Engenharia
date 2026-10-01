// English version of site content — same structure as site.ts.

import type { Stat, Achievement, TimelineItem, StackGroup, FeaturedProject, Project, ContactLink } from "./site";

export const profile = {
  name: "Henrique Santos",
  headline: {
    before: "Software engineer bridging ",
    highlight: "AI, automation",
    after: "corporate web systems.",
  },
  intro:
    "I build AI agents, automations and web systems that solve real business problems. At Brasa Tecnologia, I develop multi-agent workflows in N8N integrated with WhatsApp, APIs and ERPs, and applications in Laravel, React and TypeScript.",
  availability: "Available · Indaiatuba, SP — Brazil",
  role: "Intern · Brasa Tecnologia",
  since: "since Mar 2026",
  github: "https://github.com/Rick-Henrique7",
  linkedin: "https://www.linkedin.com/in/henriquesantoshm/",
  email: "henrique.mdsantos2003@gmail.com",
  whatsapp: "https://wa.me/5519983011657",
  cvHref: "/cv-henrique-santos.pdf",
  location: "Indaiatuba, SP — Brazil",
  photo: "/henrique-santos.jpg",
};

export const heroStats: Stat[] = [
  { value: "27+", label: "projects I've worked on" },
  { value: "8+", label: "stacks in active use" },
  { value: "100s+", label: "hours saved in processes" },
];

export const achievements: Achievement[] = [
  {
    title: "AI sales assistant for WhatsApp",
    period: "2026",
    status: "Beta with client",
    context: "A print shop handled inquiries, quotes and payments on WhatsApp manually.",
    action:
      "I built the full flow in N8N on my own: RAG over the product catalog, quoting, Pix receipt validation via a separate vision model (to reduce cost), queue switching via webhook, and 24h/48h follow-ups.",
    result: { value: "2 agents", label: "from inquiry to validated Pix; humans only check at the register" },
    stack: ["N8N", "RAG", "Computer vision", "Webhooks"],
    links: [
      {
        label: "Demo video",
        href: "https://www.linkedin.com/posts/brasa-tecnologia_inteligenciaartificial-ia-iavendas-activity-7507787405530124289-DAnz",
      },
    ],
    image: { src: "/fluxos/grafica-n8n-faixa.jpg", alt: "AI assistant workflow in N8N" },
  },
  {
    title: "Multi-agent architecture for a medical clinic",
    period: "2026",
    status: "Validated in tests",
    context:
      "WhatsApp scheduling relied on a single “God Agent”: as the flow grew, context overflowed and inconsistencies and hallucinations appeared.",
    action:
      "I redesigned it in N8N as a supervisor coordinating specialized agents (reception, specialties, procedures, providers), with model fallback, Redis memory and an agent that decides whether to respond in text or audio.",
    result: { value: "1 → 5", label: "from one overloaded agent to five coordinated specialists" },
    stack: ["N8N", "Multi-agent", "Redis", "OpenRouter", "REST API"],
    image: { src: "/fluxos/clinica-n8n.jpg", alt: "Supervisor and specialized agents in N8N" },
  },
];

export const about = {
  title: { before: "From mechatronics to ", highlight: "software engineering", after: "." },
  paragraphs: [
    "I’m a software engineer in training, focused on applied AI and automation. I create agents and multi-agent workflows that integrate with real systems — WhatsApp, APIs and ERPs — and full-stack web applications, from database to interface.",
    "My Mechatronics background gave me a systems-level perspective and the logic to understand how hardware and software connect. Today I apply that to building smarter software, integrating AI into systems to make them more efficient and autonomous.",
    "Open to opportunities as a Full Stack Developer or Junior Software Engineer, continuously growing in architecture, back-end and applied AI while completing my degree.",
  ],
};

export const timeline: TimelineItem[] = [
  { period: "2026 — present", title: "Internship · Brasa Tecnologia", detail: "AI, N8N automation, ERP integrations" },
  { period: "2023 — 2027", title: "Software Engineering", detail: "Bachelor’s degree" },
  { period: "2021 — 2023", title: "Mechatronics Technician", detail: "Sensors, automation, hardware assembly" },
];

export const stack: StackGroup[] = [
  { area: "Back-end", items: ["PHP · Laravel", "Java · Spring Boot", "Python"] },
  { area: "Front-end", items: ["React · Next.js", "TypeScript", "Tailwind"] },
  { area: "Data", items: ["SQL · PostgreSQL", "Kafka", "Docker"] },
  { area: "AI & automation", items: ["N8N · RAG", "AI Agents", "Ollama"] },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "agro-iot",
    eyebrow: "Featured · Agro / IoT",
    title: "Agro-IoT Integrated Platform",
    description:
      "Enterprise-grade agricultural monitoring platform simulation built with Spring Boot microservices, each in its own Docker container. A sensor simulator sends real-time telemetry to the Next.js dashboard, with events via Apache Kafka, front-end debounce, JWT authentication and separate admin and user areas.",
    highlights: ["6 microservices", "Apache Kafka", "Integration tests"],
    media: "GIF · telemetry dashboard and fleet map",
    image: "/projetos/agroiot-mapeamento-new.jpg",
    caseStudyHref: "#agro-iot",
    codeHref: "https://github.com/Rick-Henrique7/sdd-iot-java",
  },
  {
    slug: "archexplorer",
    eyebrow: "Featured · Local AI",
    title: "ArchExplorer AI",
    description:
      "Desktop tool for software architects to reuse what they’ve already built. Explore project folders, find ready-made React components and back-end structures, save references as links and images, and get local AI analysis and improvement suggestions on the open codebase.",
    highlights: ["SDD · Spec Driven", "Local & offline AI", "Python · PySide6"],
    next: "In development: AI-powered code editing and software product lines (SPL) with variability diagrams.",
    media: "GIF · architecture analysis with local LLM",
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
      "Personal management app: daily tasks, habits with best-hours chart, Pomodoro with short, medium and long timers, and customizable background and text colors.",
    href: "https://github.com/Rick-Henrique7/Daily-Flow",
  },
  {
    eyebrow: "Front-end · Client",
    title: "Institutional website for designer",
    description: "Landing page for a graphic designer, blending strong visual identity, typography and usability.",
    href: "https://github.com/Rick-Henrique7/DesignPortfolio",
  },
  {
    eyebrow: "Web · JavaScript",
    title: "Smart Finance",
    description: "Web financial tracker with record creation, editing, filters, reports and charts.",
    href: "https://github.com/Rick-Henrique7/Financas-Inteligentes",
  },
];

export const contact = {
  intro: "Open to opportunities as a Full Stack Developer or Junior Software Engineer. If my profile makes sense for your team, let’s talk.",
  links: [
    { label: "E-mail", href: `mailto:${profile.email}`, icon: "arrow" },
    { label: "WhatsApp", href: profile.whatsapp, icon: "external" },
    { label: "LinkedIn", href: profile.linkedin, icon: "external" },
    { label: "GitHub", href: profile.github, icon: "external" },
    { label: "Resume (PDF)", href: profile.cvHref, icon: "download" },
  ] satisfies ContactLink[],
};

export const nav = [
  { label: "Achievements", href: "#feitos" },
  { label: "About", href: "#sobre" },
  { label: "Projects", href: "#projetos" },
  { label: "Contact", href: "#contato" },
];
