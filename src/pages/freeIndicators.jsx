import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import LanguageContext from "../context/langContext";
import { FreeIndicatorsDataEn, FreeIndicatorsDataEs } from "../assets/info/FreeIndicatorsData";
import { seoEn, seoEs } from "../assets/text/metas";
import '../assets/sass/_freeIndicators.scss';

const FreeIndicators = () => {
  const { indicatorId } = useParams();
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  const [indicators, setIndicators] = useState(FreeIndicatorsDataEn);
  const [seoData, setSeoData] = useState(seoEn);
  
  // Set indicators and SEO data based on language
  useEffect(() => {
    if (lang === "es") {
      setIndicators(FreeIndicatorsDataEs);
      setSeoData(seoEs);
    } else {
      setIndicators(FreeIndicatorsDataEn);
      setSeoData(seoEn);
    }
  }, [lang]);

  // Get active indicator data based on URL parameter
  const activeIndicator = indicators.find(ind => ind.id === indicatorId) || indicators[0];

  // Update URL when tab changes
  const handleTabChange = (tabId) => {
    navigate(`/free-indicators/${tabId}`, { replace: true });
  };

  // Update document title and description when indicator changes
  useEffect(() => {
    if (activeIndicator) {
      document.title = `${activeIndicator.title} | ${seoData.title}`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', activeIndicator.description);
      }
    }
  }, [activeIndicator, seoData]);

  // If no indicator is found, redirect to the first one
  useEffect(() => {
    if (indicators.length > 0 && !activeIndicator) {
      navigate(`/free-indicators/${indicators[0].id}`, { replace: true });
    }
  }, [indicators, activeIndicator, navigate]);

  if (!activeIndicator) return null;

  return (
    <div className="free-indicators">
      <Helmet>
        <title>{`${activeIndicator.title} | ${seoData.title}`}</title>
        <meta name="description" content={activeIndicator.description} />
      </Helmet>
      
      <div className="free-indicators__header">
        <h1>{lang === 'es' ? 'Indicadores Gratuitos' : 'Free Indicators'}</h1>
        <p>
          {lang === 'es' 
            ? 'Descarga nuestros indicadores gratuitos para mejorar tu análisis técnico.'
            : 'Download our free indicators to enhance your technical analysis.'}
        </p>
      </div>

      <div className="free-indicators__tabs">
        {indicators.map((indicator) => (
          <button
            key={indicator.id}
            className={`tab-button ${activeIndicator.id === indicator.id ? 'active' : ''}`}
            onClick={() => handleTabChange(indicator.id)}
          >
            {indicator.title}
          </button>
        ))}
      </div>

      <div className="free-indicators__content">
        <div className="indicator-preview">
          <img 
            src={activeIndicator.image} 
            alt={activeIndicator.title}
            className="indicator-image"
          />
        </div>
        
        <div className="indicator-details">
          <h2>{activeIndicator.title}</h2>
          <p className="description">{activeIndicator.description}</p>
          
          <div className="features">
            <h3>{lang === 'es' ? 'Características' : 'Features'}</h3>
            <ul>
              {activeIndicator.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <a 
            href={activeIndicator.downloadLink} 
            className="download-button"
            download
          >
            {lang === 'es' ? 'Descargar Ahora' : 'Download Now'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreeIndicators;
