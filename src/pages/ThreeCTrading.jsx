import React, { useContext } from "react";
import LanguageContext from "../context/langContext";

const content = {
  es: {
    title: "3C TRADING PACK ÉLITE",
    subtitle: "GIROS Y CONTINUACIONES (OTM + LOGIC INDICATORS)",
    cards: [
      {
        id: "annual",
        title: "ÉLITE ANUAL",
        badge: null,
        sections: [
          {
            heading: "OTM Trading Anual PLUS",
            items: [
              "Pack OTM Trading 1 año",
              "Curso de videos prácticos estrategias continuaciones.",
              "Curso estrategia continuaciones",
            ],
          },
          {
            heading: "Logic Indicators Anual PLUS",
            items: [
              "Pack Logic Indicators 1 año",
              "Curso Order Flow y estrategias de giros.",
              "Curso ejemplos en vivo giros con Order Flow.",
              "Curso Volume Profile Élite (Nuevo)",
              "Curso estrategias de Swing Trading con Volume Profile (Nuevo)",
              "Curso estrategias usando Big Trades (Nuevo)",
            ],
          },
          {
            heading: "3C Trading",
            items: [
              "Pack todos los cursos 3C Trading",
              "Discord privado 1 año",
              "Operativa en vivo Lunes a Viernes (Nuevo)",
              "Reuniones semanales 1 año (Nuevo)",
            ],
          },
        ],
        pricing: {
          current: "$790 USD",
          original: "$1128 USD USA EL CODIGO: BLACK30",
          note: "Pago anual",
        },
      },
      {
        id: "lifetime",
        title: "ÉLITE LIFETIME",
        badge: [
          "7 PAGOS DE $250",
          "Códigos de descuento aplican solo a la primera cuota",
        ],
        sections: [
          {
            heading: "OTM Trading PLUS (Lifetime)",
            items: [
              "Pack OTM Trading 1 año",
              "Curso de videos prácticos estrategias continuaciones.",
              "Curso estrategia continuaciones",
            ],
          },
          {
            heading: "Logic Indicators PLUS (Lifetime)",
            items: [
              "Pack Logic Indicators 1 año",
              "Curso Order Flow y estrategias de giros.",
              "Curso ejemplos en vivo giros con Order Flow.",
              "Curso Volume Profile Élite (Nuevo)",
              "Curso estrategias de Swing Trading con Volume Profile (Nuevo)",
              "Curso estrategias usando Big Trades (Nuevo)",
            ],
          },
          {
            heading: "3C Trading",
            items: [
              "Pack todos los cursos 3C Trading",
              "Discord privado 1 año",
              "Operativa en vivo Lunes a Viernes (Nuevo)",
              "Reuniones semanales 1 año (Nuevo)",
            ],
          },
        ],
        pricing: {
          current: "$1650 USD",
          original: "$2358 USD USA EL CODIGO: BLACK30",
          note: "Único pago de por vida",
        },
      },
    ],
  },
  en: {
    title: "3C TRADING ELITE PACK",
    subtitle: "REVERSALS & CONTINUATIONS (OTM + LOGIC INDICATORS)",
    cards: [
      {
        id: "annual",
        title: "ANNUAL ELITE",
        badge: null,
        sections: [
          {
            heading: "OTM Trading Annual PLUS",
            items: [
              "OTM Trading pack 1 year",
              "Practical video course on continuation strategies.",
              "Continuation strategy course",
            ],
          },
          {
            heading: "Logic Indicators Annual PLUS",
            items: [
              "Logic Indicators pack 1 year",
              "Order Flow course and reversal strategies.",
              "Live reversal sessions with Order Flow.",
              "Volume Profile Elite course (New)",
              "Swing Trading strategies with Volume Profile (New)",
              "Strategies using Big Trades (New)",
            ],
          },
          {
            heading: "3C Trading",
            items: [
              "All 3C Trading courses pack",
              "Private Discord 1 year",
              "Live trading room 1 year (new)",
              "Weekly meetings 1 year (new)",
            ],
          },
        ],
        pricing: {
          current: "$790 USD",
          original: "$990 USD",
          note: "Annual payment",
        },
      },
      {
        id: "lifetime",
        title: "ELITE LIFETIME",
        badge: "6 PAYMENTS OF $275",
        sections: [
          {
            heading: "OTM Trading PLUS (Lifetime)",
            items: [
              "OTM Trading pack 1 year",
              "Practical video course on continuation strategies.",
              "Continuation strategy course",
            ],
          },
          {
            heading: "Logic Indicators PLUS (Lifetime)",
            items: [
              "Logic Indicators pack 1 year",
              "Order Flow course and reversal strategies.",
              "Live reversal sessions with Order Flow.",
              "Volume Profile Elite course (New)",
              "Swing Trading strategies with Volume Profile (New)",
              "Strategies using Big Trades (New)",
            ],
          },
          {
            heading: "3C Trading",
            items: [
              "All 3C Trading courses pack",
              "Private Discord 1 year",
              "Live trading room 1 year (new)",
              "Weekly meetings 1 year (new)",
            ],
          },
        ],
        pricing: {
          current: "$1650 USD",
          original: "$1950 USD",
          note: "One-time payment for life",
        },
      },
    ],
  },
};

const ThreeCTrading = () => {
  const { lang } = useContext(LanguageContext);
  const { title, subtitle, cards } = content[lang] || content.en;

  const formatItemText = (text) => {
    const parts = text.split(/(\(Nuevo\)|\(New\))/gi);

    return parts.map((part, index) => {
      if (/^\((Nuevo|New)\)$/i.test(part)) {
        return (
          <span key={`${text}-highlight-${index}`} className="threec-tag--new">
            {part}
          </span>
        );
      }
      return <span key={`${text}-part-${index}`}>{part}</span>;
    });
  };

  const renderOriginalPrice = (text) => {
    if (!text) return null;
    const match = text.match(/\s*(\$?\d+[\d.,]*)/);

    if (!match) {
      return text;
    }

    const amount = match[1];
    const rest = text.slice(match.index + amount.length).trimStart();

    return (
      <>
        <span className="threec-card__original-amount">{amount}</span>
        {rest ? ` ${rest}` : ""}
      </>
    );
  };

  const renderBadge = (badge) => {
    if (!badge) return null;
    if (Array.isArray(badge)) {
      return badge.map((line, idx) => (
        <span key={`badge-${line}-${idx}`}>{line}</span>
      ));
    }
    return <span>{badge}</span>;
  };

  return (
    <div className="threec-page">
      <div className="threec-container">
        <header className="threec-header">
          <p className="threec-subtitle">{subtitle}</p>
          <h1>{title}</h1>
        </header>

        <section className="threec-grid">
          {cards.map((card) => (
            <article key={card.id} className="threec-card">
              <div className="threec-card__header">
                <p className="threec-card__title">{card.title}</p>
                {card.badge && (
                  <span className="threec-card__badge">{renderBadge(card.badge)}</span>
                )}
              </div>

              {card.sections.map((section) => (
                <div key={section.heading} className="threec-section">
                  <h3>{section.heading}</h3>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{formatItemText(item)}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="threec-card__footer">
                <button type="button" className="threec-card__cta">
                  {card.pricing.current}
                </button>
                {card.pricing.original && (
                  <p className="threec-card__original">{renderOriginalPrice(card.pricing.original)}</p>
                )}
                <p className="threec-card__note">{card.pricing.note}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ThreeCTrading;
