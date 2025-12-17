import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "./assets/undraw_developer-avatar_f6ac.png";

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
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((p) => (
              <div
                key={p}
                className="bg-[rgb(var(--card))] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
                <h3 className="font-semibold text-lg">Project {p}</h3>
                <p className="text-[rgb(var(--muted))] text-sm mt-2">
                  Clean, responsive UI project built with modern frontend
                  practices.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-4 sm:px-6 py-20 bg-[rgb(var(--surface))] rounded-lg my-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-[rgb(var(--muted))] mb-6">
            Open to freelance, remote, or full-time opportunities.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block px-8 py-3 rounded-lg bg-[rgb(var(--accent))] text-[rgb(var(--bg))] font-medium hover:opacity-90 transition"
          >
            Email Me
          </a>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} Prakash Sunuwar
        </footer>
      </div>
    </div>
  );
}
