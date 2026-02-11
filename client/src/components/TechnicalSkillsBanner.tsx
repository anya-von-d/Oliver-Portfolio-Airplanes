export default function TechnicalSkillsBanner() {
  const technicalSkills = [
    "MATLAB",
    "Python",
    "C++",
    "Java",
    "Simulink",
    "Ansys",
    "SolidWorks",
    "Siemens NX",
    "CATIA",
    "XFOIL",
    "LaTeX"
  ];

  return (
    <div className="relative w-full bg-white/60 py-3 overflow-hidden" data-testid="banner-technical-skills">
      <div className="flex animate-scroll-ticker">
        {[...technicalSkills, ...technicalSkills, ...technicalSkills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3 px-4 py-2 rounded-lg border-2 border-primary/20 bg-[#D0CBC7]/50 text-[#171511] font-mono text-sm whitespace-nowrap"
            data-testid={`technical-skill-${skill.toLowerCase().replace(/\s+/g, '-')}-${index}`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
