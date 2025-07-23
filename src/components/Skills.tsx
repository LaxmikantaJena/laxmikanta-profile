import { Code2, Database, Wrench, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-primary" size={24} />,
      skills: ['C#', 'SQL', 'JavaScript', 'HTML/CSS'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="text-primary" size={24} />,
      skills: ['ASP.NET MVC', 'ASP.NET Core', 'Bootstrap', 'jQuery'],
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Database & Data Access',
      icon: <Database className="text-primary" size={24} />,
      skills: ['SQL Server', 'ADO.NET', 'Stored Procedures', 'Database Design'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="text-primary" size={24} />,
      skills: ['Visual Studio', 'SSMS', 'Git', 'AJAX', 'IIS'],
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  const architectureSkills = [
    'MVC Pattern',
    '3-Tier Architecture',
    'RESTful APIs',
    'Object-Oriented Programming',
    'SOLID Principles',
    'Database Normalization'
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Core Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${category.color}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 bg-background rounded-full shadow-sm">
                  {category.icon}
                </div>
                <CardTitle className="text-lg text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture & Design Patterns */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-2">
                Architecture & Design Patterns
              </CardTitle>
              <p className="text-muted-foreground">
                Advanced concepts and methodologies I apply in development
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {architectureSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg hover:from-primary/10 hover:to-accent/10 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'ASP.NET MVC/Core', level: 85 },
              { skill: 'C# Programming', level: 90 },
              { skill: 'SQL Server', level: 80 },
              { skill: 'JavaScript/jQuery', level: 75 },
              { skill: 'Database Design', level: 85 },
              { skill: 'Problem Solving', level: 95 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;