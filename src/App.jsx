import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "./assets/undraw_developer-avatar_f6ac.png";

import dashboardImg from "./assets/dashboard.jpg";
import portfolioImg from "./assets/ecommerce.jpg";
import ecommerceImg from "./assets/ecommerce.jpg";



export const projects = [
  {
    title: "UI Dashboard",
    description: "Modern dashboard UI with charts and dark mode.",
    image: dashboardImg,
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio with animations.",
    image: portfolioImg,
    tech: ["React", "Vite", "CSS"],
    link: "#",
  },
  {
    title: "E-commerce UI",
    description: "Clean product layout and cart interaction.",
    image: ecommerceImg,
    tech: ["React", "Tailwind"],
    link: "#",
  },
];


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const sections = ["Home", "About", "Projects", "Contact"];

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] transition-colors">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-[rgb(var(--bg))] border-b border-[rgb(var(--border))]">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center">
  {/* LOGO */}
  <span className="font-bold text-lg">Prakash</span>

  {/* RIGHT SIDE */}
  <div className="ml-auto flex items-center gap-8">
    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-8 text-sm font-medium">
      {sections.map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>

    {/* Actions */}
    <div className="flex items-center gap-4">
      <button
        onClick={() => setDark(!dark)}
        className="w-9 h-9 rounded-lg border border-[rgb(var(--border))] flex items-center justify-center hover:bg-[rgb(var(--surface))] transition"
        aria-label="Toggle dark mode"
      >
        {dark ? "☀️" : "🌙"}
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden w-9 h-9 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {menuOpen ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>
    </div>
  </div>
</nav>


          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-[rgb(var(--border))]"
              >
                <ul className="px-6 py-6 space-y-4 text-sm">
                  {sections.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className="block text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* HERO */}
        <section
  id="home"
  className="max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-32 grid md:grid-cols-2 gap-16 items-center"
>
  {/* LEFT */}
  <div>
    <p className="text-sm text-[rgb(var(--muted))]">Hello, I’m</p>

    <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
      Prakash <span className="text-[rgb(var(--accent))]">Sunuwar</span>
    </h1>

    <p className="mt-6 text-[rgb(var(--muted))] max-w-md">
      Frontend developer focused on building clean, accessible, and responsive
      user interfaces with modern tools.
    </p>

    <div className="mt-8 flex gap-4">
      <a
        href="#projects"
        className="px-6 py-3 rounded-lg bg-[rgb(var(--accent))] text-white font-medium shadow hover:shadow-lg transition"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-6 py-3 rounded-lg border border-[rgb(var(--border))] hover:bg-[rgb(var(--surface))] transition"
      >
        Contact
      </a>
    </div>
  </div>

  {/* RIGHT (IMAGE) */}
  <div className="hidden md:flex justify-center">
    <div className="relative">
      {/* Gradient ring */}
      {/* <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-xl opacity-40" /> */}

      {/* Image */}
      <img
          src={avatar}
          alt="Prakash Sunuwar"
        className="relative w-64 h-64 rounded-full object-cover border-4 border-[rgb(var(--bg))] shadow-xl"
      />

    </div>
  </div>
        </section>


        {/* ABOUT */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 py-20 bg-[rgb(var(--surface))] rounded-lg my-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className="text-[rgb(var(--muted))] text-center max-w-3xl mx-auto">
            I’m a frontend-focused developer who builds responsive, accessible
            web interfaces. I focus on clean UI/UX and professional designs
            that work on all devices.
          </p>
        </section>

        {/* PROJECTS */}
        <section
  id="projects"
  className="max-w-7xl mx-auto px-4 sm:px-6 py-24"
>
  <h2 className="text-3xl font-bold mb-12">Projects</h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <article
        key={project.title}
        className="group rounded-xl border border-[rgb(var(--border))] overflow-hidden bg-[rgb(var(--card))] hover:shadow-lg transition"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-[rgb(var(--muted))]">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface))]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>


        {/* CONTACT */}
        {/* CONTACT */}
<section
  id="contact"
  className="max-w-7xl mx-auto px-4 sm:px-6 py-24"
>
  <div className="grid md:grid-cols-2 gap-16 items-start">
    
    {/* LEFT SIDE — TEXT */}
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Let’s Work Together
      </h2>

      <p className="text-[rgb(var(--muted))] max-w-md mb-6">
        Have a project in mind, a startup idea, or need help designing a
        product? Fill out the form and I’ll get back to you within 24 hours.
      </p>

      <div className="space-y-4 text-sm">
        <p>
          📧 <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:praksunuwar@gmail.com"
            className="text-[rgb(var(--accent))] hover:underline"
          >
            your@email.com
          </a>
        </p>

        <p>
          💼 <span className="font-medium">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/prakash-sunuwar-020556234/"
            target="_blank"
            className="text-[rgb(var(--accent))] hover:underline"
          >
            View Profile
          </a>
        </p>

        <p className="text-[rgb(var(--muted))]">
          Available for freelance, remote, and contract work.
        </p>
      </div>
    </div>

    {/* RIGHT SIDE — FORM */}
    <form
      action="https://formspree.io/f/xaqwzlla" // 👈 REPLACE THIS
      method="POST"
      className="bg-[rgb(var(--card))] p-8 rounded-2xl shadow-sm space-y-6"
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border))] bg-transparent focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border))] bg-transparent focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Project Details
        </label>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Tell me about your project, timeline, and goals…"
          className="w-full px-4 py-3 rounded-lg border border-[rgb(var(--border))] bg-transparent focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-[rgb(var(--accent))] text-[rgb(var(--bg))] font-medium hover:opacity-90 transition"
      >
        Send Message
      </button>

      <p className="text-xs text-[rgb(var(--muted))] text-center">
        I usually respond within 24 hours.
      </p>
    </form>
  </div>
</section>


        {/* FOOTER */}
        <footer className="py-8 text-center text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} Prakash Sunuwar
        </footer>
      </div>
    </div>
  );
}
