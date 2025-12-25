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

      {/* Modern Mobile Menu - Slide Out Panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[rgb(var(--bg))] shadow-2xl z-50 md:hidden border-l border-[rgb(var(--border))]"
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-[rgb(var(--border))]">
                <motion.h2 
                  className="text-xl font-bold bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Navigation
                </motion.h2>
                
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-[rgb(var(--surface))] border border-[rgb(var(--border))] flex items-center justify-center hover:bg-[rgb(var(--card))] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="px-6 py-8">
                <nav className="space-y-4">
                  {sections.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center p-4 rounded-2xl bg-[rgb(var(--surface))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-all duration-300 relative overflow-hidden"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      {/* Hover Background Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))]/10 to-blue-600/10 rounded-2xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Icon for each section */}
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 flex items-center justify-center mr-4 relative z-10">
                        {item === "Home" && (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        )}
                        {item === "About" && (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                        {item === "Services" && (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        )}
                        {item === "Projects" && (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        )}
                        {item === "Contact" && (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      
                      <div className="flex-1 relative z-10">
                        <h3 className="font-semibold text-[rgb(var(--text))] group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                          {item}
                        </h3>
                        <p className="text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--text))] transition-colors duration-300">
                          {item === "Home" && "Welcome to my portfolio"}
                          {item === "About" && "Learn more about me"}
                          {item === "Services" && "UI/UX design services"}
                          {item === "Projects" && "View my work"}
                          {item === "Contact" && "Get in touch"}
                        </p>
                      </div>
                      
                      <motion.div
                        className="text-[rgb(var(--muted))] group-hover:text-[rgb(var(--accent))] transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.a>
                  ))}
                </nav>

                {/* Quick Actions Section */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-[rgb(var(--border))]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="text-sm font-semibold text-[rgb(var(--muted))] uppercase tracking-wider mb-4">
                    Quick Actions
                  </h4>
                  <div className="space-y-3">
                    <motion.a
                      href="mailto:praksunuwar@gmail.com"
                      className="flex items-center p-3 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-[rgb(var(--text))]">Email Me</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/prakash-sunuwar-020556234/"
                      target="_blank"
                      className="flex items-center p-3 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-[rgb(var(--text))]">LinkedIn</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
