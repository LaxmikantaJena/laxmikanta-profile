import { Server, Globe, Database, CheckCircle, Wrench, Bug } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Backend Development',
      icon: <Server className="text-primary" size={32} />,
      description: 'Building robust and scalable backend systems using ASP.NET MVC/Core with clean architecture and best practices.',
      features: [
        'RESTful API Development',
        'Business Logic Implementation',
        'Performance Optimization',
        'Security Implementation'
      ]
    },
    {
      title: 'Web Application Development',
      icon: <Globe className="text-primary" size={32} />,
      description: 'Creating dynamic, responsive web applications with modern UI/UX and seamless user interactions.',
      features: [
        'Full-Stack Development',
        'Responsive Design',
        'Interactive User Interfaces',
        'Cross-Browser Compatibility'
      ]
    },
    {
      title: 'SQL Database Design & Management',
      icon: <Database className="text-primary" size={32} />,
      description: 'Designing efficient database schemas, optimizing queries, and implementing robust data management solutions.',
      features: [
        'Database Schema Design',
        'Query Optimization',
        'Stored Procedures',
        'Data Migration'
      ]
    },
    {
      title: 'Form Validation & Input Handling',
      icon: <CheckCircle className="text-primary" size={32} />,
      description: 'Implementing comprehensive form validation and secure input handling for enhanced data integrity.',
      features: [
        'Client-Side Validation',
        'Server-Side Validation',
        'Input Sanitization',
        'Error Handling'
      ]
    },
    {
      title: 'Project Module Integration',
      icon: <Wrench className="text-primary" size={32} />,
      description: 'Seamlessly integrating different project modules and ensuring smooth data flow across systems.',
      features: [
        'System Integration',
        'API Integration',
        'Data Synchronization',
        'Workflow Automation'
      ]
    },
    {
      title: 'Code Debugging & Maintenance',
      icon: <Bug className="text-primary" size={32} />,
      description: 'Identifying and resolving issues, optimizing code performance, and maintaining application reliability.',
      features: [
        'Bug Identification & Fixing',
        'Performance Monitoring',
        'Code Refactoring',
        'Legacy System Maintenance'
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300 w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with robust, scalable solutions 
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 font-medium"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;