import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonnummer ist erforderlich';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Betreff ist erforderlich';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-earth-900 mb-4">
            Kontaktieren Sie mich
          </h2>
          <p className="text-lg text-earth-700">
            Nehmen Sie Kontakt mit mir auf und vereinbaren Sie Ihren ersten Termin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-sage-50 rounded-lg p-8 text-center">
            <Phone className="w-8 h-8 text-sage-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-earth-900 mb-2">Telefon</h3>
            <a href="tel:+49301234567" className="text-sage-600 hover:text-sage-700 font-medium">
              +49 (0)30 - 123 45 67
            </a>
          </div>

          <div className="bg-sage-50 rounded-lg p-8 text-center">
            <Mail className="w-8 h-8 text-sage-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-earth-900 mb-2">E-Mail</h3>
            <a href="mailto:kontakt@drsarahbergmann.de" className="text-sage-600 hover:text-sage-700 font-medium break-all">
              kontakt@drsarahbergmann.de
            </a>
          </div>

          <div className="bg-sage-50 rounded-lg p-8 text-center">
            <MapPin className="w-8 h-8 text-sage-600 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-earth-900 mb-2">Adresse</h3>
            <p className="text-earth-700">
              Heilpraxis Bergmann
              <br />
              Kräuterweg 15
              <br />
              10115 Berlin
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-earth-900 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all ${
                  errors.name ? 'border-red-500' : 'border-sage-200'
                }`}
                placeholder="Ihr Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-earth-900 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all ${
                  errors.email ? 'border-red-500' : 'border-sage-200'
                }`}
                placeholder="Ihre E-Mail-Adresse"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-earth-900 mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all ${
                  errors.phone ? 'border-red-500' : 'border-sage-200'
                }`}
                placeholder="Ihre Telefonnummer"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-earth-900 mb-2">
                Betreff *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all ${
                  errors.subject ? 'border-red-500' : 'border-sage-200'
                }`}
              >
                <option value="">-- Bitte wählen Sie ein Thema --</option>
                <option value="termin">Termin vereinbaren</option>
                <option value="beratung">Kostenlose Beratung</option>
                <option value="frage">Allgemeine Frage</option>
                <option value="feedback">Feedback</option>
              </select>
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-earth-900 mb-2">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-sage-200'
                }`}
                placeholder="Ihre Nachricht..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
            </button>

            {submitted && (
              <div className="p-4 bg-green-100 border border-green-400 rounded-lg text-green-800 animate-fade-in">
                <p className="font-medium">Nachricht erfolgreich gesendet!</p>
                <p className="text-sm mt-1">Ich werde mich schnellstmöglich bei Ihnen melden.</p>
              </div>
            )}
          </form>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sage-50 to-warm-50 rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">Sprechzeiten</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-earth-900">Montag - Freitag</p>
                    <p className="text-earth-700">09:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-earth-900">Samstag</p>
                    <p className="text-earth-700">10:00 - 14:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-earth-900">Notfall</p>
                    <p className="text-earth-700">Telefonische Erreichbarkeit nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-earth-50 rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold text-earth-900 mb-4">Erstkonsultation</h3>
              <p className="text-earth-700 mb-4 leading-relaxed">
                Die erste Konsultation dauert etwa 90 Minuten und beinhaltet ein ausführliches Gespräch,
                eine ganzheitliche Untersuchung und die Erstellung eines individuellen Behandlungsplans.
              </p>
              <p className="text-sm text-earth-600">
                Notfallbehandlungen können auch außerhalb der Sprechzeiten vereinbart werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
