export default function SkillsBanner() {
  const skills = [
    "MATLAB",
    "Python",
    "C++",
    "Java",
    "Simulink",
    "ANSYS Fluent",
    "Luminary Cloud",
    "FUN3D",
    "SU2",
    "OVERFLOW",
    "XFOIL",
    "AVL",
    "FLOWUnsteady",
    "SolidWorks",
    "Fusion 360",
    "Siemens NX",
    "CATIA",
    "LaTeX"
  ];

  return (
    <div className="relative w-full bg-white/60 py-3 overflow-hidden" data-testid="banner-skills">
      <div className="flex animate-scroll-ticker">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3 px-4 py-2 rounded-lg border-2 border-primary/20 bg-[#D0CBC7]/50 text-[#171511] font-mono text-sm whitespace-nowrap"
            data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}-${index}`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
