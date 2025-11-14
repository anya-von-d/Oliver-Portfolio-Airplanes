export default function SkillsBanner() {
  const skills = [
    "CFD Analysis",
    "MATLAB",
    "Python",
    "C++",
    "Aerodynamics",
    "Flight Dynamics",
    "CAD Design",
    "Simulink",
    "Ansys",
    "SolidWorks"
  ];

  return (
    <div className="relative w-full bg-white py-8 overflow-hidden" data-testid="banner-skills">
      <div className="flex animate-scroll">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3 px-6 py-3 rounded-lg border-2 border-primary/20 bg-background text-foreground font-mono whitespace-nowrap"
            data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}-${index}`}
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
