import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Flight Test Engineering Intern',
    organization: 'Joby Aviation',
    location: 'Santa Cruz/Marina, CA',
    period: 'June 2025 - Present',
    description:
      'Authoring and executing flight test plans for flutter and envelope expansion in support of FAA certification of the Joby S4 2.1a eVTOL aircraft. Writing and validating automated scripts for strain gauge network configuration in propeller vibration measurement systems.',
    tags: ['Flight Testing', 'FAA Certification', 'eVTOL', 'Vibration Analysis'],
  },
  {
    title: 'Flight Dynamics/Control Law Intern',
    organization: 'Gulfstream Aerospace Corporation',
    location: 'Savannah, GA',
    period: 'June 2024 - September 2024',
    description:
      'Developed code in conjunction with Simulink harnesses to validate G400 linear control law models, delivering transfer functions and state-space matrices. Continuously improved and added functionalities to support scripts used for control law analyses. Generated and evaluated data for the G400 Pitch Autopilot and Alternate Mode Linear Analysis Reports. Produced and compiled G400 Alternate and Normal Mode roll mixture scheduling data for loads delivery.',
    tags: ['Flight Controls', 'Simulink', 'MATLAB', 'Control Systems'],
  },
  {
    title: 'Aircraft Engineering Intern',
    organization: 'Daher-Kodiak Aircraft Company',
    location: 'Sandpoint, ID',
    period: 'August 2023 - September 2023',
    description:
      'Led the CAD process, material selection, and validation for a fire test lab fixture used to evaluate aircraft materials under 60 Hz vibration, 2000°F flame, and 1.5 bar negative pressure for FAA certification. Assisted with identifying sources of vibration on flight-test airframes through aerodynamics analysis, presenting engineering solutions for landing gear strut and anti-icing panel vibrations. Led engineering and integration of a new charger on the Kodiak-100 for EASA certification.',
    tags: ['CAD Design', 'Materials Testing', 'Aerodynamics', 'Certification'],
  },
  {
    title: 'Aerospace Innovations Intern',
    organization: 'DroneUp',
    location: 'Virginia Beach, VA',
    period: 'June 2023 - July 2023',
    description:
      'Led the development of a Hardware-in-the-Loop Simulator to test drone hardware solutions in a custom-coded environment embedding the native Auterion suite for accelerated testing in zero-trust conditions, reducing hardware downtime post-crash. Developed structural risk mitigation solutions to improve the reliability of parachute deployment in abnormal flight conditions.',
    tags: ['Drone Systems', 'HITL Simulation', 'Auterion', 'Safety Systems'],
  },
  {
    title: 'Aerospace Engineering Intern',
    organization: 'WindBorne Systems',
    location: 'Mountain View, CA',
    period: 'June 2022 - August 2022',
    description:
      'Led the CAD, development, and CFD optimization of a drone built for low-speed endurance flight. Programmed the associated avionics and aircraft controls interface in C++. Iteratively improved the design following manufacturing feedback, reducing weight. Programmed a simulation environment to test and validate flight characteristics and stability during conceptual design.',
    tags: ['CFD', 'C++', 'Avionics', 'Aircraft Design'],
  },
  {
    title: 'Aerodynamics Research Lead',
    organization: 'Stanford Flight Club & Aircraft Design Lab',
    location: 'Stanford, CA',
    period: '2022 - Present',
    description:
      'Club President and Aerodynamics Lead for AIAA Design-Build-Fly competition team, focusing on conceptual aircraft design, aerodynamic analysis, and stability optimization. Developed simulation environment implementing VLM and FEA for aeroelastic study of joined-wing aircraft configurations. Developing methodology using vortex-particle methods and Ffowcs Williams-Hawkings equation to predict aero-acoustic noise profiles for rotor-wing configurations.',
    tags: ['Aerodynamics', 'VLM', 'FEA', 'Aeroacoustics'],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative pt-16 pb-32 px-4 sm:px-6 overflow-hidden" data-testid="section-experience">
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="relative flex items-end">
          <div className="relative" style={{ width: '350px', height: '80px' }}>
            <svg className="w-full h-full absolute bottom-0" viewBox="0 0 350 80" preserveAspectRatio="none" style={{ display: 'block' }}>
              <path
                d="M 0,60 Q 20,60 35,40 Q 50,20 75,20 L 275,20 Q 300,20 315,40 Q 330,60 350,60 L 350,80 L 0,80 Z"
                fill="#623A17"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pt-6">
              <h2 className="font-mono text-xl md:text-2xl text-white whitespace-nowrap" data-testid="heading-experience">
                <span className="text-primary">&lt;</span>Experience<span className="text-primary">/&gt;</span>
              </h2>
            </div>
          </div>
          <div className="flex-1 bg-[#623A17] h-5"></div>
        </div>

        <div className="bg-[#623A17] p-4 sm:p-8 md:p-12">
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 bg-white/5 hover-elevate active-elevate-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-experience-${index}`}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-4 sm:p-6 text-left transition-all"
                  data-testid={`button-expand-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-mono text-base sm:text-lg md:text-xl mb-3 text-white" data-testid={`text-title-${index}`}>
                        <span className="text-primary">&lt;</span>
                        {exp.title.toUpperCase()}
                        <span className="text-primary">/&gt;</span>
                      </h3>
                      <p className="text-sm sm:text-base text-white/70 mb-2" data-testid={`text-org-${index}`}>
                        {exp.organization}
                      </p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-mono">
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/60" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-accordion-down" data-testid={`content-experience-${index}`}>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="font-mono text-xs bg-white/10 text-white border-white/20"
                            data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
