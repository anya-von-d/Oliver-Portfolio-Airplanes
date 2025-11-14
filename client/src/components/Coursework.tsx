import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const courses = [
  'Aircraft Design',
  'Applied Aerodynamics',
  'Flight Mechanics & Controls',
  'Intermediate Fluid Dynamics',
  'Feedback Control Design',
  'Atmospheric Flight',
  'Space Flight',
  'Lightweight Structures Design',
  'Programming Abstractions',
  'Robotics and Autonomous Systems',
  'Operations of Aerospace Systems',
  'Aerodynamics for Racecars',
];

const technicalSkills = [
  'MATLAB',
  'Python',
  'C++',
  'Java',
  'Simulink',
  'Ansys',
  'SolidWorks',
  'Siemens NX',
  'CATIA',
  'XFOIL',
  'LaTeX',
];

export default function Coursework() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="coursework" className="relative pt-4 pb-32 px-6" data-testid="section-coursework">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative flex items-end">
          <div className="relative" style={{ width: '400px', height: '80px' }}>
            <svg className="w-full h-full absolute bottom-0" viewBox="0 0 400 80" preserveAspectRatio="none" style={{ display: 'block' }}>
              <path
                d="M 0,60 Q 20,60 35,40 Q 50,20 75,20 L 325,20 Q 350,20 365,40 Q 380,60 400,60 L 400,80 L 0,80 Z"
                fill="hsl(220, 35%, 25%)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pt-6">
              <h2 className="font-mono text-xl md:text-2xl text-white whitespace-nowrap" data-testid="heading-coursework">
                <span className="text-primary">&lt;</span>Coursework & Skills<span className="text-primary">/&gt;</span>
              </h2>
            </div>
          </div>
          <div className="flex-1 bg-[hsl(220,35%,25%)] h-5"></div>
        </div>

        <div className="bg-[hsl(220,35%,25%)] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-display font-bold text-2xl text-white">Relevant Courses</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <Card
                  key={course}
                  className={`p-4 hover-elevate active-elevate-2 cursor-default transition-all animate-fade-in bg-white/5 !border-primary ${
                    hoveredIndex === index ? 'scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  data-testid={`card-course-${index}`}
                >
                  <p className="font-mono text-sm leading-relaxed text-primary">{course}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-display font-bold text-2xl text-white">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="font-mono px-4 py-2 text-sm !border-white text-white hover:bg-primary hover:text-primary-foreground transition-all cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`badge-tech-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <Card className="mt-8 p-6 border-primary/30 bg-white/5">
              <p className="text-white/70 leading-relaxed">
                <span className="font-display font-semibold text-primary block mb-2">
                  Specialized Expertise
                </span>
                Strong foundation in aerospace engineering with hands-on experience in aircraft design, 
                flight test engineering, and aeroacoustics research. Proficient in computational fluid dynamics, 
                structural analysis, and control systems design. Licensed private pilot with experience flying 
                Cessna 182/172, Kodiak 100/900, and IAR-46 aircraft.
              </p>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
