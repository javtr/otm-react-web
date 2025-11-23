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
              "Pack OTM Trading, 1 año",
              "Curso de videos prácticos estrategias continuaciones.",
              "Curso estrategia continuaciones",
            ],
          },
          {
            heading: "Logic Indicators Anual PLUS",
            items: [
              "Pack Logic Indicators, 1 año",
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
              "Discord privado, 1 año",
              "Operativa en vivo Lunes a Viernes, 1 año (Nuevo)",
              "Reuniones semanales, 1 año (Nuevo)",
            ],
          },
        ],
        pricing: {
          current: "$790 USD",
          original: "$1128 USD USA EL CODIGO: BLACK30",
          note: "Pago anual",
        },
        ctaOptions: [
          {
            label: "$790 USD",
            url: "https://otmtrading.lemonsqueezy.com/buy/d8396234-71c0-4634-acb0-6a6a246f6159",
          },
        ],
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
              "Pack OTM Trading, Lifetime",
              "Curso de videos prácticos estrategias continuaciones.",
              "Curso estrategia continuaciones",
            ],
          },
          {
            heading: "Logic Indicators PLUS (Lifetime)",
            items: [
              "Pack Logic Indicators, Lifetime",
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
              "Discord privado, 1 año",
              "Operativa en vivo Lunes a Viernes, 1 año (Nuevo)",
              "Reuniones semanales, 1 año (Nuevo)",
            ],
          },
        ],
        pricing: {
          current: "$1650 USD",
          original: "$2358 USD USA EL CODIGO: BLACK30",
          note: "Único pago de por vida",
        },
        ctaOptions: [
          {
            label: "$1650 USD",
            url: "https://otmtrading.lemonsqueezy.com/buy/a0c316d2-717e-4e5e-b011-37f558488c8e",
          },
          {
            label: "7 PAGOS DE $250",
            url: "https://otmtrading.lemonsqueezy.com/buy/ed683b51-92cd-4947-ac7e-0088a3633998",
          },
        ],
      },
    ],
  },
  en: {
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
              "Pack OTM Trading, 1 año",
              "Curso de videos prácticos estrategias continuaciones.",
              "Curso estrategia continuaciones",
            ],
          },
          {
            heading: "Logic Indicators Anual PLUS",
            items: [
              "Pack Logic Indicators, 1 año",
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
              "Discord privado, 1 año",
              "Operativa en vivo Lunes a Viernes, 1 año (Nuevo)",
              "Reuniones semanales, 1 año (Nuevo)",
            ],
          },
        ],
        pricing: {
          current: "$790 USD",
          original: "$990 USD",
          note: "Annual payment",
        },
        ctaOptions: [
          {
            label: "$790 USD",
            url: "https://otmtrading.lemonsqueezy.com/buy/d8396234-71c0-4634-acb0-6a6a246f6159",
          },
        ],
      },
      {
        id: "lifetime",
        title: "ELITE LIFETIME",
        badge: [
          "6 PAYMENTS OF $275",
          "7 PAGOS DE $250",
          "Códigos de descuento aplican solo a la primera cuota",
        ],
        sections: [
          {
            heading: "OTM Trading PLUS (Lifetime)",
            items: [
              "Pack OTM Trading, Lifetime",
              "Curso de videos prácticos estrategias continuaciones.",
              "Curso estrategia continuaciones",
            ],
          },
          {
            heading: "Logic Indicators PLUS (Lifetime)",
            items: [
              "Pack Logic Indicators, Lifetime",
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
              "Discord privado, 1 año",
              "Operativa en vivo Lunes a Viernes, 1 año (Nuevo)",
              "Reuniones semanales, 1 año (Nuevo)",
            ],
          },
        ],
        pricing: {
          current: "$1650 USD",
          original: "$1950 USD",
          note: "One-time payment for life",
        },
        ctaOptions: [
          {
            label: "$1650 USD",
            url: "https://otmtrading.lemonsqueezy.com/buy/a0c316d2-717e-4e5e-b011-37f558488c8e",
          },
          {
            label: "7 PAYMENTS OF $250",
            url: "https://otmtrading.lemonsqueezy.com/buy/ed683b51-92cd-4947-ac7e-0088a3633998",
          },
        ],
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
                {card.ctaOptions?.length ? (
                  <div className="threec-card__cta-group">
                    {card.ctaOptions.slice(0, 1).map(({ label, url }) => (
                      <a
                        key={`${card.id}-${label}`}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="threec-card__cta"
                      >
                        {label}
                      </a>
                    ))}
                    {card.ctaOptions.slice(1).map(({ label, url }) => (
                      <a
                        key={`${card.id}-link-${label}`}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="threec-card__link"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <button type="button" className="threec-card__cta">
                    {card.pricing.current}
                  </button>
                )}
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
