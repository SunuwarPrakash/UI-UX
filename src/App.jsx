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
    title: "UI Dashboard Design",
    description: "Comprehensive dashboard UI design with charts, data visualization, and dark mode support. Features modern component library and responsive layout.",
    image: dashboardImg,
    figmaEmbed: "https://embed.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=219-1571&embed-host=share",
    link: "https://www.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=219-1571&t=HJh2H7oY51ElM4eI-1",
    technologies: ["Figma", "UI/UX", "Design System"],
    category: "Dashboard"
  },
  {
    title: "Mobile App UI",
    description: "Modern mobile application interface design focusing on user experience and visual hierarchy. Includes onboarding flow and core features.",
    image: ecommerceImg,
    link: "#",
    technologies: ["Figma", "Mobile UI", "User Research"],
    category: "Mobile App"
  },
  {
    title: "E-commerce Platform",
    description: "Complete e-commerce platform design with product catalog, shopping cart, and checkout process. Optimized for conversion and user satisfaction.",
    image: portfolioImg,
    link: "#",
    technologies: ["Figma", "E-commerce", "Conversion Design"],
    category: "E-commerce"
  }
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
