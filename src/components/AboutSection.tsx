const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6 md:px-20 lg:px-32">
      <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Sobre mim</h2>
      <div className="max-w-2xl">
        <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug mb-6">
          Trabalho para transformar ideias em código limpo e funcional.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Estudo na Fatec Zona Leste, no curso de Desenvolvimento de software multiplataforma, com inicio no segundo semestre de 2023, e tendo previsão de término no primeiro semestre de 2026.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Trabalho Desde de Mar/2024 como Analista de Planejamento da Pés Sem Dor, aonde sou responsável pelo monitoramento em tempo real da operação, gestão de filas de atendimento, controle de produtividade, análise de indicadores, além de acionar estratégias para otimizar a distribuição de chamadas e garantir o cumprimento das metas
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
