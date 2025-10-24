import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GrowCode",
      subtitle: "Collaborative Coding Platform",
      description: "Full-stack platform featuring curated articles, pair programming, real-time code execution, and AI-assisted debugging. Built with Next.js, Node.js, Redis, PostgreSQL, and Docker-based sandboxing.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "WebSocket", "AI/ML"],
      status: "In Progress",
      gradient: "from-primary to-accent"
    },
    {
      title: "WritersNest",
      subtitle: "Literature Sharing Platform",
      description: "Community-driven platform with AI-powered summarization, contextual explanation, and vocabulary building. Architecting with React, Node.js, PostgreSQL, MongoDB, and LLM integration.",
      tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "LLMs", "AI"],
      status: "In Progress",
      gradient: "from-accent to-primary"
    },
    {
      title: "Patent Family Visualization Tool",
      subtitle: "GreyB Research",
      description: "Engineered full-stack tool rendering 1,000+ patents interactively. Enhanced API performance by 2x through optimized indexing. Built Chrome extension improving readability by 70%.",
      tech: ["Vue.js", "FastAPI", "Elasticsearch", "PostgreSQL", "Chrome Extension"],
      status: "Completed",
      gradient: "from-primary via-accent to-primary"
    },
    {
      title: "Broadsign Integration",
      subtitle: "Indus Media Solutions",
      description: "Architected backend integration with Broadsign Control, automating campaign workflows for DOOH advertising. Improved report generation efficiency by 40% through RESTful APIs and data pipelines.",
      tech: ["FastAPI", "PostgreSQL", "REST APIs", "Docker"],
      status: "Production",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Building innovative solutions at the intersection of AI and full-stack development
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-8 hover-glow group cursor-pointer overflow-hidden relative"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-primary/30 text-primary bg-primary/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
