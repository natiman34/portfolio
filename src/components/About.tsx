import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, User } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about bridging technology with user needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="slide-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-lg">
                <User className="text-primary" size={24} />
                <span className="font-semibold">Natnael Sema</span>
              </div>
              
              <div className="flex items-center space-x-3 text-lg">
                <MapPin className="text-primary" size={24} />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              
              <div className="flex items-center space-x-3 text-lg">
                <GraduationCap className="text-primary" size={24} />
                <span>Computer Science Graduate (Class of 2025)</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>Frontend Developer with a Bachelor's in Computer Science (AAU) and AI certification. Built responsive UIs that increased client engagement by 15% at Kehsud Technologies. As a Content Creator at Dablie Foundation, developed tech-focused digital content. Skilled in performance optimization, accessibility, and user-centric design. Combines technical expertise with sales psychology to create business-aligned interfaces. Currently enhancing skills in modern frontend architectures while maintaining focus on intuitive user experiences.</p>
              
              <p>
            </p>
              
              <p>As a Computer Science graduate from Addis Ababa University, I'm committed to continuous growth and leveraging technology to real-world problems. I thrive in collaborative environments where innovation meets practical application.</p>
            </div>
          </div>
          
          {/* Skills & Achievements */}
          <div className="space-y-6 slide-up">
            <Card className="card-gradient shadow-card hover-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">BSc in Computer Science</h4>
                  <p className="text-muted-foreground">Addis Ababa University</p>
                  <p className="text-sm text-muted-foreground">Class of 2025</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient shadow-card hover-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Recent Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Social Media Content Creator</h4>
                    <p className="text-sm text-muted-foreground">Dablie Foundation (May 2025 – Jun 2025)</p>
                    <p className="text-sm mt-1">Created tech-focused content and educational posts</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Sales Associate</h4>
                    <p className="text-sm text-muted-foreground">Gebeyax (Mar 2023 – Apr 2024)</p>
                    <p className="text-sm mt-1">Boosted client engagement by 15%, trained users on app functionality</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient shadow-card hover-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Core Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Project Management', 'Networking', 'Operating System', 'IT Support', 'Team Collaboration', 'Sales Associate', 'Customer Service', 'Microsoft Office', 'User Experience', 'Team Leadership', 'Technical Communication'].map(skill => <span key={skill} className="px-3 py-1 bg-accent/20 text-accent-vivid rounded-full text-sm font-medium">
                      {skill}
                    </span>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;