import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Plus } from 'lucide-react';
import aeroacousticImage from '@assets/noise_1767445098926.png';
import aeroelasticImage from '@assets/joinedwing_1767445040512.png';
import flightDynamicsImage from '@assets/lowspeedendurance_1767445209284.png';
import vibrationImage from '@assets/propellervibrationmeasures_1767445140891.png';

const researchProjects = [
  {
    id: 'aeroacoustics',
    title: 'Aero-Acoustic Performance using AI',
    subtitle: 'Stanford Aerospace Design Lab | 2025 - Present',
    description:
      'Developing surrogate modeling frameworks to predict and optimize aerodynamic performance and far-field acoustic propagation for advanced aircraft configurations. This work couples high-fidelity unsteady aerodynamic simulations with machine-learning-based surrogates, enabling rapid aero-acoustic design space exploration within gradient-based optimization loops. Emphasis is placed on rotor-wing interaction and the direct integration of acoustic metrics into multidisciplinary aircraft design workflows.',
    image: aeroacousticImage,
  },
  {
    id: 'aeroelastic',
    title: 'Joined-Wing Aeroelastic Analysis',
    subtitle: 'Aircraft Aerodynamics and Design Laboratory | 2023 – 2025',
    description:
      'Developed a coupled aerodynamic-structural analysis framework for joined-wing aircraft configurations, integrating vortex-based aerodynamic models with finite-element structural wingbox representations. Conducted a parametric investigation of aerodynamic performance and load redistribution, informing subsequent multidisciplinary, gradient-based optimization for cruise performance. Results highlighted aerodynamic and structural performance advantages over conventional designs.',
    image: aeroelasticImage,
  },
  {
    id: 'flight-dynamics',
    title: 'Low-Speed Endurance Flight Research',
    subtitle: 'WindBorne Systems | Summer 2022',
    description:
      'Developed aerodynamic and flight-performance analyses for a long-endurance, low-speed aerial platform. Named inventor on a patented wind-shear–based lift and endurance system, led vehicle sizing, mission-level trade studies, manufacturing and flight-test support, with an emphasis on aerodynamic efficiency, stability, and endurance optimization under operational constraints. Developed a simulation environment to test the performance of the system using aerodynamic data.',
    image: flightDynamicsImage,
  },
  {
    id: 'vibration',
    title: 'AIAA Design-Build-Fly',
    subtitle: 'Chief Engineer and Aerodynamics Lead | Stanford Flight Club | 2022-Present',
    description:
      'Leading the aerodynamic and technical development of Stanford\'s AIAA Design-Build-Fly aircraft using a range of CFD and vortex-based analysis tools. Employing custom-scripts implementing vortex lattice methods (VLM), unsteady vortex particle methods (VPM), and RANS-based CFD to predict aerodynamic performance, stability characteristics, and flow-field behavior across the flight envelope. Guiding design iteration and optimization from early conceptual studies through flight-test, integrating simulation results with experimental data while mentoring team members in aerodynamic modeling best practices.',
    image: vibrationImage,
  },
];

export default function Research() {
  const [selectedProject, setSelectedProject] = useState<string>('aeroacoustics');

  const toggleProject = (id: string) => {
    setSelectedProject(selectedProject === id ? '' : id);
  };

  const selected = researchProjects.find(p => p.id === selectedProject);

  return (
    <section id="research" className="relative py-16 px-4 sm:px-6 overflow-hidden" data-testid="section-research">
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl mb-4" data-testid="heading-research">
            <span className="text-primary">&lt;</span><span className="text-foreground">Research</span><span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-4 sm:gap-6">
          <div className="space-y-3 mx-auto md:mx-0 w-full max-w-md md:max-w-none" data-testid="list-research-projects">
            {researchProjects.map((project) => (
              <Button
                key={project.id}
                onClick={() => toggleProject(project.id)}
                variant={selectedProject === project.id ? "default" : "outline"}
                className="w-full justify-between h-auto py-3 sm:py-4 px-4 sm:px-5 text-left"
                data-testid={`button-project-${project.id}`}
              >
                <span className="font-mono text-xs sm:text-sm truncate">
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

          <div className="mx-auto md:mx-0 w-full max-w-md md:max-w-none">
            {selected ? (
              <Card className="p-6 sm:p-8 animate-fade-in" data-testid="card-research-detail">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-2" data-testid="text-project-title">
                  {selected.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-primary mb-4 sm:mb-6" data-testid="text-project-subtitle">
                  {selected.subtitle}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-project-description">
                  {selected.description}
                </p>
                <img 
                  src={selected.image} 
                  alt={selected.title}
                  className="w-full rounded-lg"
                  data-testid="img-research-project"
                />
              </Card>
            ) : (
              <Card className="p-6 sm:p-8 flex items-center justify-center h-48 sm:h-64 bg-muted/30" data-testid="card-research-empty">
                <p className="text-muted-foreground font-mono text-xs sm:text-sm text-center">
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
