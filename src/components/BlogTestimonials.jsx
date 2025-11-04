import { Star } from 'lucide-react';

export default function BlogTestimonials({ t }) {
  const posts = [
    {
      title: t.blog.posts[0].title,
      excerpt: t.blog.posts[0].excerpt,
      href: '#',
      date: '2025-01-15',
    },
    {
      title: t.blog.posts[1].title,
      excerpt: t.blog.posts[1].excerpt,
      href: '#',
      date: '2025-02-20',
    },
  ];

  const testimonials = [
    { name: 'Ana G.', quote: t.testimonials.items[0] },
    { name: 'Marco R.', quote: t.testimonials.items[1] },
    { name: 'Sophie T.', quote: t.testimonials.items[2] },
  ];

  return (
    <section id="blog" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{t.blog.title}</h3>
            <p className="mt-2 text-slate-600">{t.blog.subtitle}</p>
            <div className="mt-6 grid gap-6">
              {posts.map((p, i) => (
                <a key={i} href={p.href} className="rounded-xl border border-slate-200 p-5 bg-white hover:shadow-md transition-shadow">
                  <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString()}</div>
                  <h4 className="mt-2 font-semibold text-slate-900">{p.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-blue-700">{t.blog.readMore}</span>
                </a>
              ))}
            </div>
          </div>

          <div id="testimonials">
            <h3 className="text-2xl font-bold text-slate-900">{t.testimonials.title}</h3>
            <p className="mt-2 text-slate-600">{t.testimonials.subtitle}</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {testimonials.map((item, i) => (
                <figure key={i} className="rounded-xl border border-slate-200 p-5 bg-white">
                  <div className="flex items-center gap-2 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-slate-700">“{item.quote}”</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">— {item.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
