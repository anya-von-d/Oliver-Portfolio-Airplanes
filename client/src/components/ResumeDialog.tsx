import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ResumeDialog({ open, onOpenChange }: ResumeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]" data-testid="dialog-resume">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Iosif-Oliver Szavuj - Resume</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-100px)] pr-4">
          <div className="space-y-6 font-mono text-sm">
            <div className="text-center space-y-1">
              <h1 className="font-display font-bold text-2xl">IOSIF-OLIVER SZAVUJ</h1>
              <p className="text-muted-foreground">308 Princeton Rd, Stanford, CA • +1 650 229 9002</p>
              <p className="text-primary">oliveris@stanford.edu • LinkedIn</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-primary mb-2">Education</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-bold">Stanford University</span>
                  <span>Stanford CA, USA</span>
                </div>
                <div className="flex justify-between">
                  <span>MS Aeronautical and Astronautical Engineering – 4.06 GPA</span>
                  <span>2026</span>
                </div>
                <div className="flex justify-between">
                  <span>BS Aeronautical and Astronautical Engineering, Minor in Computer Science – 4.01 GPA</span>
                  <span>2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Stanford Flight Club President, AIAA DBF Chief Engineer, TA for AA146A/B – Aircraft Design (Capstone), SSI Lead</li>
                  <li>Relevant Coursework – Applied Aerodynamics, Intermediate Fluid Dynamics, Flight Mechanics & Controls, Aircraft Design, Feedback Control Design, Atmospheric Flight, Space Flight, Lightweight Structures Design, Programming Abstractions, Robotics and Autonomous Systems, Operations of Aerospace Systems, Engineering of Systems, Aerodynamics for Racecars.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-primary mb-2">Honors, Awards and Achievements</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                <li>Stanford Tau Beta Pi Engineering Honor Society (2023)</li>
                <li>Stanford Hoover Institute Distinguished Writer Award for research into the Soviet Space Program (2023)</li>
                <li>Member of the Romanian National Olympics Robotics Team (2018)</li>
                <li>Excellence Award in Robotics from the Romanian Embassy in Washington DC (2018)</li>
                <li>Recognized by the President of Romania for Robotics Achievements (2018)</li>
                <li>Team member Autovortex Club, Romanian National FTC Robotics team (2015 to 2018)</li>
                <li>Created a home-built drone to deliver medicine over short distances in urban areas (2018)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-primary mb-2">Research Academic Work</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li><span className="font-bold text-foreground">Stanford Flight Club (2022 – Present)</span> – Club President and Aerodynamics Lead for the AIAA Design-Build-Fly competition team, focusing on conceptual aircraft design and subsequent aerodynamic analysis, stability analysis and optimization.</li>
                <li><span className="font-bold text-foreground">Aircraft Aerodynamics and Design Laboratory (2024 – 2025)</span> – Developed a simulation environment implementing a VLM and FEA for the aeroelastic study of joined-wing aircraft configurations to generate optimized designs for cruise performance.</li>
                <li><span className="font-bold text-foreground">Aircraft Design Laboratory (2025 – Present)</span> – Developing a methodology to use vortex-particle methods and FW-H to feed in a LLM and predict aero-acoustic noise profile for rotor-wing configurations.</li>
                <li><span className="font-bold text-foreground">Private Pilot License (2018 - 2020)</span> – completed coursework; piloted Cessna 182/172, Kodiak 100/900 and IAR-46 aircraft.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-primary mb-2">Professional Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between font-bold">
                    <span>Joby Aviation – Flight Test Engineering Intern</span>
                    <span>Jun 2025 – Present</span>
                  </div>
                  <p className="text-muted-foreground mb-1">Santa Cruz/Marina, CA</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Authoring and executing flight test plans for flutter and envelope expansion in support of FAA certification of the Joby S4 2.1a</li>
                    <li>Writing and validating automated scripts for strain gauge network configuration in propeller vibration measurement systems.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold">
                    <span>Gulfstream Aerospace Corporation – Flight Dynamics/Control Law Intern</span>
                    <span>Jun 2024 – Sep 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-1">Savannah, GA</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Developed code in conjunction with Simulink harnesses to validate G400 linear CLAW models, delivered TFs and SS matrices.</li>
                    <li>Continuously improved and added functionalities to support scripts used for CLAW analyses, led meetings to share updates.</li>
                    <li>Generated and evaluated data for the G400 Pitch AP and Alternate Mode Linear Analysis Reports, wrote associated reports.</li>
                    <li>Produced and compiled G400 Alternate and Normal Mode roll mixture scheduling data for the Loads delivery.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold">
                    <span>Daher-Kodiak Aircraft Company – Aircraft Engineering Intern</span>
                    <span>Aug 2023 – Sep 2023</span>
                  </div>
                  <p className="text-muted-foreground mb-1">Sandpoint, ID</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Led the CAD process, material selection and validation process of a fire test lab fixture used to evaluate aircraft materials under 60 Hz vibration, 2000° F flame and 1.5 bar negative pressure for FAA certification, allowing for in-house testing, reducing costs.</li>
                    <li>Assisted with identifying sources of vibration on flight-test airframes. Through aerodynamics analysis, presented engineering solutions for vibrations observed in the landing gear strut assembly and anti-icing panels for the Kodiak-900.</li>
                    <li>Led engineering and integration of a new charger on the Kodiak-100 for EASA certification, implemented in European deliveries.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold">
                    <span>DroneUp – Aerospace Innovations Intern</span>
                    <span>Jun 2023 – Jul 2023</span>
                  </div>
                  <p className="text-muted-foreground mb-1">Virginia Beach, VA</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Led the development of a Hardware-in-the-Loop Simulator to test drone hardware solutions in a custom-coded environment embedding the native Auterion suite for accelerated testing in zero-trust conditions, reducing hardware downtime post-crash.</li>
                    <li>Developed structural risk mitigation solutions to improve the reliability of parachute deployment in abnormal flight conditions.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold">
                    <span>WindBorne Systems – Aerospace Engineering Intern</span>
                    <span>Jun 2022 - Aug 2022</span>
                  </div>
                  <p className="text-muted-foreground mb-1">Mountain View, CA</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Led the CAD, development, and CFD optimization of a drone built for low-speed endurance flight. Programmed the associated avionics and aircraft controls interface in C++. Iteratively improved the design following manufacturing feedback, reducing weight.</li>
                    <li>Programmed a simulation environment to test and validate the drone's flight characteristics and stability during conceptual design.</li>
                    <li>Engineered in-house systems and scientific equipment for high-altitude balloon research.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between font-bold">
                    <span>Romanian InSpace Engineering – Avionics Intern</span>
                    <span>Jul - Aug 2018, Jul - Aug 2019, Oct 2020 - Mar 2021</span>
                  </div>
                  <p className="text-muted-foreground mb-1">Bucharest, Romania</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Created a Python Kalman Filter to improve the location accuracy of in-house rockets, launched high altitude balloons to test.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg text-primary mb-2">Skills</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                <li><span className="font-bold text-foreground">Software Experience:</span> CFD – Luminary, XFOIL, Ansys, AERO-F, SUAVE. CAD – Siemens NX, Fusion360, Catia, SolidWorks.</li>
                <li><span className="font-bold text-foreground">Programming Languages:</span> MATLAB, Java, Python, C++, Simulink, Latex.</li>
                <li><span className="font-bold text-foreground">Hobbies:</span> Piloting, Formula 1, Flight Simulation, Conceptual Aircraft Design, Marathon Running, Sailing, RC Aircraft.</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
