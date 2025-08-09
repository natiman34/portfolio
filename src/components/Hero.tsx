import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/natnael-profile-real.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-muted-foreground text-2xl lg:text-3xl font-normal block mb-2">Hello, I'm</span>
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Natnael Sema
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-foreground font-semibold mb-4">
              Computer Science Graduate & Web Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Passionate about bridging technology with user needs. I create innovative digital solutions 
              combining technical expertise with problem-solving skills and collaborative teamwork.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="hero-gradient text-primary-foreground hover-glow" onClick={() => scrollToSection('portfolio')}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="hover-glow" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <a href="https://github.com/natiman34" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/natnaelsema" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2">
                <Linkedin size={24} />
              </a>
              <a href="mailto:natim0570@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover-glow p-2">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-card hover-glow border-4 border-primary/20">
                <img src={profileImage} alt="Natnael Sema - Computer Science Graduate & Web Developer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent to-accent-vivid rounded-xl opacity-80"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-lg opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('about')} />
      </div>
    </section>
  );
};

export default Hero;