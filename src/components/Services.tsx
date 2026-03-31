import { Leaf, Wand2, Apple, Droplets, Zap, Smile } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Leaf,
    title: 'Phytotherapie',
    description: 'Heilkräuter und Pflanzenextrakte zur natürlichen Unterstützung Ihrer Gesundheit.',
  },
  {
    id: 2,
    icon: Wand2,
    title: 'Traditionelle Chinesische Medizin',
    description: 'Akupunktur und TCM-Techniken zur Harmonisierung Ihrer Energieflüsse.',
  },
  {
    id: 3,
    icon: Apple,
    title: 'Ernährungsberatung',
    description: 'Personalisierte Ernährungskonzepte für Ihre individuellen Gesundheitsziele.',
  },
  {
    id: 4,
    icon: Droplets,
    title: 'Homöopathie',
    description: 'Sanfte homöopathische Mittel zur Aktivierung Ihrer Selbstheilungskräfte.',
  },
  {
    id: 5,
    icon: Zap,
    title: 'Entgiftungsprogramme',
    description: 'Spezialisierte Detox-Behandlungen zur Körperreinigung und Regeneration.',
  },
  {
    id: 6,
    icon: Smile,
    title: 'Stressmanagement',
    description: 'Ganzheitliche Techniken zur Stressbewältigung und mentalen Entspannung.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-sage-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-earth-900 mb-4">
            Meine Behandlungsmethoden
          </h2>
          <p className="text-lg text-earth-700 max-w-2xl mx-auto">
            Ich biete eine umfassende Palette an bewährten Naturheilmethoden für Ihre individuelle Gesundheit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-14 h-14 bg-sage-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors">
                  <Icon className="text-sage-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-serif font-bold text-earth-900 mb-3">{service.title}</h3>
                <p className="text-earth-700 mb-4 leading-relaxed">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-block text-sage-600 font-medium hover:text-sage-700 transition-colors"
                >
                  Mehr erfahren →
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-sage-100 rounded-xl p-8 text-center">
          <p className="text-earth-800 mb-6">
            Unsicher, welche Behandlung zu Ihnen passt?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-medium"
          >
            Kostenlose Beratung buchen
          </a>
        </div>
      </div>
    </section>
  );
}
