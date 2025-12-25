
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";

import dashboardImg from "./assets/dashboard.jpg";
import foodhubImg from "./assets/foodhub.jpg";
import portfolioImg from "./assets/ecommerce.jpg";
import ecommerceImg from "./assets/ecommerce.jpg";

export const projects = [
  {
    title: "FoodHub - Food Delivery App",
    description: "Complete food ordering and delivery mobile application design with seamless user experience for browsing restaurants, placing orders, and tracking deliveries. Features intuitive navigation and modern UI components.",
    image: foodhubImg,
    figmaEmbed: "https://embed.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=219-1571&embed-host=share",
    link: "https://www.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=219-1571&t=HJh2H7oY51ElM4eI-1",
    technologies: ["Figma", "Mobile UI", "Food Tech"],
    category: "Food Delivery"
  },
  {
    title: "Furni - Modern Interior E-commerce",
    description: "Complete modern interior e-commerce website design for browsing and purchasing furniture online. Features product catalog, advanced filtering, shopping cart, and seamless checkout experience optimized for furniture retail.",
    image: ecommerceImg,
    figmaEmbed: "https://embed.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=40-105&embed-host=share",
    link: "https://www.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=40-105&t=yd9kO7Wpu37Nvj91-1",
    technologies: ["Figma", "E-commerce", "Furniture Design"],
    category: "E-commerce"
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

