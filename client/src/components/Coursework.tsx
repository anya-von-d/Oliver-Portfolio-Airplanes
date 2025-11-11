import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

const courses = [
  'Machine Learning',
  'Programming Methodologies',
  'Programming Abstractions',
  'Computer Organization & Systems',
  'Design and Analysis of Algorithms',
  'Natural Language Processing',
  'Integral Calculus of Several Variables',
  'Differential Equations with Linear Algebra',
  'Fourier Methods',
  'Vector Calculus',
];

const technicalSkills = [
  'Machine Learning',
  'Python',
  'C++',
  'MATLAB',
  'Microsoft Excel',
  'Microsoft Word',
  'Deep Learning',
  'Computer Vision',
  'Medical Imaging',
];

export default function Coursework() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="coursework" className="py-32 px-6 bg-card/30" data-testid="section-coursework">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 border-b-4 border-primary inline-block pb-2" data-testid="heading-coursework">
            Coursework & Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="font-display font-bold text-2xl">Relevant Courses</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <Card
                  key={course}
                  className={`p-4 hover-elevate active-elevate-2 cursor-default transition-all animate-fade-in ${
                    hoveredIndex === index ? 'scale-105 border-primary/50' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  data-testid={`card-course-${index}`}
                >
                  <p className="font-mono text-sm leading-relaxed">{course}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
              </div>
              <h3 className="font-display font-bold text-2xl">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="font-mono px-4 py-2 text-sm border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`badge-tech-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <Card className="mt-8 p-6 border-primary/30">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-display font-semibold text-primary block mb-2">
                  Specialized Expertise
                </span>
                Strong foundation in mathematics and computer science with hands-on experience in building
                production-quality software systems, conducting cutting-edge AI research, and applying
                advanced machine learning techniques to solve real-world problems in healthcare and beyond.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
