import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function FooterVariant3() {
  return (
    <footer className="bg-gradient-to-b from-sage-900 to-earth-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold mb-4">Heilpraxis Bergmann</h3>
            <p className="text-sage-100 mb-6 leading-relaxed">
              Ihre Anlaufstelle für ganzheitliche Naturheilkunde in Berlin. Begleitet Sie auf Ihrem Weg zu
              natürlicher Gesundheit und dauerhaftem Wohlbefinden.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="text-sage-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-sage-200 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sage-300 text-sm uppercase tracking-wide mb-2">Öffnungszeiten</p>
              <div className="space-y-1 text-white">
                <p>Mo - Fr: 09:00 - 18:00 Uhr</p>
                <p>Sa: 10:00 - 14:00 Uhr</p>
              </div>
            </div>

            <div>
              <p className="text-sage-300 text-sm uppercase tracking-wide mb-2">Kontakt</p>
              <div className="space-y-2">
                <a
                  href="tel:+49301234567"
                  className="flex items-center gap-2 text-white hover:text-sage-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +49 (0)30 - 123 45 67
                </a>
                <div className="flex items-start gap-2 text-white">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>
                    Kräuterweg 15
                    <br />
                    10115 Berlin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sage-300">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-white transition-colors">
                AGB
              </a>
            </div>

            <p>&copy; {new Date().getFullYear()} Heilpraxis Bergmann</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
