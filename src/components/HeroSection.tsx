import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 relative">
      <div className="max-w-3xl">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 animate-fade-in">
          Desenvolvedor Full-stack
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Miguel Ramos<span className="text-primary">.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Construo experiências digitais robustas e escaláveis, do front-end ao back-end.
        </p>
        <div className="flex gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <a href="#projetos" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Ver Projetos
          </a>
          <a href="#contato" className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors">
            Contato
          </a>
        </div>
      </div>
      <a href="#sobre" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
