import { Github, Linkedin, Mail, ArrowRight, Code, Database, Server, Download, Sparkles } from 'lucide-react';
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
      {/* Modern Gradient Background with Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/20 via-primary/10 to-gradient-end/20"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-end/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Sparkles className="text-primary mr-2" size={16} />
              <span className="text-primary font-medium text-sm">Available for Projects</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hire Me To <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary to-gradient-end bg-clip-text text-transparent">
                    Develop Your
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-gradient-end/20 blur-xl -z-10 rounded-lg"></div>
                </span>
                <br />
                <span className="relative">
                  Backend.
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-primary to-gradient-end rounded-full opacity-80"></div>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">.NET Developer</span> with 2.1+ years of experience in building scalable web applications and backend systems using ASP.NET MVC/Core, SQL Server, and C#.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 text-lg font-medium border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4 pt-6">
              {[
                { icon: Github, href: "https://github.com/LaxmikantaJena", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/laxmikanta-jena-878b6127b", label: "LinkedIn" },
                { icon: Mail, href: "mailto:laxmikanta.techai@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                  className="group p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="relative lg:justify-self-end">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-gradient-end/30 rounded-full blur-3xl scale-110 opacity-20 animate-pulse"></div>
            
            <div className="relative mx-auto w-80 h-80 lg:w-[480px] lg:h-[480px]">
              {/* Main Profile Image */}
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-background group">
                <img 
                  src={profilePhoto} 
                  alt="Laxmikanta Jena - .NET Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Tech Icons with Enhanced Animation */}
              {[
                { icon: Code, position: "-top-6 -right-6", delay: "0ms", color: "text-blue-500" },
                { icon: Database, position: "-bottom-6 -left-6", delay: "200ms", color: "text-green-500" },
                { icon: Server, position: "top-1/2 -right-8", delay: "400ms", color: "text-purple-500" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`absolute ${item.position} p-4 bg-background rounded-2xl shadow-xl border border-border animate-bounce hover:scale-110 transition-transform cursor-pointer`}
                  style={{ animationDelay: item.delay }}
                >
                  <item.icon className={item.color} size={28} />
                </div>
              ))}
            </div>

            {/* Enhanced Contact Card */}
            <div className="absolute -bottom-12 -left-12 bg-background/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-border max-w-sm group hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-base font-semibold text-foreground">.NET Developer</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Hi there! I'm Laxmikanta, a passionate web developer who loves to take challenges and create stunning backend systems.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail size={16} className="mr-3 text-primary" />
                <span className="font-medium">+91 9113899388</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;