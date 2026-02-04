import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Import custom hooks
import useMobile from "../hooks/useMobile";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const { isMobile, isTouch, isDesktop } = useMobile();

  // Use motion values for smooth performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Scale transform for click effect
  const clickScale = useTransform(cursorX, [-100, 2000], [1, 0.8]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e) => {
    if (isTouch) return; // Don't track mouse on touch devices
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    setIsVisible(true);
  }, [mouseX, mouseY, isTouch]);

  // Handle click states
  const handleMouseDown = useCallback(() => {
    if (isTouch) return;
    setIsClicking(true);
  }, [isTouch]);

  const handleMouseUp = useCallback(() => {
    if (isTouch) return;
    setIsClicking(false);
  }, [isTouch]);

  // Handle hover detection for interactive elements
  const handleMouseOver = useCallback((e) => {
    if (isTouch) return;
    
    const isInteractive =
      e.target.tagName === "A" ||
      e.target.tagName === "BUTTON" ||
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.getAttribute("role") === "button" ||
      e.target.closest("a") ||
      e.target.closest("button") ||
      e.target.closest("[data-cursor-hover]");
    
    setHoveringInteractive(!!isInteractive);
  }, [isTouch]);

  useEffect(() => {
    // Only show custom cursor on non-touch desktop devices
    if (isTouch || isMobile) {
      return;
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", () => setIsVisible(false));
      document.removeEventListener("mouseenter", () => setIsVisible(true));
    };
  }, [isTouch, isMobile, handleMouseMove, handleMouseDown, handleMouseUp, handleMouseOver]);

  // Don't render on touch devices or mobile
  if (isTouch || isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : hoveringInteractive ? 1.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.15 },
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="w-8 h-8 rounded-full border-2 border-[rgb(var(--accent))]"
          animate={{
            scale: hoveringInteractive ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[rgb(var(--accent))] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.5 : 1,
          }}
        />
      </motion.div>

      {/* Trailing particles */}
      <Trail isTouch={isTouch} />
    </>
  );
}

// Trail component for particle effects
function Trail({ isTouch }) {
  const [particles, setParticles] = useState([]);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Throttle particle creation for performance
      const now = Date.now();
      if (now - lastUpdateRef.current < 50) return; // Limit to 20 particles per second
      lastUpdateRef.current = now;

      // Add new particle on move (reduced probability for performance)
      if (Math.random() > 0.85) {
        const id = now;
        const colors = [
          "rgb(var(--accent))",
          "#3b82f6",
          "#8b5cf6",
          "#ec4899",
          "#10b981",
        ];
        
        setParticles((prev) => [
          ...prev.slice(-6), // Reduced from 8 to 6 for better performance
          {
            id,
            x: e.clientX,
            y: e.clientY,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 5 + 2,
          },
        ]);
      }
    };

    // Clean up old particles - faster cleanup for better performance
    const interval = setInterval(() => {
      const now = Date.now();
      setParticles((prev) =>
        prev.filter((p) => now - p.id < 400) // Reduced from 500ms to 400ms
      );
    }, 40); // Increased check frequency for smoother cleanup

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY, isTouch]);

  return (
    <div className="fixed pointer-events-none z-[9998]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: 0,
            top: 0,
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ x: particle.x, y: particle.y, opacity: 1, scale: 1 }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 40,
            y: particle.y + (Math.random() - 0.5) * 40,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

