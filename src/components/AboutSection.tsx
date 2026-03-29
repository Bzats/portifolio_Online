const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6 md:px-20 lg:px-32">
      <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Sobre mim</h2>
      <div className="max-w-2xl">
        <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug mb-6">
          Transformo ideias em código limpo e funcional.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Sou desenvolvedor Full-stack com experiência em criar aplicações web e mobile completas. 
          Apaixonado por resolver problemas complexos com soluções elegantes e escaláveis.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Trabalho com tecnologias modernas do ecossistema JavaScript/TypeScript, 
          sempre buscando as melhores práticas de desenvolvimento e arquitetura de software.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
