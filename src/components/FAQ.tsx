import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: 'Wie unterscheidet sich Naturheilkunde von der Schulmedizin?',
    answer:
      'Naturheilkunde und Schulmedizin verfolgen unterschiedliche Ansätze. Während die Schulmedizin oft Symptome direkt behandelt, betrachtet Naturheilkunde die Ursachen von Gesundheitsproblemen. Die beste Lösung ist oft eine komplementäre Zusammenarbeit beider Ansätze. Ich arbeite eng mit Hausärzten zusammen und unterstütze konventionelle Behandlungen ganzheitlich.',
  },
  {
    id: 2,
    question: 'Werden die Kosten von der Krankenkasse übernommen?',
    answer:
      'Die Kostenübernahme hängt von Ihrer Versicherung ab. Viele private Krankenkassen und Zusatzversicherungen übernehmen einen Teil der Kosten. Ich stelle Ihnen detaillierte Rechnungen aus, die Sie bei Ihrer Krankenversicherung einreichen können. Gerne informiere ich Sie vorab über die zu erwartenden Kosten und helfe Ihnen, die Übernahmemöglichkeiten zu klären.',
  },
  {
    id: 3,
    question: 'Wie lange dauert es, bis ich Verbesserungen bemerke?',
    answer:
      'Das hängt stark von Ihrem individuellen Fall ab. Manche Patienten berichten bereits nach wenigen Tagen von Besserungen, bei anderen Erkrankungen kann eine Behandlungsdauer von Wochen oder Monaten notwendig sein. Ein chronisches Problem, das sich über Jahre entwickelt hat, kann nicht über Nacht gelöst werden. Im ersten Gespräch bespreche ich realistische Erwartungen und einen individuellen Behandlungsplan mit Ihnen.',
  },
  {
    id: 4,
    question: 'Kann es Nebenwirkungen geben?',
    answer:
      'Natürliche Behandlungsmethoden sind im Allgemeinen sehr verträglich, aber "natürlich" bedeutet nicht automatisch "frei von Nebenwirkungen". Manche Patienten erleben eine kurzzeitige Erstverschlimmerung, die Teil des Heilungsprozesses ist. Ich bespreche alle möglichen Reaktionen mit Ihnen und wähle Behandlungen basierend auf Ihren individuellen Bedürfnissen und Kontraindikationen aus.',
  },
  {
    id: 5,
    question: 'Sind Ihre Behandlungsmethoden wissenschaftlich nachgewiesen?',
    answer:
      'Ja, meine Behandlungsmethoden basieren auf Jahrtausenden traditioneller Anwendung und modernen wissenschaftlichen Erkenntnissen. Besonders Akupunktur und Phytotherapie sind in klinischen Studien untersucht worden. Ich kombiniere traditionelles Wissen mit evidenzbasierter Medizin und bleibe ständig auf dem neuesten Stand der Forschung.',
  },
  {
    id: 6,
    question: 'Kann ich meine verschriebenen Medikamente weiterhin nehmen?',
    answer:
      'Ja, grundsätzlich ist eine parallele Einnahme möglich. Ich arbeite mit Ihrem Hausarzt zusammen und überprüfe mögliche Wechselwirkungen. Niemals sollten Sie Medikamente ohne Rücksprache mit Ihrem Arzt absetzen. Mein Ziel ist es oft, gemeinsam mit konventionellen Behandlungen die Gesamtgesundheit zu verbessern und möglicherweise mittelfristig Medikamentendosen zu reduzieren.',
  },
  {
    id: 7,
    question: 'Was passiert beim ersten Termin?',
    answer:
      'Das erste Gespräch dauert etwa 90 Minuten. Ich nehme mir Zeit, Ihre medizinische Geschichte, Lebenssituation und gesundheitliche Ziele vollständig zu verstehen. Darauf basierend führe ich eine ganzheitliche Untersuchung durch. Erst dann erarbeite ich einen individuellen Behandlungsplan, den ich mit Ihnen bespreche. Es entstehen keine Verpflichtungen.',
  },
  {
    id: 8,
    question: 'Wie seriös ist eine Heilpraktiker-Zertifizierung?',
    answer:
      'Die Heilpraktiker-Zertifizierung ist in Deutschland eine regulierte Berufsqualifikation, für die ich eine offizielle Prüfung vor dem Gesundheitsamt bestanden habe. Ich bin versichert, fortgebildet und halte mich an strenge berufliche Ethikrichtlinien. Meine Zusatzqualifikationen in TCM und Phytotherapie zeigen mein Engagement für kontinuierliche Weiterbildung.',
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqItems[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-sage-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start gap-4 hover:bg-sage-50 transition-colors text-left group"
      >
        <ChevronDown
          className={`w-5 h-5 text-sage-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:text-sage-700 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <h3 className="text-lg font-semibold text-earth-900 group-hover:text-sage-600 transition-colors">
          {item.question}
        </h3>
      </button>

      {isOpen && (
        <div className="pb-6 pl-9 pr-4 animate-slide-up">
          <p className="text-earth-700 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-earth-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-earth-700">
            Klären Sie Ihre Fragen, um mehr Vertrauen zu Naturheilkunde und meiner Praxis zu gewinnen.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-earth-700 mb-4">Haben Sie weitere Fragen?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-medium"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
