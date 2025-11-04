import { useMemo } from 'react';
import { Globe, Calendar } from 'lucide-react';

export default function Header({ lang, setLang, t, teacherName }) {
  const navItems = useMemo(
    () => [
      { href: '#home', label: t.nav.home },
      { href: '#about', label: t.nav.about },
      { href: '#courses', label: t.nav.courses },
      { href: '#blog', label: t.nav.blog },
      { href: '#testimonials', label: t.nav.testimonials },
      { href: '#contact', label: t.nav.contact },
    ],
    [t]
  );

  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">EN</div>
            <span className="font-semibold text-slate-800">{teacherName}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-blue-700 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-700 px-3 py-2 rounded-md hover:bg-blue-50"
              aria-label={t.actions.toggleLanguage}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{lang === 'en' ? 'ES' : 'EN'}</span>
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold">{t.cta.bookClass}</span>
            </a>
          </div>
        </div>
      </div>

      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              {t.hero.title.replace('{name}', teacherName)}
            </h1>
            <p className="mt-4 text-slate-600 text-lg md:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#courses" className="bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700 font-semibold">
                {t.cta.viewCourses}
              </a>
              <a href="#contact" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold">
                {t.cta.bookClass}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1480&auto=format&fit=crop"
              alt="Online English class"
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </header>
  );
}
