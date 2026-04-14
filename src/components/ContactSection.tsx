import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/Bzats" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/miguel-lemos-ramos-04a915265/" },
  { icon: Mail, label: "Email", href: "mailto:miguellemosramos11@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6 md:px-20 lg:px-32 bg-secondary/30">
      <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Contato</h2>
      <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
        Vamos trabalhar juntos<span className="text-primary">?</span>
      </p>
      <p className="text-muted-foreground max-w-lg mb-10">
        Estou sempre aberto a novos projetos e oportunidades. Entre em contato por qualquer um dos canais abaixo.
      </p>
      <div className="flex gap-6">
        {links.map(({ icon: Icon, label, href }) => {
          const isExternalLink = href.startsWith("http");

          return (
            <a
              key={label}
              href={href}
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Icon size={20} />
              {label}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
