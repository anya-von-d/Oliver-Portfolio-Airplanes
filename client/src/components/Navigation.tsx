import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Coursework', href: '#coursework' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top bar: logo + hamburger */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled && !isMenuOpen ? 'bg-[#D0CBC7]/60 backdrop-blur-md' : ''
        }`}
        data-testid="nav-main"
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
            className="font-mono font-bold text-xl px-2 py-1 rounded-md relative z-[60]"
            data-testid="link-home"
          >
            <span className={isMenuOpen ? 'text-white' : 'text-primary'}>&lt;OS/&gt;</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-md relative z-[60]"
            data-testid="button-menu-toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#171511]' : 'text-[#171511]'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-500 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark overlay background */}
        <div className="absolute inset-0 bg-[#171511]/95 backdrop-blur-lg" />

        {/* Menu content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-2">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`text-2xl sm:text-3xl font-mono py-3 px-6 rounded-lg transition-all duration-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${
                activeSection === item.href.substring(1)
                  ? 'text-primary'
                  : 'text-white/70 hover:text-white'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : '0ms' }}
              data-testid={`link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
