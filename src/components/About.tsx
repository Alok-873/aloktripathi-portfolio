import { Card } from "@/components/ui/card";
import { Code2, Rocket, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Expertise in backend architecture, full-stack development, and modern DevOps practices."
    },
    {
      icon: Rocket,
      title: "Innovation Driver",
      description: "Building cutting-edge platforms like GrowCode and WritersNest with AI integration."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Reduced processing times by 50%, improved API performance by 2x through optimization."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Currently serving as <span className="text-primary font-semibold">Lead Software Engineer (Technical Manager)</span> at 
              Indus Media Solutions, where I architect backend integrations with Broadsign Control and manage DOOH campaigns for 25+ major brands.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a B.Tech in Electronics & Communication from JIIT Noida (CGPA: 7.6/10) and experience at GreyB Research, 
              I've built centralized data infrastructure, achieved 99.8% campaign delivery rates, and optimized systems for 2x performance gains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <span className="text-accent font-semibold">TechGig Code Gladiators Finalist</span> (Top 0.1% nationwide) 
              and competitive programmer, I combine algorithmic thinking with full-stack expertise to build 
              scalable, innovative solutions.
            </p>
          </div>

          <div className="relative">
            <Card className="bg-card border-border p-8 card-glow">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-sm font-mono text-primary">Current Focus</span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Building GrowCode - Collaborative coding platform with AI debugging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Designing WritersNest - Literature sharing platform with AI features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>Exploring LangChain, Docker orchestration, and microservices architecture</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover-glow cursor-pointer group"
            >
              <item.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
