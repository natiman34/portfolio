import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Globe, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Frontend Development",
      description: "Modern, responsive user interfaces with cutting-edge frontend technologies.",
      features: [
        "Responsive website design",
        "React & TypeScript development",
        "Modern UI/UX implementation",
        "Performance optimization",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: <Settings className="text-primary" size={32} />,
      title: "IT Support",
      description: "Comprehensive technical support and system maintenance services.",
      features: [
        "System troubleshooting",
        "Hardware & software support",
        "Network configuration",
        "Performance monitoring",
        "Technical consultation"
      ]
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Salesperson",
      description: "Professional sales services to drive business growth and revenue.",
      features: [
        "Lead generation",
        "Client relationship management",
        "Sales strategy development",
        "Product presentations",
        "Revenue optimization"
      ]
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Content Creator",
      description: "Engaging content creation for digital marketing and brand awareness.",
      features: [
        "Social media content",
        "Blog writing & copywriting",
        "Visual content design",
        "Brand storytelling",
        "Content strategy planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient shadow-card hover-glow transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-vivid rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 slide-up">
          <Card className="card-gradient shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your ideas to life with modern, 
                efficient, and scalable solutions.
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:0929130879"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover-glow transition-all"
                >
                  Call Now
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;