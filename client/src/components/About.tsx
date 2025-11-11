import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    title: 'AI Research',
    description: 'Developing contrastive deep learning models and CNN architectures for medical applications',
  },
  {
    title: 'Software Engineering',
    description: 'Building high-performance user interfaces and scalable production-quality features',
  },
  {
    title: 'Machine Learning',
    description: 'Applying advanced ML techniques to enhance sequence-to-function predictions',
  },
];

export default function About() {
  return (
    <section id="about" className="relative pt-16 pb-32 px-6 bg-[#35B276]" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl mb-4 text-white" data-testid="heading-about">
            <span className="text-white">&lt;</span>About<span className="text-white">/&gt;</span>
          </h2>
        </div>
        
        <div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg leading-relaxed text-white/95">
                Graduate student at Stanford pursuing a Master's in Computer Science (AI Track). With experience at Google and Stanford research labs, I develop AI-driven solutions for medical imaging, precision healthcare, and general game playing.
              </p>
              <p className="text-lg leading-relaxed text-white/95">
                Passionate about teaching and mentoring as a TA and Math Department tutor, helping students master complex concepts in computer science and mathematics.
              </p>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-sm px-3 py-1 border-white/50 text-white hover:bg-white hover:text-primary transition-colors cursor-default"
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
                className="p-6 hover-elevate active-elevate-2 transition-all cursor-default animate-fade-in bg-white/20 border-white/40"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`card-focus-${focus.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <h3 className="font-display font-bold text-xl mb-2 text-white">{focus.title}</h3>
                <p className="text-white/80 leading-relaxed">{focus.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
