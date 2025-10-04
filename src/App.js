import React, { useState, useMemo, useEffect } from "react";
import "./App.css";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Risk from "./pages/Risk";
import FeaturesPage from "./pages/featuresPage";
import BuyPage from "./pages/buyPage";
import ExamplePage from "./pages/examplePage";
import BuyPageSuscription from "./pages/buyPageSuscription";
import Master from "./pages/master";
import ContactForm from "./components/pure/form/contactForm";
import Order from "./pages/order";
import LicenceForm from "./components/pure/form/licenceForm";
import LanguageContext from "../src/context/langContext";
import Blog from "./pages/blog";
import BlogCont from "./components/container/blogCont";
import Error404 from "./components/pure/404";
import InstalationPage from "./pages/InstalationPage";
import Policies from "./pages/policies";
import NewHome from "./pages/NewHome";

export default function App() {
  const [lang, setLang] = useState("");
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  // Idioma
  useEffect(() => {
    const langStorage = localStorage.getItem("otm_lang");
    if (langStorage === "en" || langStorage === "es") {
      setLang(langStorage);
    } else {
      localStorage.setItem("otm_lang", "en");
      setLang("en");
    }
  }, []);

  // === Lemon Squeezy: persistencia de ?aff en rutas con enlaces a productos ===
  const location = useLocation();

  useEffect(() => {
    const url = new URL(window.location.href);
    const currentAff = url.searchParams.get("aff");

    // Rutas donde quieres mantener visible ?aff (incluye subrutas)
    // Sugerido: páginas con CTAs a productos / checkout
    const allowPrefixes = ["/buy", "/order", "/features", "/"]; 
    // Si NO quieres mostrar ?aff en la home, quita "/" del array.

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
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>

            <Route path="features" element={<FeaturesPage></FeaturesPage>}></Route>
            <Route path="features/:title" element={<FeaturesPage></FeaturesPage>}></Route>

            <Route path="blog" element={<Blog></Blog>}></Route>
            <Route path="blog/:title" element={<BlogCont></BlogCont>}></Route>

            {/* <Route path="buy" element={<BuyPage></BuyPage>}></Route> */}
            <Route path="buy" element={<BuyPageSuscription></BuyPageSuscription>}></Route>

            <Route path="contact" element={<ContactForm></ContactForm>}></Route>
            <Route path="risk" element={<Risk ></Risk>}></Route>
            <Route path="policies" element={<Policies ></Policies>}></Route>
            <Route path="install" element={<InstalationPage ></InstalationPage>}></Route>
            <Route path="/new-home" element={<NewHome />}></Route>
          </Route>

          <Route path="/order/:id" element={<Order></Order>}></Route>
          <Route path="/licence" element={<LicenceForm></LicenceForm>}></Route>
          <Route path="master" element={<Master ></Master>}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}
