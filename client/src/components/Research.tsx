import { Card } from '@/components/ui/card';

const researchProjects = [
  {
    title: 'Aeroacoustic Noise Prediction',
    subtitle: 'Stanford Aircraft Design Lab',
    period: '2023 - Present',
    description:
      'Developing methodology using vortex-particle methods and Ffowcs Williams-Hawkings equation to predict aero-acoustic noise profiles for rotor-wing configurations. Implementing computational methods to analyze noise generation mechanisms in urban air mobility vehicles and optimize rotor designs for reduced acoustic signatures.',
  },
  {
    title: 'Joined-Wing Aeroelastic Analysis',
    subtitle: 'Stanford Flight Club',
    period: '2022 - 2024',
    description:
      'Developed simulation environment implementing Vortex Lattice Method (VLM) and Finite Element Analysis (FEA) for aeroelastic study of joined-wing aircraft configurations. Investigated structural coupling effects and developed optimization frameworks for conceptual aircraft design in AIAA Design-Build-Fly competition.',
  },
  {
    title: 'Low-Speed Endurance Flight Research',
    subtitle: 'WindBorne Systems',
    period: 'Summer 2022',
    description:
      'Led CFD optimization of drone design for low-speed endurance flight applications. Programmed simulation environment to test and validate flight characteristics and stability during conceptual design phase. Developed avionics and aircraft controls interface in C++ for autonomous flight operations.',
  },
  {
    title: 'Propeller Vibration Measurement',
    subtitle: 'Joby Aviation',
    period: '2025',
    description:
      'Developing automated scripts for strain gauge network configuration in propeller vibration measurement systems for eVTOL aircraft. Contributing to flutter analysis and envelope expansion testing in support of FAA certification requirements for the Joby S4 2.1a aircraft.',
  },
];

export default function Research() {
  return (
    <section id="research" className="relative pt-16 pb-32 px-6" data-testid="section-research">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative flex items-end mb-12">
          <div className="relative" style={{ width: '350px', height: '80px' }}>
            <svg className="w-full h-full absolute bottom-0" viewBox="0 0 350 80" preserveAspectRatio="none" style={{ display: 'block' }}>
              <path
                d="M 0,60 Q 20,60 35,40 Q 50,20 75,20 L 275,20 Q 300,20 315,40 Q 330,60 350,60 L 350,80 L 0,80 Z"
                fill="hsl(220, 30%, 15%)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pt-6">
              <h2 className="font-mono text-xl md:text-2xl text-white whitespace-nowrap" data-testid="heading-research">
                <span className="text-primary">&lt;</span>Research<span className="text-primary">/&gt;</span>
              </h2>
            </div>
          </div>
          <div className="flex-1 bg-[hsl(220,30%,15%)] h-5"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-research-${index}`}
            >
              <h3 className="font-display font-bold text-xl text-foreground mb-2" data-testid={`text-project-title-${index}`}>
                {project.title}
              </h3>
              <p className="font-mono text-sm text-primary mb-1" data-testid={`text-project-subtitle-${index}`}>
                {project.subtitle}
              </p>
              <p className="font-mono text-xs text-muted-foreground mb-4" data-testid={`text-project-period-${index}`}>
                {project.period}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
