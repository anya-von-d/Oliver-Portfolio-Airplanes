import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
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
        <div className="relative bg-gradient-to-b from-[hsl(210,70%,70%)] via-[hsl(210,60%,80%)] via-[hsl(210,50%,85%)] to-[hsl(210,45%,90%)]">
          <Hero />
          <About />
        </div>
        <div className="relative bg-gradient-to-b from-[hsl(210,45%,90%)] via-[hsl(210,40%,92%)] via-[hsl(210,35%,94%)] to-[hsl(210,30%,96%)]">
          <Research />
        </div>
        <div className="relative bg-gradient-to-b from-[hsl(210,30%,96%)] via-[hsl(210,35%,94%)] via-[hsl(210,40%,92%)] to-[hsl(210,45%,90%)]">
          <Experience />
        </div>
        <div className="relative bg-white">
          <Education />
        </div>
        <div className="relative bg-gradient-to-b from-[hsl(0,0%,100%)] via-[hsl(210,40%,92%)] via-[hsl(210,35%,94%)] to-[hsl(210,30%,96%)]">
          <Coursework />
        </div>
        <Contact />
      </main>
      <footer className="py-16 px-6 bg-[#1A1A1A] text-white" data-testid="footer-main">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Oliver Szavuj</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Graduate student at Stanford University pursuing aerospace engineering with a focus on aircraft design, aerodynamics, and flight test engineering.
              </p>
              <a 
                href="https://www.linkedin.com/in/oliver-szavuj/" 
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
                Stanford, CA<br />
                United States
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-sm font-bold mb-4 text-primary">Email</h4>
              <a 
                href="mailto:oliveris@stanford.edu" 
                className="text-white/70 hover:text-primary transition-colors"
                data-testid="link-email-footer"
              >
                oliveris@stanford.edu
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 font-mono text-sm">
              © 2025 Oliver Szavuj. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
