import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, FileText, ExternalLink, FlaskConical } from 'lucide-react';
import CloudsBackground from '@/components/CloudsBackground';
import profileImage from '@assets/Screenshot_2026-01-03_at_10.15.23_AM_1767428130615.png';
import profileImage2 from '@assets/Screenshot_2026-01-03_at_10.17.38_AM_1767428264725.png';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Aerospace Engineer & Researcher';
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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResearch = () => {
    const researchSection = document.getElementById('research');
    if (researchSection) {
      researchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden" data-testid="section-hero">
      <CloudsBackground />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight" data-testid="text-name">
              Oliver Szavuj
            </h1>

            <div className="h-12">
              <p className="font-mono text-lg sm:text-xl md:text-2xl text-primary" data-testid="text-role">
                {displayedText}
                <span className={`inline-block w-0.5 h-6 ml-1 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-xs sm:text-sm text-muted-foreground flex-wrap">
              <span>Stanford University</span>
              <span className="text-primary">•</span>
              <span>MS Aeronautics & Astronautics</span>
              <span className="text-primary">•</span>
              <span>Stanford, CA</span>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 pt-4 w-full sm:w-auto sm:max-w-md">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gap-2 w-full"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              
              <div className="grid grid-cols-2 gap-3 w-full">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-resume"
                >
                  <a
                    href="https://drive.google.com/file/d/1Ba2PgvDpsNK5xRxR4i3Y2HMTwlhbkB67/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    View Resume
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-portfolio"
                >
                  <a
                    href="https://drive.google.com/file/d/1stEKSm_UL1dYMgG4_Z50YwDeRoLlRC1F/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Engineering Portfolio
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-linkedin"
                >
                  <a
                    href="https://www.linkedin.com/in/oliverszavuj/"
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
                  onClick={scrollToResearch}
                  className="gap-2"
                  data-testid="button-research"
                >
                  <FlaskConical className="w-4 h-4" />
                  Research
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end pb-10 sm:pb-8 md:pb-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]">
              <Avatar className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-primary/50 shadow-2xl shadow-primary/20 rounded-none">
                <AvatarImage src={profileImage} alt="Oliver Szavuj" />
                <AvatarFallback className="text-6xl font-display bg-card">OS</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 left-0 w-44 h-18 sm:w-52 sm:h-20 md:w-64 md:h-24 border-3 border-primary/50 shadow-xl shadow-primary/20 z-10 overflow-hidden bg-card">
                <img src={profileImage2} alt="Aircraft" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
