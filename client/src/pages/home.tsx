import Navigation from '@/components/Navigation';
import AirplaneScene from '@/components/AirplaneScene';
import Hero from '@/components/Hero';
import SkillsBanner from '@/components/SkillsBanner';
import About from '@/components/About';
import Education from '@/components/Education';
import Research from '@/components/Research';
import TechnicalSkillsBanner from '@/components/TechnicalSkillsBanner';
import Experience from '@/components/Experience';
import Coursework from '@/components/Coursework';
import CallToActionBanner from '@/components/CallToActionBanner';
import Contact from '@/components/Contact';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="loading">
        <p>Loading...</p>
      </div>

      <AirplaneScene />
      <Navigation />

      <svg className="blueprint-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <line id="line-length" x1="200" y1="540" x2="1720" y2="540" />
        <line id="line-wingspan" x1="960" y1="100" x2="960" y2="980" />
        <circle id="circle-phalange" cx="960" cy="540" r="200" />
      </svg>

      <div className="scroll-cta">Scroll to explore</div>

      <div className="content">
        <div className="trigger"></div>

        <div className="section hero-sky w-full min-w-full">
          <div className="hero-cloud hero-cloud-1"></div>
          <div className="hero-cloud hero-cloud-2"></div>
          <div className="hero-cloud hero-cloud-3"></div>
          <Hero />
        </div>

        <SkillsBanner />

        <div className="ground-container section section-beige">
          <div className="clouds"></div>
          <div className="ground"></div>
          <div className="relative z-10">
            <About />
          </div>
        </div>

        <div className="blueprint">
          <div className="section length">
            <Education />
          </div>
          <div className="section wingspan">
            <Research />
          </div>
        </div>

        <TechnicalSkillsBanner />

        <div className="section section-cream phalange">
          <Experience />
        </div>

        <div className="section section-light">
          <Coursework />
        </div>

        <CallToActionBanner />

        <div className="sunset">
          <div className="section">
            <Contact />
          </div>
        </div>
      </div>

      <footer className="py-16 px-4 sm:px-6 bg-[#1A1A1A] text-white overflow-x-hidden" data-testid="footer-main">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Oliver Szavuj</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Graduate student at Stanford University pursuing aerospace engineering with a focus on aircraft design, aerodynamics, and flight test engineering.
              </p>
              <a
                href="https://www.linkedin.com/in/oliverszavuj/"
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

            <div className="text-center md:text-left">
              <h4 className="font-mono text-sm font-bold mb-4 text-primary">Location</h4>
              <p className="text-white/70">
                Stanford, CA<br />
                United States
              </p>
            </div>

            <div className="text-center md:text-left">
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
              &copy; 2026 Oliver Szavuj. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
