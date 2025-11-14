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
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight" data-testid="text-name">
              Anya Von Diessl
            </h1>

            <div className="h-12">
              <p className="font-mono text-xl md:text-2xl text-primary" data-testid="text-role">
                {displayedText}
                <span className={`inline-block w-0.5 h-6 ml-1 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground flex-wrap">
              <span>Stanford University</span>
              <span className="text-primary">•</span>
              <span>MS Computer Science (AI)</span>
              <span className="text-primary">•</span>
              <span>Palo Alto, CA</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
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
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/50 shadow-2xl shadow-primary/20 rounded-none">
                <AvatarImage src={profileImage} alt="Anya Von Diessl" />
                <AvatarFallback className="text-6xl font-display bg-card">AVD</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-primary/10 animate-glow pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
