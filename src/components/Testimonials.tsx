import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria K.',
    age: '45',
    condition: 'Chronische Kopfschmerzen',
    text: 'Ich war anfangs skeptisch, aber nach nur wenigen Wochen mit Dr. Bergmanns Phytotherapie-Behandlung waren meine Kopfschmerzen um 80% besser. Ich habe endlich mein Leben zurück!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Thomas M.',
    age: '52',
    condition: 'Schlafstörungen und Stress',
    text: 'Die Kombination aus Akupunktur und Stressmanagement hat mein Leben verändert. Ich schlafe wieder durch und fühle mich tagsüber viel wacher und ausgeglichener.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena S.',
    age: '38',
    condition: 'Verdauungsprobleme',
    text: 'Dr. Bergmann hat herausgefunden, dass meine Verdauungsprobleme auf Nahrungsmittelunverträglichkeiten zurückgingen. Mit ihrer individualisierten Ernährungsberatung geht es mir jetzt viel besser.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Andreas P.',
    age: '58',
    condition: 'Bluthochdruck',
    text: 'Mein Arzt war überrascht von meinen Blutzuckerwerten nach der Behandlung. Dr. Bergmann arbeitet großartig mit meinem Hausarzt zusammen - das gibt mir ein gutes Gefühl.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa H.',
    age: '35',
    condition: 'Hormonelle Unausgeglichenheit',
    text: 'Endlich jemand, der die Zusammenhänge sieht und mich nicht einfach nur Pillen verschreibt. Dr. Bergmann hat wirklich Zeit für meine Gesundheit aufgewendet.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-earth-900 mb-4">
            Was meine Patienten sagen
          </h2>
          <p className="text-lg text-earth-700">
            Echte Erfahrungen von Menschen, deren Leben sich durch Naturheilkunde verbessert hat.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sage-50 to-warm-50 rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="flex gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <blockquote className="text-xl sm:text-2xl font-serif text-earth-900 mb-8 leading-relaxed">
            "{currentTestimonial.text}"
          </blockquote>

          <div className="border-t border-sage-300 pt-6">
            <p className="font-semibold text-earth-900">
              {currentTestimonial.name}, {currentTestimonial.age} Jahre
            </p>
            <p className="text-sage-600 text-sm">
              Behandlung: {currentTestimonial.condition}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-white rounded-full transition-colors"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="w-6 h-6 text-sage-600" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-sage-600 w-8' : 'bg-sage-300 hover:bg-sage-400'
                  }`}
                  aria-label={`Zur Bewertung ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 hover:bg-white rounded-full transition-colors"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="w-6 h-6 text-sage-600" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-earth-700 mb-4">Bereit, Ihre Gesundheit zu transformieren?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-medium"
          >
            Jetzt kostenloses Erstgespräch buchen
          </a>
        </div>
      </div>
    </section>
  );
}
