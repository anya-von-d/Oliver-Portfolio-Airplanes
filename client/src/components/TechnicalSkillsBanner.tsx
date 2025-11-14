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
    <div className="relative w-full bg-white py-3 overflow-hidden" data-testid="banner-technical-skills">
      <div className="flex animate-scroll">
        {[...technicalSkills, ...technicalSkills, ...technicalSkills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3 px-4 py-2 rounded-lg border-2 border-primary/20 bg-background text-foreground font-mono text-sm whitespace-nowrap"
            data-testid={`technical-skill-${skill.toLowerCase().replace(/\s+/g, '-')}-${index}`}
          >
            {skill}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
