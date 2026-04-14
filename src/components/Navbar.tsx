import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-20 lg:px-32 h-16">
        <a href="#" className="font-bold text-lg text-foreground">
          MR<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
              {item.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
