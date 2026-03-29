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
    title: "Site para Projeto de Libras",
    description: "Esta foi a minha contribuição no primeiro projeto desenvolvido na faculdade! ",
    tags: ["HTML", "CSS"],
    link: "https://github.com/Bzats/Projeto-Interdisciplinar.git",
    year: "2023",
  },
  {
    id: 2,
      title: "Projeto Krusty Burger",
    description: "Projeto de uma hambúrgueria fíctica, participação no Design e no criativo do projeto.",
    tags: ["Node.js", "Handlebars", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Kendi9866/Krusty-Burger-2sem.git",
    year: "2024",
  },
  {
    id: 3,
    title: "GO-Planer",
    description: "Planejador de viagens, tendo a possibilidade de planejar suas viagens com amgios e familiares em conjunto.",
    tags: ["JavaScript", "TypeScript", "Node.js", "MongoDB"],
    link: "https://github.com/R4ULz/go-planner.git",
    year: "2024",
  },
  {
    id: 4,
    title: "Motor de Pesquisa de Leilões",
    description: "Motor de pesquisa desenvolvido para o encontro das melhores oportunidades no mercadod e leilões.",
    tags: ["Next.JS", "Python", "Mongo.DB"],
    link: "https://github.com/LeandroRodrigues061/PI-Motor-de-Busca-4-sem.git",
    year: "2025",
  },
  {
    id: 5,
    title: "Go-Planner Mobile",
    description: "Planejador de viagens em sua versão Moblie!",
    tags: ["React Native", "Spring Boot 3", "MongoDB"],
    link: "https://github.com/Bonde-do-tigrinho/Go-Planner-Java.git",
    year: "2025",
  },
  
];

export const skills = [
  { category: "Front-end", items: ["React", "JavaScript", "Next.js", "Tailwind CSS", "React Native"] },
  { category: "Back-end", items: ["Node.js", "Express", "Python", "MySQL", "MongoDB"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
  { category: "Ferramentas", items: ["VS Code", "Figma", "Postman", "Trello", "Excel-Avançado"] },
];
