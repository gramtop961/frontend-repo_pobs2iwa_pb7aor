import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import AboutCourses from './components/AboutCourses.jsx';
import BlogTestimonials from './components/BlogTestimonials.jsx';
import ContactFooter from './components/ContactFooter.jsx';

const TEACHER_NAME = '[name]';

export default function App() {
  const [lang, setLang] = useState('en');

  const copy = useMemo(() => ({
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        courses: 'Courses',
        blog: 'Blog',
        testimonials: 'Testimonials',
        contact: 'Contact',
      },
      hero: {
        title: 'Learn English with {name} — Friendly, Effective, and Fun',
        subtitle: 'Personalized lessons for conversation, exams, and professional goals. Start your journey today!'
      },
      about: {
        title: 'About',
        body: "I'm a certified English teacher helping students gain confidence and fluency through engaging, real-life lessons. I focus on communication, clear goals, and practical results.",
      },
      courses: {
        title: 'Courses',
        generalEnglish: {
          title: 'General English',
          desc: 'Build your speaking, listening, reading, and writing with tailored lessons.'
        },
        examPrep: {
          title: 'Exam Preparation',
          desc: 'Targeted strategies and mock tests for IELTS, TOEFL, and Cambridge.'
        },
        business: {
          title: 'Business English',
          desc: 'Improve meetings, presentations, and emails with professional language.',
          level: 'Intermediate–Advanced'
        }
      },
      resources: {
        title: 'Learning Resources',
        grammar: 'Grammar Practice',
        vocabulary: 'Vocabulary Builder',
        listening: 'Listening Lab',
        reading: 'Reading Corner',
        cta: 'Explore resource'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Tips, mini-lessons, and insights to boost your English every week.',
        readMore: 'Read more',
        posts: [
          { title: '5 daily habits to improve your English', excerpt: 'Simple routines that build fluency and confidence.' },
          { title: 'How to think in English', excerpt: 'Practical steps to reduce translation and speak naturally.' }
        ]
      },
      testimonials: {
        title: 'What students say',
        subtitle: 'Real feedback from learners around the world.',
        items: [
          'I finally achieved my IELTS target thanks to the clear strategies!',
          'Fun, patient, and motivating. My confidence has grown so much.',
          'Great materials and personalized lessons. Highly recommend!'
        ]
      },
      contact: {
        title: 'Book a class',
        subtitle: 'Tell me about your goals and choose a time that works for you.',
        name: 'Your name',
        email: 'Email address',
        message: 'Your message',
        prefer: 'Prefer a quick chat?',
        preferDesc: 'Reach out by email or phone and I’ll get back to you ASAP.',
        thanks: 'Thanks! I will contact you shortly.'
      },
      cta: {
        viewCourses: 'View courses',
        bookClass: 'Book a class',
        toggleLanguage: 'Toggle language'
      },
      footer: {
        copyright: 'All rights reserved.'
      }
    },
    es: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        courses: 'Cursos',
        blog: 'Blog',
        testimonials: 'Testimonios',
        contact: 'Contacto',
      },
      hero: {
        title: 'Aprende inglés con {name} — Cercano, efectivo y divertido',
        subtitle: 'Clases personalizadas para conversación, exámenes y objetivos profesionales. ¡Empieza hoy!'
      },
      about: {
        title: 'Sobre mí',
        body: 'Soy profesor/a titulado/a de inglés y ayudo a mis estudiantes a ganar confianza y fluidez con clases prácticas y motivadoras, enfocadas en la comunicación real y resultados.'
      },
      courses: {
        title: 'Cursos',
        generalEnglish: {
          title: 'Inglés general',
          desc: 'Mejora tu speaking, listening, reading y writing con clases a tu medida.'
        },
        examPrep: {
          title: 'Preparación de exámenes',
          desc: 'Estrategias y simulacros para IELTS, TOEFL y Cambridge.'
        },
        business: {
          title: 'Inglés para negocios',
          desc: 'Mejora reuniones, presentaciones y correos con un lenguaje profesional.',
          level: 'Intermedio–Avanzado'
        }
      },
      resources: {
        title: 'Recursos de aprendizaje',
        grammar: 'Práctica de gramática',
        vocabulary: 'Vocabulario',
        listening: 'Laboratorio de listening',
        reading: 'Rincón de lectura',
        cta: 'Ver recurso'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Consejos y mini-lecciones para mejorar tu inglés cada semana.',
        readMore: 'Leer más',
        posts: [
          { title: '5 hábitos diarios para mejorar tu inglés', excerpt: 'Rutinas simples para ganar fluidez y confianza.' },
          { title: 'Cómo pensar en inglés', excerpt: 'Pasos prácticos para reducir la traducción y hablar naturalmente.' }
        ]
      },
      testimonials: {
        title: 'Lo que dicen los estudiantes',
        subtitle: 'Opiniones reales de alumnos de diferentes países.',
        items: [
          '¡Conseguí mi objetivo en IELTS gracias a sus estrategias claras!',
          'Clases divertidas y con mucha paciencia. Mi confianza ha crecido mucho.',
          'Materiales excelentes y lecciones personalizadas. ¡Muy recomendable!'
        ]
      },
      contact: {
        title: 'Reserva una clase',
        subtitle: 'Cuéntame tus objetivos y elige un horario que te venga bien.',
        name: 'Tu nombre',
        email: 'Correo electrónico',
        message: 'Tu mensaje',
        prefer: '¿Prefieres hablar rápido?',
        preferDesc: 'Escríbeme por email o teléfono y te responderé cuanto antes.',
        thanks: '¡Gracias! Te contactaré pronto.'
      },
      cta: {
        viewCourses: 'Ver cursos',
        bookClass: 'Reservar clase',
        toggleLanguage: 'Cambiar idioma'
      },
      footer: {
        copyright: 'Todos los derechos reservados.'
      }
    }
  }), []);

  const t = copy[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-800">
      <Header lang={lang} setLang={setLang} t={t} teacherName={TEACHER_NAME} />
      <AboutCourses t={t} />
      <BlogTestimonials t={t} />
      <ContactFooter t={t} />
    </div>
  );
}
