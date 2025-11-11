import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science',
    major: 'Computer Science (Artificial Intelligence Track)',
    school: 'Stanford University',
    location: 'Stanford, CA',
    date: 'Expected March 2026',
    current: true,
  },
  {
    degree: 'Bachelor of Science',
    major: 'Mathematics',
    school: 'Stanford University',
    location: 'Stanford, CA',
    date: 'June 2025',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-card/30" data-testid="section-education">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 border-b-4 border-primary inline-block pb-2" data-testid="heading-education">
            Education
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                <Card
                  className="md:ml-20 p-8 hover-elevate active-elevate-2 transition-all group"
                  data-testid={`card-education-${index}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="font-display font-bold text-2xl mb-1" data-testid={`text-degree-${index}`}>
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary font-medium mb-1" data-testid={`text-major-${index}`}>
                            {edu.major}
                          </p>
                          <p className="text-muted-foreground" data-testid={`text-school-${index}`}>
                            {edu.school} • {edu.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span data-testid={`text-date-${index}`}>{edu.date}</span>
                        </div>
                      </div>
                      {edu.current && (
                        <div className="mt-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono">
                            <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
                            In Progress
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
