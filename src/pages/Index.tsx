import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 px-6 text-center text-muted-foreground text-sm font-mono border-t border-border">
        © {new Date().getFullYear()} Miguel Ramos. Todos os direitos reservados.
      </footer>
    </div>
  );
};

<Link
  to="/sobre"
  style={{
    display: "inline-block",
    marginTop: "24px",
    padding: "12px 20px",
    borderRadius: "10px",
    backgroundColor: "#111",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  }}
>
  Ver mais sobre mim
</Link>


export default Index;
