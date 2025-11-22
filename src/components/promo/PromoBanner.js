import React, { useState, useEffect, useCallback, useContext } from 'react';
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
  countdownContainer: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginLeft: '10px',
  },
  countdownItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '40px',
  },
  countdownNumber: {
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  countdownLabel: {
    fontSize: '10px',
    textTransform: 'uppercase',
    opacity: 0.8,
  },
  countdownWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  countdownPrefix: {
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
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
    countdownPrefix: 'Starts in:',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  },
  es: {
    title: 'Black Friday',
    subtitle: '¡30% DESCUENTO! en packs anuales y lifetime',
    countdownPrefix: 'Inicia en:',
    days: 'Días',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos'
  }
};

const PromoBanner = () => {
  const { lang } = useContext(LanguageContext);
  const t = texts[lang] || texts['en']; // Por defecto inglés si no se encuentra el idioma
    const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const updateCountdown = useCallback(() => {
    const targetDate = new Date('2025-11-23T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft({
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    });
  }, []);

  useEffect(() => {
    // Ejecutar inmediatamente
    updateCountdown();
    
    // Configurar intervalo
    const timer = setInterval(updateCountdown, 1000);
    
    // Limpiar intervalo al desmontar
    return () => clearInterval(timer);
  }, [updateCountdown]);

  return (
    <div style={styles.banner}>
      <div style={styles.text}>
        {t.title} <BoltIcon /> {t.subtitle}
      </div>

      <div style={styles.countdownWrapper}>
        <span style={styles.countdownPrefix}>{t.countdownPrefix}</span>
        <div style={styles.countdownContainer}>
        <div style={styles.countdownItem}>
          <div style={styles.countdownNumber}>{timeLeft.days}</div>
          <div style={styles.countdownLabel}>{t.days}</div>
        </div>
        <div>:</div>
        <div style={styles.countdownItem}>
          <div style={styles.countdownNumber}>{timeLeft.hours}</div>
          <div style={styles.countdownLabel}>{t.hours}</div>
        </div>
        <div>:</div>
        <div style={styles.countdownItem}>
          <div style={styles.countdownNumber}>{timeLeft.minutes}</div>
          <div style={styles.countdownLabel}>{t.minutes}</div>
        </div>
        <div>:</div>
        <div style={styles.countdownItem}>
          <div style={styles.countdownNumber}>{timeLeft.seconds}</div>
          <div style={styles.countdownLabel}>{t.seconds}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
