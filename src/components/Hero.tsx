import { Github, Linkedin, Mail, ArrowRight, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hire Me To <br />
                <span className="text-primary">Develop Your</span> <br />
                <span className="relative">
                  Backend.
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a passionate .NET Developer with 1.5+ years of experience in building scalable web applications and backend systems using ASP.NET MVC/Core, SQL Server, and C#. I thrive on solving real-world problems through code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                View Portfolio
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/LaxmikantaJena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-tech-blue hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/laxmikanta-jena-878b6127b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-tech-blue hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:laxmikanta.ai@gmail.com"
                className="p-3 rounded-full bg-tech-blue hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src={profilePhoto} 
                alt="Laxmikanta Jena - .NET Developer"
                className="w-full h-full object-cover rounded-3xl border-4 border-background shadow-2xl"
              />
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 p-3 bg-background rounded-full shadow-lg animate-bounce">
                <Code className="text-primary" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 bg-background rounded-full shadow-lg animate-bounce delay-150">
                <Database className="text-primary" size={24} />
              </div>
              <div className="absolute top-1/2 -right-6 p-3 bg-background rounded-full shadow-lg animate-bounce delay-300">
                <Server className="text-primary" size={24} />
              </div>
            </div>

            {/* Contact Card */}
            <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-2xl border border-border max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">.NET Developer</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Hi there! I'm Laxmikanta, a passionate web developer who loves to take challenges and create stunning backend systems.
              </p>
              <div className="flex items-center mt-3 text-sm text-muted-foreground">
                <Mail size={14} className="mr-2" />
                <span>6362023536</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;