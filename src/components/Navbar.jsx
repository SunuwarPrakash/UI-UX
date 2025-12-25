import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ dark, setDark, menuOpen, setMenuOpen, sections }) {
  return (
    <header className="sticky top-0 z-50 bg-[rgb(var(--bg))] border-b border-[rgb(var(--border))] backdrop-blur-sm bg-opacity-95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center">
        {/* LOGO */}
        <motion.a
          href="#home"
          className="font-bold text-xl bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-[rgb(var(--accent))] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Prakash
        </motion.a>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium mr-4">
            {sections.map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition-all duration-300 py-2"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Professional Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDark(!dark)}
              className="relative w-12 h-6 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center transition-all duration-300 hover:border-[rgb(var(--accent))]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              <motion.div
                className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 shadow-lg flex items-center justify-center"
                animate={{ x: dark ? 26 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {dark ? (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.div>
            </motion.button>

            {/* Professional Hamburger Menu */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center group ml-2"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-5">
                <motion.span
                  className="absolute left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full"
                  animate={{
                    y: menuOpen ? 10 : 0,
                    rotate: menuOpen ? 45 : 0,
                    opacity: menuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full top-2.5"
                  animate={{
                    opacity: menuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full"
                  animate={{
                    y: menuOpen ? -10 : 20,
                    rotate: menuOpen ? -45 : 0,
                    opacity: menuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]"
          >
            <motion.ul 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="px-6 py-6 space-y-1"
            >
              {sections.map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-4 text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-[rgb(var(--surface))] rounded-lg transition-all duration-300 font-medium"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
