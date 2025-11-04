import { Mail, Phone, Calendar } from 'lucide-react';

export default function ContactFooter({ t }) {
  return (
    <>
      <section id="contact" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{t.contact.title}</h3>
            <p className="mt-2 text-slate-600">{t.contact.subtitle}</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(t.contact.thanks);
                e.currentTarget.reset();
              }}
              className="mt-6 grid gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700">{t.contact.name}</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">{t.contact.email}</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">{t.contact.message}</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700 font-semibold">
                <Calendar className="w-4 h-4" />
                {t.cta.bookClass}
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
            <h4 className="font-semibold text-slate-900">{t.contact.prefer}</h4>
            <p className="mt-2 text-sm text-slate-600">{t.contact.preferDesc}</p>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="mailto:teacher@example.com" className="inline-flex items-center gap-2 text-blue-700 hover:underline">
                <Mail className="w-4 h-4" /> teacher@example.com
              </a>
              <a href="tel:+123456789" className="inline-flex items-center gap-2 text-blue-700 hover:underline">
                <Phone className="w-4 h-4" /> +1 234 567 89
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#home" className="hover:text-white">{t.nav.home}</a>
            <a href="#about" className="hover:text-white">{t.nav.about}</a>
            <a href="#courses" className="hover:text-white">{t.nav.courses}</a>
            <a href="#blog" className="hover:text-white">{t.nav.blog}</a>
            <a href="#testimonials" className="hover:text-white">{t.nav.testimonials}</a>
            <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
