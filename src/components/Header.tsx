import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationLinks = [
    { label: 'Startseite', id: 'home' },
    { label: 'Über mich', id: 'about' },
    { label: 'Behandlungen', id: 'services' },
    { label: 'Patienten', id: 'testimonials' },
    { label: 'Blog', id: 'blog' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Kontakt', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-sage-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center">
            <span className="text-white font-serif text-lg font-bold">H</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-serif font-bold text-earth-900">Dr. Sarah Bergmann</h1>
            <p className="text-xs text-sage-600">Heilpraktikerin</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-earth-800 hover:text-sage-600 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors duration-200 font-medium text-sm"
          >
            Termin buchen
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-earth-800 hover:text-sage-600 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-sage-200 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-earth-800 hover:bg-sage-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 px-4 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-medium text-sm"
            >
              Termin buchen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
