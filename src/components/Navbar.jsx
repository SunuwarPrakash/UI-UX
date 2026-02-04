import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ dark, setDark, menuOpen, setMenuOpen, sections }) {
  const menuRef = useRef(null);
  const menuOverlayRef = useRef(null);

  // Handle escape key
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  }, [setMenuOpen]);

  // Handle body scroll lock
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [menuOpen, handleKeyDown]);

  // Close menu when clicking overlay
  const handleOverlayClick = (e) => {
    if (e.target === menuOverlayRef.current) {
      setMenuOpen(false);
    }
  };

  // Handle navigation click
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Header */}
      <header 
        className="sticky top-0 z-50 bg-[rgb(var(--bg))] border-b border-[rgb(var(--border))] backdrop-blur-lg bg-opacity-95 supports-[backdrop-filter]:bg-[rgb(var(--bg))]/80"
        style={{ 
          paddingBottom: 'env(safe-area-inset-top, 0px)',
          paddingTop: 'env(safe-area-inset-top, 0px)'
        }}
      >
        <nav 
          className="max-w-7xl mx-auto px-4 sm:px-6 h-[calc(60px+env(safe-area-inset-top,0px))] flex items-center"
          style={{ minHeight: '60px' }}
        >
          {/* Logo - Left */}
          <motion.a
            href="#home"
            className="flex items-center flex-shrink-0"
            whileTap={{ scale: 0.98 }}
            aria-label="Go to home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[rgb(var(--accent))] to-blue-600 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white sm:w-[18px] sm:h-[18px]">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" opacity="0.8"/>
              </svg>
            </div>
            <span className="font-bold text-base sm:text-lg ml-2 sm:ml-2.5 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
              Prakash
            </span>
          </motion.a>

          {/* Desktop Menu - Hidden on mobile */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium ml-auto mr-4">
            {sections.map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition-colors duration-200 relative py-2"
                  whileHover={{ y: -1 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(var(--accent))] transition-all duration-300 hover:w-full" />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Desktop Dark Mode Toggle - Hidden on mobile */}
          <motion.button
            onClick={() => setDark(!dark)}
            className="hidden lg:flex relative w-9 h-5 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] items-center transition-all duration-200 mr-2 xl:mr-4"
            whileTap={{ scale: 0.95 }}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-[rgb(var(--accent))] shadow-sm"
              animate={{ left: dark ? 19 : 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </motion.button>

          {/* Hamburger Menu Button - Visible only on mobile */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-9 h-9 flex items-center justify-center md:hidden ml-auto flex-shrink-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.95 }}
          >
            {/* Hamburger Lines */}
            <div className="relative w-6 h-4.5">
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full origin-center"
                animate={{ 
                  top: menuOpen ? "50%" : "0%",
                  transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "translateY(0) rotate(0)",
                  opacity: menuOpen ? 1 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full top-1/2 -translate-y-1/2"
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-[rgb(var(--text))] rounded-full bottom-0"
                animate={{ 
                  top: menuOpen ? "50%" : "100%",
                  transform: menuOpen ? "translateY(-50%) rotate(-45deg)" : "translateY(0) rotate(0)",
                  opacity: menuOpen ? 1 : 1
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              ref={menuOverlayRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              onClick={handleOverlayClick}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            />

            {/* Slide-out Menu Panel - Right Side */}
            <motion.aside
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                mass: 0.8
              }}
              className="fixed top-0 right-0 h-full z-50 md:hidden flex flex-col"
              style={{ 
                width: 'min(85vw, 320px)',
                maxWidth: '85vw',
                paddingBottom: 'env(safe-area-inset-bottom, 20px)'
              }}
            >
              {/* Menu Header */}
              <div 
                className="flex items-center justify-between px-5 py-4 border-b border-[rgb(var(--border))] flex-shrink-0"
                style={{ paddingTop: 'calc(16px + env(safe-area-inset-top, 0px))' }}
              >
                <span className="font-semibold text-base">Menu</span>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-[rgb(var(--surface))] border border-[rgb(var(--border))] flex items-center justify-center flex-shrink-0"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav 
                className="flex-1 overflow-y-auto px-4 py-4"
                style={{ 
                  paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 20px))',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                <ul className="space-y-1">
                  {sections.map((item, index) => (
                    <li key={item}>
                      <motion.a
                        href={`#${item.toLowerCase()}`}
                        onClick={handleNavClick}
                        className="flex items-center px-4 py-4 min-h-[48px] rounded-lg text-[rgb(var(--text))] hover:bg-[rgb(var(--surface))] active:bg-[rgb(var(--surface))] transition-colors duration-150"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + index * 0.03 }}
                        whileTap={{ scale: 0.98 }}
                        role="menuitem"
                      >
                        <span className="font-medium text-[17px] leading-normal">{item}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-[rgb(var(--border))] my-4" />

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <motion.a
                    href="mailto:praksunuwar@gmail.com"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 w-full py-4 min-h-[48px] rounded-xl bg-[rgb(var(--accent))] text-white font-semibold text-[17px] leading-normal"
                    whileTap={{ scale: 0.98 }}
                    role="button"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get in Touch
                  </motion.a>
                </motion.div>
              </nav>

              {/* Menu Footer */}
              <div 
                className="px-5 py-4 border-t border-[rgb(var(--border))] flex-shrink-0"
                style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 20px))' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgb(var(--muted))]">Dark Mode</span>
                  <motion.button
                    onClick={() => setDark(!dark)}
                    className="relative w-11 h-6 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center transition-all duration-200"
                    whileTap={{ scale: 0.95 }}
                    aria-label={dark ? "Enable light mode" : "Enable dark mode"}
                  >
                    <motion.div
                      className="absolute w-5 h-5 rounded-full bg-[rgb(var(--accent))] shadow-sm"
                      animate={{ left: dark ? 24 : 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

