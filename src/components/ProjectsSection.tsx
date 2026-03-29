import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-6 md:px-20 lg:px-32">
      <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Projetos</h2>
      <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
        O que eu construí<span className="text-primary">.</span>
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-secondary text-secondary-foreground text-xs font-mono px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
