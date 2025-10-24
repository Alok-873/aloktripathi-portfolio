import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C/C++"],
      color: "primary"
    },
    {
      category: "Backend",
      skills: ["FastAPI", "Flask", "Node.js", "Express.js"],
      color: "accent"
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Vuetify", "Tailwind CSS"],
      color: "primary"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "Elasticsearch", "MongoDB", "Firebase", "ClickHouse", "Manticore"],
      color: "accent"
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git/GitHub", "JMeter", "Postman", "Selenium", "Locust", "NGINX", "Kubernetes"],
      color: "primary"
    },
    {
      category: "AI & ML Tools",
      skills: ["LangChain", "GitHub Copilot", "ChatGPT", "Google Gemini", "Amazon Q", "Google AI Studio"],
      color: "accent"
    }
  ];


  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A comprehensive toolkit for building scalable, modern applications
        </p>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover-glow group"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className={`border-${category.color}/30 text-${category.color} bg-${category.color}/5 hover:bg-${category.color}/10 transition-colors`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
