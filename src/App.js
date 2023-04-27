import React, { Component, useState, useMemo, useEffect } from "react";
import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import FeaturesPage from "./pages/featuresPage";
import BuyPage from "./pages/buyPage";
import ExamplePage from "./pages/examplePage";
import ContactForm from "./components/pure/form/contactForm";
import Order from "./pages/order";
import LicenceForm from "./components/pure/form/licenceForm";
import LanguageContext from "../src/context/langContext";
import Blog from "./pages/blog";
import BlogCont from "./components/container/blogCont";
import Error404 from "./components/pure/404";

export default function App() {
  const [lang, setLang] = useState("");
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  useEffect(() => {
    const langStorage = localStorage.getItem("otm_lang");

    if (langStorage == "en") {
      setLang("en");
    } else if (langStorage == "es") {
      setLang("es");
    } else {
      localStorage.setItem("otm_lang", lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route
              path="features"
              element={<FeaturesPage></FeaturesPage>}
            ></Route>

            <Route
              path="features/:title"
              element={<FeaturesPage></FeaturesPage>}
            ></Route>

            <Route path="blog" element={<Blog></Blog>}></Route>
            <Route path="blog/:title" element={<BlogCont></BlogCont>}></Route>
            <Route path="buy" element={<BuyPage></BuyPage>}></Route>
            <Route path="example" element={<ExamplePage></ExamplePage>}></Route>
            <Route path="contact" element={<ContactForm></ContactForm>}></Route>
          </Route>
          <Route path="/order/:id" element={<Order></Order>}></Route>
          <Route path="/licence" element={<LicenceForm></LicenceForm>}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}
