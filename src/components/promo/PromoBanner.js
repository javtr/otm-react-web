import React, { useContext } from 'react';
import LanguageContext from '../../context/langContext';

// Estilos en línea para evitar problemas con Material-UI
const styles = {
  banner: {
    width: '100%',
    background: 'linear-gradient(90deg, #8B0000 0%, #FF0000 50%, #8B0000 100%)',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1100,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  },
  text: {
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  codeText: {
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: '#FFE08A',
  }
};

// Componente de icono de rayo simple
const BoltIcon = () => (
  <span style={{ margin: '0 5px' }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  </span>
);

// Textos en diferentes idiomas
const texts = {
  en: {
    title: 'Black Friday',
    subtitle: '30% OFF on annual & lifetime packs',
    code: 'Use code: BLACK30'
  },
  es: {
    title: 'Black Friday',
    subtitle: '¡30% DESCUENTO! en packs anuales y lifetime',
    code: 'Usa el código: BLACK30'
  }
};

const PromoBanner = () => {
  const { lang } = useContext(LanguageContext);
  const t = texts[lang] || texts['en']; // Por defecto inglés si no se encuentra el idioma

  return (
    <div style={styles.banner}>
      <div style={styles.text}>
        {t.title} <BoltIcon /> {t.subtitle}
      </div>
      <span style={styles.codeText}>{t.code}</span>
    </div>
  );
};

export default PromoBanner;
