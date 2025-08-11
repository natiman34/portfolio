import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Server, 
  Wrench, 
  Users, 
  Globe, 
  Database,
  Smartphone,
  GitBranch,
  Brain,
  MessageCircle,
  Target,
  Handshake
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-primary" size={28} />,
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
      color: "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="text-primary" size={28} />,
      skills: ["Git/GitHub", "Microsoft Office", "Operating Systems", "IT Support", "Project Management"],
      color: "bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800"
    },
    {
      title: "Professional Skills",
      icon: <Users className="text-primary" size={28} />,
      skills: ["Team Collaboration", "Problem Solving", "Customer Service", "Sales", "Technical Communication", "Leadership"],
      color: "bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800"
    }
  ];

  const certifications = [
    {
      title: "BSc Computer Science",
      institution: "Addis Ababa University",
      year: "2025",
      icon: <Brain className="text-primary" size={20} />
    },
    {
      title: "AI Fundamentals",
      institution: "Udacity",
      year: "2024",
      icon: <Globe className="text-primary" size={20} />
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and professional competencies that drive results
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`card-gradient shadow-card hover-glow slide-up ${category.color}`}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-background/80 text-foreground border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="slide-up">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient shadow-card hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{cert.institution}</p>
                      <p className="text-xs text-primary font-medium">{cert.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;