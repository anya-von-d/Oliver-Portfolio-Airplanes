import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Coursework from '@/components/Coursework';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navigation />
      <main>
        <div className="relative bg-gradient-to-b from-[hsl(120,35%,85%)] via-[hsl(110,45%,80%)] via-[hsl(100,50%,75%)] to-[hsl(90,55%,70%)]">
          <Hero />
          <About />
        </div>
        <div className="relative bg-gradient-to-b from-[hsl(90,55%,70%)] to-[hsl(0,0%,100%)]">
          <Education />
        </div>
        <div className="relative bg-gradient-to-b from-[hsl(0,0%,100%)] via-[hsl(90,50%,75%)] via-[hsl(100,45%,80%)] to-[hsl(110,40%,82%)]">
          <Experience />
        </div>
        <div className="relative bg-[hsl(120,20%,15%)] text-white">
          <Coursework />
        </div>
        <Contact />
      </main>
      <footer className="py-16 px-6 bg-[hsl(120,20%,12%)] text-white" data-testid="footer-main">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Anya Von Diessl</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Graduate student at Stanford University pursuing AI research with a focus on medical imaging and precision healthcare.
              </p>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-primary/90"
                  data-testid="button-linkedin-footer"
                >
                  LinkedIn
                </Button>
              </a>
            </div>
            
            <div>
              <h4 className="font-mono text-sm font-bold mb-4 text-primary">Location</h4>
              <p className="text-white/70">
                Palo Alto, CA<br />
                United States
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-sm font-bold mb-4 text-primary">Email</h4>
              <a 
                href="mailto:anya2025@stanford.edu" 
                className="text-white/70 hover:text-primary transition-colors"
                data-testid="link-email-footer"
              >
                anya2025@stanford.edu
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 font-mono text-sm">
              © 2025 Anya Von Diessl. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
