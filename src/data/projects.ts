export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel admin.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://github.com/seu-usuario/ecommerce",
    year: "2025",
  },
  {
    id: 2,
    title: "Task Manager API",
    description: "API RESTful para gerenciamento de tarefas com autenticação JWT.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/seu-usuario/task-api",
    year: "2025",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos e métricas em tempo real.",
    tags: ["React", "TypeScript", "D3.js", "WebSocket"],
    link: "https://github.com/seu-usuario/dashboard",
    year: "2024",
  },
  {
    id: 4,
    title: "Chat App",
    description: "Aplicação de chat em tempo real com salas e mensagens privadas.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    link: "https://github.com/seu-usuario/chat-app",
    year: "2024",
  },
  {
    id: 5,
    title: "Blog CMS",
    description: "Sistema de gerenciamento de conteúdo para blogs com editor rich text.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "TipTap"],
    link: "https://github.com/seu-usuario/blog-cms",
    year: "2024",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Aplicativo de previsão do tempo com geolocalização e mapas interativos.",
    tags: ["React", "OpenWeather API", "Leaflet"],
    link: "https://github.com/seu-usuario/weather",
    year: "2024",
  },
  {
    id: 7,
    title: "Marketplace Mobile",
    description: "App mobile de marketplace para compra e venda de produtos usados.",
    tags: ["React Native", "Firebase", "Expo"],
    link: "https://github.com/seu-usuario/marketplace",
    year: "2023",
  },
  {
    id: 8,
    title: "URL Shortener",
    description: "Encurtador de URLs com analytics de cliques e QR code.",
    tags: ["Node.js", "Redis", "PostgreSQL"],
    link: "https://github.com/seu-usuario/shortener",
    year: "2023",
  },
  {
    id: 9,
    title: "Portfolio Generator",
    description: "Ferramenta para gerar portfólios a partir de templates customizáveis.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/seu-usuario/portfolio-gen",
    year: "2023",
  },
  {
    id: 10,
    title: "Kanban Board",
    description: "Quadro Kanban com drag & drop e colaboração em equipe.",
    tags: ["React", "DnD Kit", "Supabase"],
    link: "https://github.com/seu-usuario/kanban",
    year: "2023",
  },
  {
    id: 11,
    title: "Expense Tracker",
    description: "Controle de despesas pessoais com categorias e relatórios visuais.",
    tags: ["React", "Chart.js", "Node.js", "MongoDB"],
    link: "https://github.com/seu-usuario/expenses",
    year: "2022",
  },
  {
    id: 12,
    title: "Landing Page Builder",
    description: "Construtor de landing pages drag & drop sem código.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/seu-usuario/lp-builder",
    year: "2022",
  },
];

export const skills = [
  { category: "Front-end", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Native"] },
  { category: "Back-end", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
  { category: "Ferramentas", items: ["VS Code", "Figma", "Postman", "Jira", "Notion"] },
];
