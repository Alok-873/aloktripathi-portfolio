import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="mb-6 animate-fade-in">
          <span className="text-primary text-sm font-mono tracking-wider uppercase">
            Lead Software Engineer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-gradient">Alok Tripathi</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Lead Software Engineer & Technical Manager specializing in DOOH advertising automation, 
          backend architectures, and AI-powered solutions. Expert in building scalable data processing systems.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            onClick={() => scrollToSection("projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow font-semibold px-8 py-6 text-lg"
          >
            View Projects
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 hover-glow font-semibold px-8 py-6 text-lg"
          >
            Let's Connect
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a 
            href="https://github.com/alok-873" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover-glow rounded-lg"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/aloktripathi873" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover-glow rounded-lg"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:aloktripathi873@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover-glow rounded-lg"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></span>
            Available for freelance opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
