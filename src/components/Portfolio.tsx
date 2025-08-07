import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Users, Calendar, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Final Year Web Application Project",
      role: "Project Manager & Developer",
      description: "Led a team to plan, build, and deploy a full-stack web application using Agile methodologies. Managed the entire development lifecycle from conception to deployment, ensuring efficient collaboration and timely delivery.",
      technologies: ["React", "Node.js", "MongoDB", "Agile", "Git"],
      features: [
        "Team leadership and project management",
        "Full-stack development",
        "Agile methodology implementation",
        "End-to-end development lifecycle"
      ],
      status: "Completed",
      icon: <Users className="text-primary" size={24} />
    }
  ];

  const comingSoonProjects = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with integrated payment systems",
      status: "Planning"
    },
    {
      title: "Portfolio Management System",
      description: "Client portfolio tracking and management application",
      status: "In Development"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile application for business automation",
      status: "Research Phase"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing projects that demonstrate technical expertise and leadership
          </p>
        </div>
        
        {/* Featured Project */}
        <div className="mb-16 slide-up">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Project</h3>
          {projects.map((project) => (
            <Card key={project.id} className="card-gradient shadow-card hover-glow max-w-4xl mx-auto">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <div>
                      <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                      <p className="text-lg text-muted-foreground mt-1">{project.role}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent-vivid">
                    <Calendar size={16} className="mr-1" />
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Zap size={16} className="text-accent-vivid" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" className="hover-glow">
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="hover-glow">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Coming Soon Projects */}
        <div className="slide-up">
          <h3 className="text-2xl font-semibold mb-8 text-center">Coming Soon</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {comingSoonProjects.map((project, index) => (
              <Card key={index} className="card-gradient shadow-card hover-glow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-muted-foreground" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2 text-primary">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <Badge variant="outline" className="border-accent/30 text-accent-vivid">
                    {project.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;