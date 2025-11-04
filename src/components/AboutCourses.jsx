import { Book, GraduationCap } from 'lucide-react';

export default function AboutCourses({ t }) {
  const courses = [
    {
      icon: GraduationCap,
      title: t.courses.generalEnglish.title,
      desc: t.courses.generalEnglish.desc,
      level: 'A1–C1',
    },
    {
      icon: Book,
      title: t.courses.examPrep.title,
      desc: t.courses.examPrep.desc,
      level: 'IELTS / TOEFL / Cambridge',
    },
    {
      icon: Book,
      title: t.courses.business.title,
      desc: t.courses.business.desc,
      level: t.courses.business.level,
    },
  ];

  const resources = [
    { title: t.resources.grammar, href: '#', tag: 'PDF' },
    { title: t.resources.vocabulary, href: '#', tag: 'Quiz' },
    { title: t.resources.listening, href: '#', tag: 'Audio' },
    { title: t.resources.reading, href: '#', tag: 'Article' },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t.about.title}</h2>
            <p className="mt-4 text-slate-600">{t.about.body}</p>
            <a href="#contact" className="inline-block mt-6 text-blue-700 font-semibold hover:underline">
              {t.cta.bookClass}
            </a>
          </div>

          <div className="md:col-span-2">
            <section id="courses" className="">
              <h3 className="text-xl font-semibold text-slate-900">{t.courses.title}</h3>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((c, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow bg-white">
                    <c.icon className="w-6 h-6 text-blue-600" />
                    <h4 className="mt-3 font-semibold text-slate-900">{c.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                    <p className="mt-4 text-xs font-medium text-blue-700">{c.level}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900">{t.resources.title}</h3>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {resources.map((r, i) => (
                  <a key={i} href={r.href} className="group rounded-lg border border-slate-200 p-4 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-slate-800 group-hover:text-blue-800">{r.title}</h4>
                      <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-blue-100 text-blue-700">{r.tag}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">{t.resources.cta}</p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
