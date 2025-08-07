import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Smartphone, Settings, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Web Development",
      description: "Full-stack web applications with modern technologies and responsive designs.",
      features: [
        "Responsive website design",
        "Front-end & back-end development",
        "Database integration",
        "Performance optimization",
        "SEO-friendly solutions"
      ]
    },
    {
      icon: <Code className="text-primary" size={32} />,
      title: "Custom Development",
      description: "Tailored software solutions to meet specific business requirements.",
      features: [
        "Custom web applications",
        "API development & integration",
        "Database design & management",
        "Third-party integrations",
        "Code optimization"
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
      icon: <Smartphone className="text-primary" size={32} />,
      title: "Digital Solutions",
      description: "Modern digital solutions to streamline business operations.",
      features: [
        "Process automation",
        "Digital transformation",
        "System integration",
        "Workflow optimization",
        "Technology consulting"
      ]
    },
    {
      icon: <Shield className="text-primary" size={32} />,
      title: "System Maintenance",
      description: "Ongoing support to ensure your systems run smoothly and securely.",
      features: [
        "Regular system updates",
        "Security monitoring",
        "Backup solutions",
        "Performance optimization",
        "Proactive maintenance"
      ]
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: "Deployment & Optimization",
      description: "Efficient deployment strategies and performance optimization.",
      features: [
        "Application deployment",
        "Cloud solutions",
        "Performance tuning",
        "Monitoring setup",
        "Scalability planning"
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:natim0570@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover-glow transition-all"
                >
                  Get Free Consultation
                </a>
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