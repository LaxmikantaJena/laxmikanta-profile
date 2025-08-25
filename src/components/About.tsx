import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Nalanda Institute of Technology, Bhubaneswar',
      year: '2024',
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: 'Bachelor of Science in Mathematics',
      institution: 'Utkal University',
      year: '2020',
      icon: <GraduationCap className="text-primary" size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Detailed Bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <MapPin className="text-primary mr-3" size={24} />
                Professional Background
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm <span className="font-semibold text-foreground">Laxmikanta Jena</span>, 
                  a dedicated .NET Developer based in Bangalore with a strong passion for backend development 
                  and database systems. My journey in software development began during my academic years, 
                  where I discovered my love for solving complex problems through code.
                </p>
                <p>
                  With 1.7+ years of professional experience at Linova Info Pvt. Ltd., I have honed my skills 
                  in building scalable web applications using ASP.NET MVC/Core, working extensively with SQL Server, 
                  and developing robust backend systems that power modern web applications.
                </p>
                <p>
                  My motivation stems from the satisfaction of transforming business requirements into 
                  efficient, maintainable code. I believe in writing clean, documented code that not only 
                  works but also stands the test of time. Every project I work on is an opportunity to 
                  learn something new and push the boundaries of what's possible with technology.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Professional Goals</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuously improve expertise in .NET ecosystem and cloud technologies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contribute to open-source projects and share knowledge with the developer community
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lead development teams and mentor junior developers
                </li>
              </ul>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Calendar className="text-primary mr-3" size={24} />
              Education Timeline
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center text-sm text-primary font-medium">
                          <Calendar size={14} className="mr-1" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;