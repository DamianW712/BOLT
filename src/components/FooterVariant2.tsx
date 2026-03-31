import { Phone, Mail } from 'lucide-react';

export default function FooterVariant2() {
  return (
    <footer className="bg-white border-t-2 border-sage-300 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold text-earth-900 mb-3">Heilpraxis Dr. Bergmann</h3>
          <p className="text-earth-700 max-w-2xl mx-auto mb-6">
            Ganzheitliche Naturheilkunde für Ihre Gesundheit und Ihr Wohlbefinden.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <a
              href="tel:+49301234567"
              className="flex items-center gap-2 text-sage-600 hover:text-sage-700 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              +49 (0)30 - 123 45 67
            </a>
            <a
              href="mailto:kontakt@drsarahbergmann.de"
              className="flex items-center gap-2 text-sage-600 hover:text-sage-700 font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              kontakt@drsarahbergmann.de
            </a>
          </div>
        </div>

        <div className="border-t border-sage-200 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6 text-sm">
            <a href="#" className="text-earth-600 hover:text-sage-600 transition-colors">
              Impressum
            </a>
            <span className="hidden sm:inline text-earth-300">•</span>
            <a href="#" className="text-earth-600 hover:text-sage-600 transition-colors">
              Datenschutz
            </a>
            <span className="hidden sm:inline text-earth-300">•</span>
            <a href="#" className="text-earth-600 hover:text-sage-600 transition-colors">
              Nutzungsbedingungen
            </a>
          </div>

          <p className="text-xs text-earth-500">
            &copy; {new Date().getFullYear()} Heilpraxis Dr. Bergmann. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
