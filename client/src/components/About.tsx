import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'CFD Analysis',
  'MATLAB',
  'Python',
  'C++',
  'Aerodynamics',
  'Flight Dynamics',
  'CAD Design',
  'Simulink',
  'Ansys',
  'SolidWorks',
];

const focuses = [
  {
    title: 'Aircraft Design',
    description: 'Focused on optimizing novel aircraft configurations, emphasizing aerodynamic performance and multidisciplinary design optimization through gradient-based methods and AI approaches.',
  },
  {
    title: 'Aeroacoustics & Unsteady Aerodynamics',
    description: 'Developing and implementing high-fidelity modeling tools for evaluating the unsteady aerodynamic and aeroacoustic performance of rotor-wing systems and noise-constrained aircraft design.',
  },
  {
    title: 'Flight Test Engineering',
    description: 'Experience in conducting flight-test campaigns for envelope expansion and certification, with a focus on engineering validation, performance quantification, and data-driven decision-making.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 px-4 sm:px-6 bg-primary/20 overflow-hidden" data-testid="section-about">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl mb-4" data-testid="heading-about">
            <span className="text-primary">&lt;</span><span className="text-foreground">About</span><span className="text-primary">/&gt;</span>
          </h2>
        </div>
        
        <div>
          <div className="mb-12">
            <div className="space-y-6 animate-slide-in-left text-center">
              <p className="text-base sm:text-lg leading-relaxed text-foreground max-w-3xl mx-auto">
                Graduate student at Stanford University pursuing a Master's degree in Aeronautical and Astronautical Engineering. Significant research experience within Stanford's Aerospace Design Laboratory and Aircraft Aerodynamics and Design Laboratory, complemented by industry experience at Joby Aviation, Gulfstream Aerospace, and others. Specializing in conceptual aircraft design, aerodynamics, and flight testing, with hands-on experience as a private pilot.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {focuses.map((focus, index) => (
              <Card
                key={focus.title}
                className="p-6 hover-elevate active-elevate-2 transition-all cursor-default animate-fade-in bg-white/80 border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-focus-${focus.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <h3 className="font-display font-bold text-lg sm:text-xl mb-2 text-foreground">{focus.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{focus.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
