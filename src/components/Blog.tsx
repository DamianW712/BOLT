import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Die Kraft von Heilkräutern: Phytotherapie im modernen Alltag',
    date: '15. März 2024',
    category: 'Phytotherapie',
    excerpt:
      'Erfahren Sie, wie bewährte Heilkräuter Sie bei alltäglichen Beschwerden unterstützen können. Von Kamille bis Johanniskraut - wir betrachten die wissenschaftlichen Grundlagen und praktischen Anwendungen.',
    readTime: '5 min Lesezeit',
  },
  {
    id: 2,
    title: 'Akupunktur gegen Kopfschmerzen: Eine wirksame Alternative zur Schulmedizin',
    date: '8. März 2024',
    category: 'Traditionelle Chinesische Medizin',
    excerpt:
      'Kopfschmerzen beeinträchtigen Millionen von Menschen. Entdecken Sie, wie die traditionelle chinesische Medizin durch Akupunktur eine natürliche Lösung bietet, ohne Nebenwirkungen.',
    readTime: '6 min Lesezeit',
  },
  {
    id: 3,
    title: 'Darmgesundheit als Schlüssel zu Gesamtwohlbefinden',
    date: '1. März 2024',
    category: 'Ernährung',
    excerpt:
      'Der Darm ist unser Immunsystem und Energiezentrum. Lernen Sie, wie richtige Ernährung und ganzheitliche Pflege Ihrer Darmgesundheit zu mehr Energie und Wohlbefinden führt.',
    readTime: '7 min Lesezeit',
  },
  {
    id: 4,
    title: 'Stressabbau durch Naturheilkunde: Praktische Techniken für den Alltag',
    date: '22. Februar 2024',
    category: 'Stressmanagement',
    excerpt:
      'Chronischer Stress ist eine stille Epidemie. Entdecken Sie bewährte Naturheilmethoden und einfache Techniken, um Ihren Stresslevel dauerhaft zu senken.',
    readTime: '5 min Lesezeit',
  },
  {
    id: 5,
    title: 'Detox-Programme: Richtig entgiften für mehr Vitalität',
    date: '15. Februar 2024',
    category: 'Entgiftung',
    excerpt:
      'Möchten Sie Ihren Körper entgiften? Erfahren Sie, welche Detox-Methoden wirklich sinnvoll sind und wie Sie sicher und effektiv Ihre Gesundheit regenerieren.',
    readTime: '6 min Lesezeit',
  },
];

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

function BlogCard({ post, index }: BlogCardProps) {
  return (
    <article
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group animate-fade-in"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="bg-gradient-to-r from-sage-100 to-earth-100 h-32 flex items-center justify-center group-hover:from-sage-200 group-hover:to-earth-200 transition-colors">
        <span className="text-sage-600 text-4xl">📝</span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 text-xs font-semibold rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-earth-600">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
        </div>

        <h3 className="text-xl font-serif font-bold text-earth-900 mb-3 group-hover:text-sage-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-earth-700 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-sage-200">
          <span className="text-xs text-earth-600">{post.readTime}</span>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
          >
            Artikel lesen
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-earth-900 mb-4">
            Wissenswertes aus meiner Praxis
          </h2>
          <p className="text-lg text-earth-700 max-w-2xl mx-auto">
            Erfahren Sie spannende Fakten über Naturheilkunde, Gesundheit und Wellness in meinem Blog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="text-center pt-8 border-t border-sage-200">
          <p className="text-earth-700 mb-4">
            Interessieren Sie sich für mehr Artikel über Naturheilkunde?
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-medium"
          >
            Zum kompletten Blog
          </a>
        </div>
      </div>
    </section>
  );
}
