import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile devices and touch capability
 * @returns {Object} - { isMobile, isTouch, isDesktop }
 */
export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check for touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);

    // Check for mobile viewport (tablet and below)
    const checkMobile = () => {
      const width = window.innerWidth;
      const isMob = width < 768; // Tailwind sm breakpoint
      setIsMobile(isMob);
      setIsDesktop(!isMob);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return { isMobile, isTouch, isDesktop };
}

/**
 * Hook to detect reduced motion preference
 * @returns {boolean} - true if user prefers reduced motion
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handler = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handler);

      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  return prefersReducedMotion;
}

