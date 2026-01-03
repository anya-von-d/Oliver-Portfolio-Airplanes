import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Plus } from 'lucide-react';
import aeroacousticImage from '@assets/generated_images/Aeroacoustic_noise_prediction_visualization_ead306d8.png';
import aeroelasticImage from '@assets/joinedwing_1767445040512.png';
import flightDynamicsImage from '@assets/generated_images/Low-speed_flight_CFD_analysis_cf0c04f9.png';
import vibrationImage from '@assets/generated_images/Propeller_vibration_measurement_system_57d4a3e0.png';

const researchProjects = [
  {
    id: 'aeroacoustics',
    title: 'Aeroacoustic Noise Prediction',
    subtitle: 'Stanford Aircraft Design Lab | 2023 - Present',
    description:
      'Developing methodology using vortex-particle methods and Ffowcs Williams-Hawkings equation to predict aero-acoustic noise profiles for rotor-wing configurations. Implementing computational methods to analyze noise generation mechanisms in urban air mobility vehicles and optimize rotor designs for reduced acoustic signatures.',
    image: aeroacousticImage,
  },
  {
    id: 'aeroelastic',
    title: 'Joined-Wing Aeroelastic Analysis',
    subtitle: 'Stanford Flight Club | 2022 - 2024',
    description:
      'Developed simulation environment implementing Vortex Lattice Method (VLM) and Finite Element Analysis (FEA) for aeroelastic study of joined-wing aircraft configurations. Investigated structural coupling effects and developed optimization frameworks for conceptual aircraft design in AIAA Design-Build-Fly competition.',
    image: aeroelasticImage,
  },
  {
    id: 'flight-dynamics',
    title: 'Low-Speed Endurance Flight Research',
    subtitle: 'WindBorne Systems | Summer 2022',
    description:
      'Led CFD optimization of drone design for low-speed endurance flight applications. Programmed simulation environment to test and validate flight characteristics and stability during conceptual design phase. Developed avionics and aircraft controls interface in C++ for autonomous flight operations.',
    image: flightDynamicsImage,
  },
  {
    id: 'vibration',
    title: 'Propeller Vibration Measurement',
    subtitle: 'Joby Aviation | 2025',
    description:
      'Developing automated scripts for strain gauge network configuration in propeller vibration measurement systems for eVTOL aircraft. Contributing to flutter analysis and envelope expansion testing in support of FAA certification requirements for the Joby S4 2.1a aircraft.',
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
