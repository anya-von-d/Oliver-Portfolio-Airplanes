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
        <div className="relative bg-gradient-to-b from-[hsl(74,48%,95%)] via-[hsl(90,50%,90%)] via-[hsl(100,45%,88%)] to-[hsl(120,40%,85%)]">
          <Hero />
          <About />
        </div>
        <div className="relative bg-gradient-to-b from-[hsl(120,40%,85%)] to-[hsl(0,0%,100%)]">
          <Education />
        </div>
        <div className="relative bg-[hsl(120,20%,15%)] text-white">
          <Experience />
          <Coursework />
        </div>
      </main>
      <footer className="py-12 px-6 border-t border-white/10 bg-[hsl(120,20%,15%)] text-white" data-testid="footer-main">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 font-mono text-sm">
            © 2025 Anya Von Diessl. Built with React + TypeScript
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a
              href="mailto:anya2025@stanford.edu"
              className="text-white/60 hover:text-primary transition-colors font-mono"
              data-testid="link-email"
            >
              anya2025@stanford.edu
            </a>
            <span className="text-white/20">•</span>
            <span className="text-white/60 font-mono">Palo Alto, CA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
