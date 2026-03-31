import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function FooterVariant1() {
  return (
    <footer className="bg-earth-900 text-earth-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-white">Heilpraxis Bergmann</h3>
            <p className="text-earth-300 text-sm leading-relaxed">
              Ihre Praxis für ganzheitliche Naturheilkunde in Berlin. Mit über 15 Jahren Erfahrung begleite ich Sie
              auf dem Weg zu natürlicher Gesundheit.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Über mich
                </a>
              </li>
              <li>
                <a href="#services" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Behandlungen
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Patienten
                </a>
              </li>
              <li>
                <a href="#blog" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-earth-300 hover:text-sage-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Ressourcen</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Nutzungsbedingungen
                </a>
              </li>
              <li>
                <a href="#" className="text-earth-300 hover:text-sage-400 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Kontakt</h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+49301234567"
                className="flex items-center gap-3 text-earth-300 hover:text-sage-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +49 (0)30 - 123 45 67
              </a>
              <a
                href="mailto:kontakt@drsarahbergmann.de"
                className="flex items-center gap-3 text-earth-300 hover:text-sage-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                kontakt@drsarahbergmann.de
              </a>
              <div className="flex items-start gap-3 text-earth-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <p>
                  Kräuterweg 15
                  <br />
                  10115 Berlin
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-800 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a href="#" className="text-earth-300 hover:text-sage-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-earth-300 hover:text-sage-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-earth-300 hover:text-sage-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-earth-400">
              &copy; {new Date().getFullYear()} Heilpraxis Bergmann. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
