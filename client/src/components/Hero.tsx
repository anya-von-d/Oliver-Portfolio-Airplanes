import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Download } from 'lucide-react';

const profileImage = '/attached_assets/Screenshot 2025-11-11 at 12.08.39 PM_1762891722415.png';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'AI Researcher & Computer Scientist';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToContact = () => {
    window.open('mailto:anya2025@stanford.edu');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20" data-testid="section-hero">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-8 animate-float">
          <Avatar className="w-48 h-48 border-4 border-primary/50 shadow-2xl shadow-primary/20">
            <AvatarImage src={profileImage} alt="Anya Von Diessl" />
            <AvatarFallback className="text-4xl font-display bg-card">AVD</AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-glow pointer-events-none" />
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl mb-4 tracking-tight" data-testid="text-name">
          Anya Von Diessl
        </h1>

        <div className="h-12 mb-6">
          <p className="font-mono text-xl md:text-2xl text-primary" data-testid="text-role">
            {displayedText}
            <span className={`inline-block w-0.5 h-6 ml-1 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 font-mono text-sm text-muted-foreground">
          <span>Stanford University</span>
          <span className="text-primary">•</span>
          <span>MS Computer Science (AI)</span>
          <span className="text-primary">•</span>
          <span>Palo Alto, CA</span>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Graduate student specializing in Machine Learning and AI Research with experience in deep learning,
          computer vision, and medical imaging. Passionate about developing AI-driven solutions for real-world
          clinical applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="gap-2"
            data-testid="button-contact"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            data-testid="button-linkedin"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            data-testid="button-resume"
          >
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>

        <div className="mt-16 flex justify-center gap-12 text-center">
          <div>
            <div className="font-display font-bold text-3xl text-primary">5+</div>
            <div className="font-mono text-sm text-muted-foreground mt-1">Positions</div>
          </div>
          <div>
            <div className="font-display font-bold text-3xl text-primary">10+</div>
            <div className="font-mono text-sm text-muted-foreground mt-1">Courses</div>
          </div>
          <div>
            <div className="font-display font-bold text-3xl text-primary">2</div>
            <div className="font-mono text-sm text-muted-foreground mt-1">Degrees</div>
          </div>
        </div>
      </div>
    </section>
  );
}
