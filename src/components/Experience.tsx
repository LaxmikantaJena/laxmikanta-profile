import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experience = {
    role: '.NET Developer',
    company: 'Linova Info Pvt. Ltd.',
    location: 'Bangalore',
    duration: 'Jan 2024 – Jun 2025',
    responsibilities: [
      'Developed and maintained web applications using ASP.NET MVC/Core framework',
      'Designed and implemented database schemas using SQL Server with optimized stored procedures',
      'Built responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript/jQuery',
      'Implemented form validation and input handling for enhanced user experience',
      'Integrated multiple project modules ensuring seamless data flow and functionality',
      'Performed code debugging, testing, and maintenance to ensure application reliability',
      'Collaborated with cross-functional teams to deliver projects within deadlines',
      'Utilized ADO.NET for efficient database connectivity and data operations'
    ],
    technologies: [
      'ASP.NET MVC',
      'ASP.NET Core',
      'C#',
      'SQL Server',
      'ADO.NET',
      'JavaScript',
      'jQuery',
      'AJAX',
      'HTML/CSS',
      'Bootstrap',
      'Stored Procedures',
      'MVC Architecture'
    ]
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {experience.role}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <ExternalLink size={16} className="mr-2" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin size={16} className="mr-2" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center text-primary font-medium">
                        <Calendar size={16} className="mr-2" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Key Responsibilities
                </h4>
                <div className="grid gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-tech-blue text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact Statement */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Impact & Achievements
                </h4>
                <p className="text-muted-foreground">
                  During my tenure, I successfully contributed to multiple high-impact projects, 
                  improving application performance through optimized database queries and implementing 
                  robust backend solutions that enhanced user experience and system reliability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;