import { Card } from '@/components/ui/card';

const education = [
  {
    abbreviation: 'MS',
    degree: 'Master of Science, Aeronautical and Astronautical Engineering',
    school: 'Stanford University, Stanford, CA',
    date: 'Expected 2026',
    gpa: '4.06 GPA',
    current: true,
  },
  {
    abbreviation: 'BS',
    degree: 'Bachelor of Science, Aeronautical and Astronautical Engineering',
    school: 'Stanford University, Stanford, CA',
    date: '2025',
    gpa: '4.01 GPA',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 bg-[hsl(220,35%,25%)] overflow-hidden" data-testid="section-education">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl mb-4 text-white" data-testid="heading-education">
            <span className="text-primary">&lt;</span>Education<span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 md:p-8 hover-elevate active-elevate-2 transition-all animate-fade-in bg-white/5 border-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-education-${index}`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-2xl md:text-3xl text-primary">
                      {edu.abbreviation}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl text-white mb-2" data-testid={`text-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 mb-1" data-testid={`text-school-${index}`}>
                    {edu.school} | {edu.date}
                  </p>
                  {'gpa' in edu && (
                    <p className="text-primary/80 text-sm font-mono mb-1">
                      {edu.gpa}
                    </p>
                  )}
                  {edu.current && (
                    <div className="mt-3 flex justify-center sm:justify-start">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-mono">
                        <span className="w-2 h-2 rounded-full bg-destructive animate-glow" />
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
