import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Database } from 'lucide-react';

const skills = [
  'Machine Learning',
  'Python',
  'C++',
  'MATLAB',
  'Deep Learning',
  'Computer Vision',
  'NLP',
  'Medical Imaging',
  'TypeScript',
  'HTML/CSS',
];

const focuses = [
  {
    icon: Brain,
    title: 'AI Research',
    description: 'Developing contrastive deep learning models and CNN architectures for medical applications',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Building high-performance user interfaces and scalable production-quality features',
  },
  {
    icon: Database,
    title: 'Machine Learning',
    description: 'Applying advanced ML techniques to enhance sequence-to-function predictions',
  },
];

export default function About() {
  return (
    <section id="about" className="relative pt-16 pb-32 px-6" data-testid="section-about">
      
      <div className="relative max-w-6xl mx-auto">
        <div className="relative flex items-end">
          <div className="relative" style={{ width: '300px', height: '80px' }}>
            <svg className="w-full h-full absolute bottom-0" viewBox="0 0 300 80" preserveAspectRatio="none" style={{ display: 'block' }}>
              <path
                d="M 0,60 Q 20,60 35,40 Q 50,20 75,20 L 225,20 Q 250,20 265,40 Q 280,60 300,60 L 300,80 L 0,80 Z"
                fill="hsl(120, 20%, 15%)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pt-6">
              <h2 className="font-mono text-xl md:text-2xl text-white whitespace-nowrap" data-testid="heading-about">
                <span className="text-primary">&lt;</span>About<span className="text-primary">/&gt;</span>
              </h2>
            </div>
          </div>
          <div className="flex-1 bg-[hsl(120,20%,15%)] h-5"></div>
        </div>
        
        <div className="bg-[hsl(120,20%,15%)] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg leading-relaxed text-white/90">
                I'm a graduate student at Stanford University pursuing a Master's in Computer Science with a
                focus on Artificial Intelligence. My work bridges the gap between cutting-edge AI methodologies
                and real-world clinical applications.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                With experience at Google and multiple research positions at Stanford, I specialize in developing
                AI-driven solutions for complex problems in medical imaging, general game playing, and precision
                healthcare.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                I'm passionate about teaching and mentoring, having served as a Teaching Assistant for multiple
                courses and as a Math Department tutor, helping students master complex concepts in computer
                science and mathematics.
              </p>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-sm px-3 py-1 border-primary/40 text-white hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {focuses.map((focus, index) => (
              <Card
                key={focus.title}
                className="p-6 hover-elevate active-elevate-2 transition-all cursor-default animate-fade-in bg-white/5 border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-focus-${focus.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <focus.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-2 text-white">{focus.title}</h3>
                <p className="text-white/70 leading-relaxed">{focus.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
