import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 relative">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-3xl">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 animate-fade-in">
            Analista de Dados & Desenvolvedor Back-End
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Miguel Lemos Ramos<span className="text-primary">.</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Tenho foco em analise de dados e indicadores, mas também tenho experiência em desenvolvimento back-end. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para entregar soluções de alta qualidade.
          </p>
          <div
            className="flex gap-4 mt-10 animate-fade-in"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <a
              href="#projetos"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        <div
          className="animate-fade-in flex justify-center lg:justify-end"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          <img
            src="/images/miguel.png"
            alt="Foto de Miguel Lemos Ramos"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-primary/70 shadow-xl"
          />
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;