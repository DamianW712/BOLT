export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-warm-50 via-white to-sage-50 flex items-center justify-center px-4 py-20"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sage-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-earth-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-6 leading-tight">
          Natürliche Heilung für Körper und Seele
        </h2>

        <p className="text-lg sm:text-xl text-earth-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Mit ganzheitlichen Behandlungsmethoden unterstütze ich Sie auf dem Weg zu mehr Gesundheit und Wohlbefinden.
          Basierend auf 15 Jahren Erfahrung und wissenschaftlich fundierter Naturheilkunde.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Kostenloses Erstgespräch vereinbaren
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-all duration-200 font-medium text-lg"
          >
            Behandlungsmethoden erkunden
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-serif font-bold text-sage-600 mb-2">15+</div>
            <div className="text-earth-700">Jahre Erfahrung</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-serif font-bold text-sage-600 mb-2">2000+</div>
            <div className="text-earth-700">Behandelte Patienten</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-serif font-bold text-sage-600 mb-2">6</div>
            <div className="text-earth-700">Behandlungsmethoden</div>
          </div>
        </div>
      </div>
    </section>
  );
}
