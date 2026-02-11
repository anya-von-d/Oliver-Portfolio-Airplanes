import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const courses = [
  'Applied Aerodynamics',
  'Compressible Flow',
  'Numerical Methods for Compressible Flows',
  'Feedback Control Design',
  'Flight Mechanics & Controls',
  'Aircraft Design',
  'Intermediate Fluid Dynamics',
  'Atmospheric Flight',
  'Lightweight Structures Design',
  'Programming Abstractions',
  'Robotics and Autonomous Systems',
  'Operations of Aerospace Systems',
  'Engineering of Systems',
  'Aerodynamics for Racecars',
];

const technicalSkills = [
  'MATLAB',
  'Python',
  'C++',
  'Java',
  'Simulink',
  'ANSYS Fluent',
  'Luminary Cloud',
  'FUN3D',
  'SU2',
  'OVERFLOW',
  'XFOIL',
  'AVL',
  'FLOWUnsteady',
  'SolidWorks',
  'Fusion 360',
  'Siemens NX',
  'CATIA',
  'LaTeX',
];

export default function Coursework() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="coursework" className="relative py-16 px-4 sm:px-6 overflow-hidden" data-testid="section-coursework">
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl mb-4 text-[#171511]" data-testid="heading-coursework">
            <span className="text-primary">&lt;</span>Coursework & Skills<span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171511]">Relevant Courses</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <Card
                  key={course}
                  className={`p-3 sm:p-4 hover-elevate active-elevate-2 cursor-default transition-all animate-fade-in bg-white/60 !border-primary/30 ${
                    hoveredIndex === index ? 'scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  data-testid={`card-course-${index}`}
                >
                  <p className="font-mono text-xs sm:text-sm leading-relaxed text-primary">{course}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171511]">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="font-mono px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm !border-[#171511]/30 text-[#171511] hover:bg-primary hover:text-primary-foreground transition-all cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`badge-tech-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <Card className="mt-8 p-4 sm:p-6 border-primary/30 bg-white/60">
              <p className="text-sm sm:text-base text-[#171511]/70 leading-relaxed">
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
    </section>
  );
}
