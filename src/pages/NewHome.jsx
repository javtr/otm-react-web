import React, { useContext } from "react";
import LanguageContext from "../context/langContext";
import { textEn, textEs } from "../assets/text/newHome";

const NewHome = () => {
  const { lang } = useContext(LanguageContext);
  const t = lang === "en" ? textEn : textEs;

  return (
    <div className="new-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          {/* Aquí iría el video o animación */}
          <button>Empieza ahora</button>
        </div>
      </section>

      {/* Credibility Bar */}
      {/* Esta sección ha sido eliminada porque t.credibility ya no existe en los textos actualizados */}

      {/* Value Proposition */}
      <section className="value-prop">
        <h2>{t.value.title}</h2>
        <p>{t.value.paragraph}</p>
        <div className="value-prop__cards">
          {t.value.cards.map((card, i) => (
            <div className="value-prop__card" key={i}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & Products */}
      <section className="pricing">
        <h2>{t.pricing.title}</h2>
        <div className="plans">
          {t.pricing.plans.map((plan, i) => (
            <div className="plan" key={i}>
              <h3>{plan.name} {plan.bestValue && <span className="plan__best">Best Value</span>}</h3>
              <p>{plan.price}</p>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Indicators */}
      {/* Esta sección ha sido eliminada porque t.indicators ya no existe en los textos actualizados */}

      {/* Testimonials */}
      <section className="testimonials">
        <h2>{t.testimonials.title}</h2>
        {t.testimonials.list.map((ex, i) => (
          <blockquote key={i}>
            <strong>{ex.name}</strong> <span>({ex.date})</span>: {ex.text}
          </blockquote>
        ))}
      </section>

      {/* Education & Resources */}
      <section className="education">
        <h2>{t.education.title}</h2>
        <ul>
          <li>{t.education.masterclass}</li>
          <li>{t.education.guide}</li>
          <li>{t.education.example}</li>
          <li>{t.education.platform}</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>{t.faq.title}</h2>
        <ul>
          {t.faq.questions.map((q, i) => (
            <li key={i}>
              <strong>{q.q}</strong>
              <p>{q.a}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="cta-final">
        <h2>{t.ctaFinal.text}</h2>
        <button>{t.ctaFinal.cta}</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <ul>
          <li>{t.footer.terms}</li>
          <li>{t.footer.privacy}</li>
          <li>{t.footer.contact}</li>
        </ul>
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  );
};

export default NewHome; 