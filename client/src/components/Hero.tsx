import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, FileText, Download } from 'lucide-react';
import CloudsBackground from '@/components/CloudsBackground';
import ResumeDialog from '@/components/ResumeDialog';
import resumePdf from '@assets/Oliver Szavuj Resume_1763106094472.pdf';
import profileImageSrc from '@assets/generated_images/Professional_aerospace_engineer_headshot_c1b3f78f.png';

const profileImage = profileImageSrc;

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Aerospace Engineer & Researcher';
  const [showCursor, setShowCursor] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

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

            <div className="flex flex-col items-center md:items-start gap-3 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gap-2 w-full sm:w-auto"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setResumeOpen(true)}
                  className="gap-2 w-full sm:w-auto"
                  data-testid="button-resume"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-download-resume"
                >
                  <a
                    href={resumePdf}
                    download="Oliver_Szavuj_Resume.pdf"
                    className="gap-2 w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>

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
                  className="gap-2 w-full sm:w-auto"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Avatar className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-primary/50 shadow-2xl shadow-primary/20 rounded-none">
                <AvatarImage src={profileImage} alt="Oliver Szavuj" />
                <AvatarFallback className="text-6xl font-display bg-card">OS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      <ResumeDialog open={resumeOpen} onOpenChange={setResumeOpen} />
    </section>
  );
}
