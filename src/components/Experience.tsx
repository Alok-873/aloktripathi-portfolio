import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Indus Media Solutions Pvt. Ltd.",
      role: "Lead Software Engineer (Technical Manager)",
      period: "Oct 2024 - Present",
      location: "Gurugram, India",
      achievements: [
        "Architected backend integration with Broadsign Control, automating 95%+ of campaign workflows",
        "Spearheaded technical collaboration with 25+ major brands (Zomato, Tanishq), achieving 99.8% campaign delivery",
        "Managed DOOH campaigns across 12-15 digital screens through Broadsign Control CMS",
        "Designed RESTful APIs and automated data pipelines, improving report generation efficiency by 40%"
      ],
      tech: ["FastAPI", "PostgreSQL", "Docker", "REST APIs"]
    },
    {
      company: "GreyB Research Pvt. Ltd.",
      role: "Software Developer",
      period: "Jul 2023 - Oct 2024",
      location: "Chandigarh, India",
      achievements: [
        "Architected centralized data infrastructure for all research teams, building ETL pipelines for USPTO bulk data",
        "Instituted robust QA practices using TDD, achieving 60%+ project test coverage",
        "Developed full-stack patent family visualization tool rendering 1,000+ patents, including Salesforce APEX version",
        "Enhanced API performance by 2x through optimized indexing and caching strategies",
        "Built AI-powered Chrome extension improving patent readability by 70%"
      ],
      tech: ["Vue.js", "FastAPI", "Elasticsearch", "PostgreSQL", "Salesforce APEX", "Playwright", "Selenium"]
    }
  ];

  const awards = [
    {
      title: "TechGig Code Gladiators Finalist",
      year: "2023",
      description: "Top 0.1% Nationwide"
    },
    {
      title: "CodeChef June Long Challenge",
      year: "2023",
      description: "Global Rank 140"
    },
    {
      title: "Google Code Jam",
      year: "2023",
      description: "Rank 1342 / 25,000+"
    },
    {
      title: "HackerRank Certified",
      year: "2023",
      description: "Intermediate Problem Solving"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Professional journey and achievements
        </p>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-8 hover-glow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
              
              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    </div>
                    <p className="text-xl text-accent mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-primary/30 text-primary bg-primary/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">
            <span className="text-gradient">Honors & Awards</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="bg-card border-border p-6 hover-glow text-center group"
              >
                <Award className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{award.title}</h4>
                <p className="text-sm text-primary mb-2">{award.year}</p>
                <p className="text-sm text-muted-foreground">{award.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
