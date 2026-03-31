export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-sage-300 to-earth-300 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-earth-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl">
                  SB
                </div>
                <p className="text-earth-900 font-serif font-bold text-2xl">Dr. Sarah Bergmann</p>
                <p className="text-sage-600 mt-2">Heilpraktikerin & Naturheilkundeexperin</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div>
              <h2 className="text-4xl font-serif font-bold text-earth-900 mb-4">Über mich</h2>
              <p className="text-earth-700 leading-relaxed mb-4">
                Mein Name ist Sarah Bergmann und ich bin Heilpraktikerin mit Spezialisierung auf ganzheitliche Naturheilkunde.
                Mit über 15 Jahren Berufserfahrung begleite ich meine Patienten auf dem Weg zu nachhaltiger Gesundheit.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-earth-900 mb-3">Mein Weg zur Naturheilkunde</h3>
              <p className="text-earth-700 leading-relaxed mb-4">
                Ursprünglich war ich in der konventionellen Pharmazie tätig. Nach meiner persönlichen Gesundheitskrise
                vor 15 Jahren entdeckte ich die transformative Kraft der Naturheilkunde. Diese Erfahrung führte mich zur
                umfassenden Weiterbildung und letztendlich zur Heilpraktiker-Zertifizierung.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-earth-900 mb-3">Meine Philosophie</h3>
              <p className="text-earth-700 leading-relaxed">
                Ich verfolge einen ganzheitlichen Ansatz, der den ganzen Menschen in Körper, Geist und Seele betrachtet.
                Meine Behandlungen kombinieren bewährte Naturheilmethoden mit modernem Fachwissen. Mein Ziel ist nicht nur
                die Symptombekämpfung, sondern die Unterstützung Ihrer natürlichen Selbstheilungskräfte.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-sage-200">
              <div className="text-center">
                <p className="text-sm font-medium text-sage-600 uppercase tracking-wide">Zertifikation</p>
                <p className="text-earth-900 font-semibold mt-1">Heilpraktiker BRD</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-sage-600 uppercase tracking-wide">Zusatzqualifikationen</p>
                <p className="text-earth-900 font-semibold mt-1">TCM, Akupunktur, Phytotherapie</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-sage-600 uppercase tracking-wide">Fortbildungen</p>
                <p className="text-earth-900 font-semibold mt-1">Laufende Weiterbildung</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-sage-600 uppercase tracking-wide">Spezialisierung</p>
                <p className="text-earth-900 font-semibold mt-1">Funktionelle Medizin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
