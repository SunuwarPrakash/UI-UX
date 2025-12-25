import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";

import dashboardImg from "./assets/dashboard.jpg";
import portfolioImg from "./assets/ecommerce.jpg";
import ecommerceImg from "./assets/ecommerce.jpg";

export const projects = [
  {
    title: "UI Dashboard",
    description: "Modern dashboard UI with charts and dark mode.",
    image: dashboardImg,
    link: "https://www.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX",
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio with animations.",
    image: portfolioImg,
    link: "#",
  },
  {
    title: "E-commerce UI",
    description: "Clean product layout and cart interaction.",
    image: ecommerceImg,
    link: "#",
  },
];

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    // Apply dark class to document for CSS variables to work
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home dark={dark} setDark={setDark} />}
        />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}
