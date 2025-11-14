import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Plus } from 'lucide-react';

const researchProjects = [
  {
    id: 'aeroacoustics',
    title: 'Aeroacoustic Noise Prediction',
    subtitle: 'Stanford Aircraft Design Lab | 2023 - Present',
    description:
      'Developing methodology using vortex-particle methods and Ffowcs Williams-Hawkings equation to predict aero-acoustic noise profiles for rotor-wing configurations. Implementing computational methods to analyze noise generation mechanisms in urban air mobility vehicles and optimize rotor designs for reduced acoustic signatures.',
  },
  {
    id: 'aeroelastic',
    title: 'Joined-Wing Aeroelastic Analysis',
    subtitle: 'Stanford Flight Club | 2022 - 2024',
    description:
      'Developed simulation environment implementing Vortex Lattice Method (VLM) and Finite Element Analysis (FEA) for aeroelastic study of joined-wing aircraft configurations. Investigated structural coupling effects and developed optimization frameworks for conceptual aircraft design in AIAA Design-Build-Fly competition.',
  },
  {
    id: 'flight-dynamics',
    title: 'Low-Speed Endurance Flight Research',
    subtitle: 'WindBorne Systems | Summer 2022',
    description:
      'Led CFD optimization of drone design for low-speed endurance flight applications. Programmed simulation environment to test and validate flight characteristics and stability during conceptual design phase. Developed avionics and aircraft controls interface in C++ for autonomous flight operations.',
  },
  {
    id: 'vibration',
    title: 'Propeller Vibration Measurement',
    subtitle: 'Joby Aviation | 2025',
    description:
      'Developing automated scripts for strain gauge network configuration in propeller vibration measurement systems for eVTOL aircraft. Contributing to flutter analysis and envelope expansion testing in support of FAA certification requirements for the Joby S4 2.1a aircraft.',
  },
];

export default function Research() {
  const [selectedProject, setSelectedProject] = useState<string>('aeroacoustics');

  const toggleProject = (id: string) => {
    setSelectedProject(selectedProject === id ? '' : id);
  };

  const selected = researchProjects.find(p => p.id === selectedProject);

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

        <div className="grid md:grid-cols-[300px_1fr] gap-6">
          <div className="space-y-3" data-testid="list-research-projects">
            {researchProjects.map((project) => (
              <Button
                key={project.id}
                onClick={() => toggleProject(project.id)}
                variant={selectedProject === project.id ? "default" : "outline"}
                className="w-full justify-between h-auto py-4 px-5 text-left"
                data-testid={`button-project-${project.id}`}
              >
                <span className="font-mono text-sm truncate">
                  {project.title}
                </span>
                {selectedProject === project.id ? (
                  <X className="w-4 h-4 flex-shrink-0 ml-2" />
                ) : (
                  <Plus className="w-4 h-4 flex-shrink-0 ml-2" />
                )}
              </Button>
            ))}
          </div>

          <div>
            {selected ? (
              <Card className="p-8 animate-fade-in" data-testid="card-research-detail">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2" data-testid="text-project-title">
                  {selected.title}
                </h3>
                <p className="font-mono text-sm text-primary mb-6" data-testid="text-project-subtitle">
                  {selected.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-project-description">
                  {selected.description}
                </p>
              </Card>
            ) : (
              <Card className="p-8 flex items-center justify-center h-64 bg-muted/30" data-testid="card-research-empty">
                <p className="text-muted-foreground font-mono text-sm">
                  Select a research project to view details
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
