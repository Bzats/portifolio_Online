export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Site para Projeto de Libras",
    description: "Esta foi a minha contribuição no primeiro projeto desenvolvido na faculdade! Minha parte foi a criação da página de cursos.",
    tags: ["HTML", "CSS"],
    link: "https://github.com/Kendi9866/PROJETO_PI.git",
    year: "2023",
    image: "/images/projects/projeto-libras.png",
  },
  {
    id: 2,
    title: "Projeto Krusty Burger",
    description: "Projeto de uma hambúrgueria fícticia, participação no design e no criativo do projeto.",
    tags: ["Node.js", "Handlebars", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Kendi9866/Krusty-Burger-2sem.git",
    year: "2024",
    image: "/images/projects/krusty-burger.png",
  },
  {
    id: 3,
    title: "GO-Planer",
    description: "Planejador de viagens, tendo a possibilidade de planejar suas viagens com amigos e familiares em conjunto.Tendo participado na criação do Front-end e do Back-end do projeto.",
    tags: ["JavaScript", "TypeScript", "Node.js", "MongoDB"],
    link: "https://github.com/R4ULz/go-planner.git",
    year: "2024",
    image: "/images/projects/go-planner.png",
  },
  {
    id: 4,
    title: "Motor de Pesquisa de Leilões",
    description: "Motor de pesquisa desenvolvido para o encontro das melhores oportunidades no mercado de leilões.Tendo participado na criação do Back-End e das Api's do projeto.",
    tags: ["Next.js", "Python", "MongoDB"],
    link: "https://github.com/LeandroRodrigues061/PI-Motor-de-Busca-4-sem.git",
    year: "2025",
    image: "/images/projects/motor-leiloes.png",
  },
  {
    id: 5,
    title: "Go-Planner Mobile",
    description: "Planejador de viagens em sua versão mobile! Aonde participei na criação do Back-end do projeto!",
    tags: ["React Native", "Spring Boot 3", "MongoDB"],
    link: "https://github.com/Bonde-do-tigrinho/Go-Planner-Mobile.git,",
    year: "2025",
    image: "/images/projects/go-planner-mobile.png",
  },
];

export const skills = [
  { category: "Front-end", items: ["React", "JavaScript", "Next.js", "Tailwind CSS", "React Native"] },
  { category: "Back-end", items: ["Node.js", "Express", "Python", "MySQL", "MongoDB"] },
  { category: "Ferramentas", items: ["VS Code", "Figma", "Postman", "Trello", "Excel-Avançado"] },
  { category: "Línguas", items: ["Português (nativo)", "Inglês (avançado)", "Espanhol (básico)"] },
];