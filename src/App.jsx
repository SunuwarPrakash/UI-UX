import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";

import dashboardImg from "./assets/dashboard.jpg";
import portfolioImg from "./assets/ecommerce.jpg";
import ecommerceImg from "./assets/ecommerce.jpg";
import foodHubImg from "./assets/FoodApp_mockup.png";
import furniImg from "./assets/furniture_Mockup.png";
import hotelImg from "./assets/Hotelwebsite_Mockup.png";

export const projects = [
  {
    title: "FoodHub - Food Delivery App",
    description: "Complete food ordering and delivery mobile application design with seamless user experience for browsing restaurants, placing orders, and tracking deliveries. Features intuitive navigation, real-time order tracking, and modern UI components optimized for food technology.",
    image: foodHubImg,
    figmaEmbed: "https://embed.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=219-1571&embed-host=share",
    link: "https://www.figma.com/proto/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=219-1571&t=HJh2H7oY51ElM4eI-1",
    technologies: ["Figma", "Mobile UI", "Food Tech"],
    category: "Food Delivery"
  },
  {
    title: "Furni - Modern Interior E-commerce",
    description: "Complete interior design e-commerce platform featuring modern furniture collections, seamless shopping experience, and intuitive product discovery. Includes advanced filtering, wishlist functionality, and optimized checkout process for home decor enthusiasts.",
    image: furniImg,
    figmaEmbed: "https://embed.figma.com/proto/UJXukoCvPOeNN52YHpND6P/Furni-Interior?node-id=201-2347&embed-host=share",
    link: "https://www.figma.com/proto/UJXukoCvPOeNN52YHpND6P/Furni-Interior?node-id=201-2347&t=wKh5Yc1qZ6gZ9mKc-1",
    technologies: ["Figma", "E-commerce", "Interior Design"],
    category: "E-commerce"
  },
  {
    title: "The Verdant Peak – Eco-Luxury Hotel Website",
    description: "Stunning eco-luxury hotel website featuring elegant design, seamless booking experience, and immersive visual storytelling. Showcases sustainable luxury with modern UI components, room previews, amenities showcase, and intuitive reservation flow for an unforgettable guest experience.",
    image: hotelImg,
    figmaEmbed: "https://embed.figma.com/proto/Wn4hWdLnv0SMhoUmzBomx2/Hotel-website?page-id=0%3A1&node-id=8-2&viewport=-2106%2C196%2C0.18&t=JilXb6MZ4PgXlJl3-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8%3A2&hide-ui=1&embed-host=share",
    link: "https://www.figma.com/proto/Wn4hWdLnv0SMhoUmzBomx2/Hotel-website?page-id=0%3A1&node-id=8-2&viewport=-2106%2C196%2C0.18&t=JilXb6MZ4PgXlJl3-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8%3A2&hide-ui=1",
    technologies: ["Figma", "Web Design", "Eco-Luxury", "Hospitality"],
    category: "Hotel Website"
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
