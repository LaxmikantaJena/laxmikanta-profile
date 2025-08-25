import { ExternalLink, Github, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'ArogyaCare-IQ',
      description: 'A smart healthcare management system that streamlines patient registration, appointment booking, telemedicine, and remote health monitoring. Built with ASP.NET MVC and SQL Server, it ensures secure data handling, role-based access, and insightful dashboards for doctors, patients, and administrators.',
      techStack: ['ASP.NET MVC', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
      role: 'Full-Stack Developer',
      responsibilities: [
       
      ],
      status: 'Professional Project',
      category: 'Healthcare Management System'
    },
    {
      title: 'Loan & Emi Management System',
      description: 'A comprehensive financial management system for handling loan applications, EMI calculations, and payment tracking. Built with ASP.NET MVC and SQL Server for robust data management.',
      techStack: ['ASP.NET MVC', 'C#','ADO .NET','JAVASCRIPT', 'SQL Server', 'jQuery', 'AJAX'],
      role: 'Backend Developer',
      responsibilities: [
         'Developed modules for patient registration, appointments, and telemedicine using ASP.NET MVC.',
        'Designed and optimized SQL Server database with stored procedures for secure data handling.Developed EMI calculation algorithms',
        'Implemented role-based authentication and authorization for different user types.',
        'Integrated remote health monitoring and alert notifications',
      ],
      status: 'Professional Project',
      category: 'Financial Management System',
       github: 'https://github.com/LaxmikantaJena',
      demo: '#'
    },
    {
      title: 'Product Billing System',
      description: 'A complete billing and invoice management system with product catalog, customer management, and automated billing features. Personal project showcasing full-stack development skills.',
      techStack: ['ASP.NET MVC', 'C#', 'SQL Server', 'HTML/CSS', 'JavaScript'],
      role: 'Backend Developer',
      responsibilities: [
        'Designed complete system architecture',
        'Implemented product catalog and pricing',
        'Developed customer management features',
        'Created automated billing and invoice generation'
      ],
      status: 'Personal Project',
      category: 'Billing System'
     
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my professional and personal projects demonstrating my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <Badge 
                    variant={project.status === 'Personal Project' ? 'default' : 'secondary'}
                    className={project.status === 'Personal Project' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium mb-3">
                  {project.category}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Role & Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Role: {project.role}
                  </h4>
                  <div className="space-y-1">
                    {project.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm"
                      asChild
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {!project.github && !project.demo && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 cursor-not-allowed opacity-50"
                      disabled
                    >
                      Professional Project
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore my GitHub profile for more projects, code samples, and contributions to the developer community.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              <a 
                href="https://github.com/LaxmikantaJena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Github size={20} className="mr-3" />
                Visit My GitHub
                <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;