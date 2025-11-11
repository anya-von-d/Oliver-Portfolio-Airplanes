import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Coursework from '@/components/Coursework';

export default function Home() {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Coursework />
      </main>
      <footer className="py-12 px-6 border-t border-border" data-testid="footer-main">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2025 Anya Von Diessl. Built with React + TypeScript
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a
              href="mailto:anya2025@stanford.edu"
              className="text-muted-foreground hover:text-primary transition-colors font-mono"
              data-testid="link-email"
            >
              anya2025@stanford.edu
            </a>
            <span className="text-border">•</span>
            <span className="text-muted-foreground font-mono">Palo Alto, CA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
