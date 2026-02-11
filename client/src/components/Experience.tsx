import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';
import jobyLogo from '@assets/1_1767427882546.png';
import gulfstreamLogo from '@assets/2_1767427907738.png';
import daherLogo from '@assets/3_1767427934755.png';
import droneUpLogo from '@assets/4_1767427956941.png';
import windborneLogo from '@assets/5_1767427971609.png';
import stanfordLogo from '@assets/6_1767427983374.png';

const experiences = [
  {
    title: 'Flight Test Engineering Intern',
    organization: 'Joby Aviation',
    location: 'Santa Cruz, CA',
    period: 'June 2025 - Present',
    description:
      'Developed flutter and envelope-expansion test plans for the Joby S4-2.1A to verify simulation data, directly supporting certification efforts. Written and prepared load-validation and on-wheel test plans; post-processed flight data; and assessed aeroelastic and flight-dynamics behavior to inform real-time test decisions. Verified control law schedules using simulation testing. Built and validated automated scripts for configuring strain-gauge networks in propeller-vibration measurement systems.',
    tags: ['Flight Testing', 'FAA Certification', 'eVTOL', 'Vibration Analysis'],
    logo: jobyLogo,
  },
  {
    title: 'Course Assistant: AA146A/B \u2013 Aircraft Design',
    organization: 'Stanford University',
    location: 'Stanford, CA',
    period: 'September 2024 - March 2025',
    description:
      'As the sole TA, I developed a suite of scripts that integrated flight dynamics and control theory, providing students with course material to aid them in designing a dynamic-soaring vehicle. I also guided students to refine their decision-making skills through practical application.',
    tags: ['Teaching', 'Flight Dynamics', 'Control Theory', 'Aircraft Design'],
    logo: stanfordLogo,
  },
  {
    title: 'Flight Dynamics/Control Law Intern',
    organization: 'Gulfstream Aerospace Corporation',
    location: 'Savannah, GA',
    period: 'June 2024 - September 2024',
    description:
      'Developed code as well as SIMULINK models to validate G400 CLAW linear models for first flight - delivered associated transfer functions and state-space matrices. Improved the analysis scripts by implementing a model to identify the aircraft\'s current flight envelope based on flight conditions and key operational parameters. Wrote the G400 Pitch AP and Alternate Mode Linear Analysis Reports for the FAA. Also produced roll mixture scheduling data for the Alternate Mode flight envelope.',
    tags: ['Flight Controls', 'Simulink', 'MATLAB', 'Control Systems'],
    logo: gulfstreamLogo,
  },
  {
    title: 'Aircraft Engineering Intern',
    organization: 'Daher\u2013Kodiak Aircraft Company',
    location: 'Sandpoint, ID',
    period: 'August 2023 - September 2023',
    description:
      'Used CAD to develop a fire-lab fixture for certifying coupons under 60-Hz vibration, 2000 F flame, and pressure. Subsequently, I created the component schematics and communicated with suppliers to have articles manufactured. Additionally, I assisted with aerodynamic analysis to reduce vibrations of the landing strut assembly\'s anti-icing panels for the Kodiak-900. Finally, I worked on validating the latest update for the Garmin NXi G1000 flight deck and integrated the software into the production line.',
    tags: ['CAD Design', 'Aerodynamics', 'Certification', 'Avionics'],
    logo: daherLogo,
  },
  {
    title: 'Aerospace Innovations Intern',
    organization: 'DroneUp',
    location: 'Virginia Beach, VA',
    period: 'June 2023 - July 2023',
    description:
      'Developed a Hardware-in-the-Loop modular test bench for the Watts PRISM Sky 3 drone. The test bench I created determines the operational status of individual components in zero-trust environments after drone crashes. I used the open-source JMAVSim simulation environment to custom-code a solution that utilizes the PX4 suite to enable integration for simulated flights within the company\'s native Auterion Mission Control software. Additionally, I developed risk-mitigation techniques for the parachute recovery system.',
    tags: ['Drone Systems', 'HITL Simulation', 'Auterion', 'PX4'],
    logo: droneUpLogo,
  },
  {
    title: 'Aerospace Engineering Intern',
    organization: 'WindBorne Systems',
    location: 'Mountain View, CA',
    period: 'June 2022 - August 2022',
    description:
      <>Conceptually designed and manufactured an autonomous drone optimized for flying at low airspeeds. Listed as inventor on <a href="https://data.uspto.gov/patent-file-wrapper/search/details/18780159/assignments" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">patent</a>. Using the CFD data I accumulated based on my design's sizing, I developed a parametrized simulation environment to validate the drone's flight properties. I generated the individual components for the aircraft's assembly in CAD. I iteratively improved the design based on manufacturing feedback to converge on an optimal solution.</>,
    tags: ['CFD', 'CAD', 'Patent', 'Aircraft Design'],
    logo: windborneLogo,
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-16 px-4 sm:px-6 overflow-hidden" data-testid="section-experience">
      <div className="relative max-w-6xl mx-auto w-full">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl mb-4 text-[#171511]" data-testid="heading-experience">
            <span className="text-primary">&lt;</span>Experience<span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white/40 hover-elevate active-elevate-2 animate-fade-in border-[#b8b3ae]"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-experience-${index}`}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-4 sm:p-6 text-left transition-all"
                data-testid={`button-expand-${index}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.organization} logo`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md bg-white/90 shrink-0"
                      data-testid={`img-logo-${index}`}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-mono text-base sm:text-lg md:text-xl mb-3 text-[#171511]" data-testid={`text-title-${index}`}>
                        <span className="text-primary">&lt;</span>
                        {exp.title.toUpperCase()}
                        <span className="text-primary">/&gt;</span>
                      </h3>
                      <p className="text-sm sm:text-base text-[#171511]/70 mb-2" data-testid={`text-org-${index}`}>
                        {exp.organization}
                      </p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-mono">
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#171511]/40" />
                    )}
                  </div>
                </div>
              </button>

              {expandedIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-accordion-down" data-testid={`content-experience-${index}`}>
                  <div className="pt-4 border-t border-[#b8b3ae]">
                    <p className="text-sm sm:text-base text-[#171511]/70 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-mono text-xs bg-primary/10 text-primary border-primary/20"
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
    </section>
  );
}
