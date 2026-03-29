import { skills } from "@/data/projects";

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-24 px-6 md:px-20 lg:px-32 bg-secondary/30">
      <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-foreground font-semibold text-lg mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-muted-foreground font-mono text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
