import React, { useState, useMemo, useEffect } from "react";
import "./App.css";
import "./App.scss";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Risk from "./pages/Risk";
import FeaturesPage from "./pages/featuresPage";
import BuyPageSuscription from "./pages/buyPageSuscription";
import Master from "./pages/master";
import ContactForm from "./components/pure/form/contactForm";
import Order from "./pages/order";
import LicenceForm from "./components/pure/form/licenceForm";
import LanguageContext from "./context/langContext";
import Blog from "./pages/blog";
import BlogCont from "./components/container/blogCont";
import Error404 from "./components/pure/404";
import InstalationPage from "./pages/InstalationPage";
import Policies from "./pages/policies";
import NewHome from "./pages/NewHome";
import FreeIndicators from "./pages/freeIndicators";
import ThreeCTrading from "./pages/ThreeCTrading";

export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "es";
    const langStorage = localStorage.getItem("otm_lang");
    if (langStorage === "en" || langStorage === "es") {
      return langStorage;
    }
    localStorage.setItem("otm_lang", "es");
    return "es";
  });
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  // Idioma
  useEffect(() => {
    const langStorage = localStorage.getItem("otm_lang");
    if (langStorage === "en" || langStorage === "es") {
      setLang(langStorage);
    } else {
      localStorage.setItem("otm_lang", "es");
      setLang("es");
    }
  }, []);

  // === Lemon Squeezy: persistencia de ?aff en rutas con enlaces a productos ===
  const location = useLocation();

  useEffect(() => {
    const url = new URL(window.location.href);
    const currentAff = url.searchParams.get("aff");

    // Rutas donde quieres mantener visible ?aff (incluye subrutas)
    const allowPrefixes = [
      "/buy", 
      "/order", 
      "/features", 
      "/free-indicators", 
      "/free_indicators", 
      "/"
    ];

    // Normaliza el path (quita slash final excepto si es "/")
    let path = location.pathname;
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

    const isAllowed = allowPrefixes.some((p) => path === p || path.startsWith(p + "/"));

    if (currentAff) {
      // Si llegó un ?aff, guárdalo para mantenerlo en navegación SPA
      sessionStorage.setItem("lsq_aff", currentAff);
    } else {
      // Si no hay ?aff en la URL pero tenemos uno guardado y la ruta está permitida, lo reinyectamos
      const saved = sessionStorage.getItem("lsq_aff");
      if (saved && isAllowed) {
        url.searchParams.set("aff", saved);
        window.history.replaceState({}, "", url.toString());
        return; // ya actualizamos la URL
      }
    }

    // (Opcional) si hay ?aff en una ruta NO permitida, limpiarlo para no contaminar SEO/analytics
    if (currentAff && !isAllowed) {
      url.searchParams.delete("aff");
      window.history.replaceState({}, "", url.toString());
    }
  }, [location.pathname]);
  // === Fin Lemon Squeezy ===

  return (
    <LanguageContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<FeaturesPage />} />
            <Route path="features/:title" element={<FeaturesPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:title" element={<BlogCont />} />
            <Route path="buy" element={<BuyPageSuscription />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="risk" element={<Risk />} />
            <Route path="policies" element={<Policies />} />
            <Route path="install" element={<InstalationPage />} />
            <Route path="new-home" element={<NewHome />} />
            <Route path="3ctrading" element={<ThreeCTrading />} />
            
            {/* Old URL for backward compatibility - redirect to first indicator */}
            <Route 
              path="free_indicators" 
              element={<Navigate to="/free-indicators/deltabar" replace />} 
            />
            
            {/* New URL structure with indicator ID */}
            <Route path="free-indicators">
              <Route index element={<Navigate to="deltabar" replace />} />
              <Route path=":indicatorId" element={<FreeIndicators />} />
            </Route>
            
            <Route path="*" element={<Error404 />} />
          </Route>

          <Route path="/order/:id" element={<Order />} />
          <Route path="/licence" element={<LicenceForm />} />
          <Route path="master" element={<Master />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}