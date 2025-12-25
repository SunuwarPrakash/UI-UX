import { motion } from "framer-motion";
import avatar from "../assets/undraw_developer-avatar_f6ac.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-32 grid md:grid-cols-2 gap-16 items-center overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric Pattern */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[rgb(var(--accent))]/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-lg" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-[rgb(var(--accent))]/20 to-transparent rounded-full blur-md" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgb(var(--accent)) 1px, transparent 1px),
              linear-gradient(90deg, rgb(var(--accent)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>
      {/* LEFT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-1 h-8 bg-gradient-to-b from-[rgb(var(--accent))] to-blue-600 rounded-full" />
          <motion.p 
            className="text-sm text-[rgb(var(--muted))] font-medium tracking-wider uppercase"
          >
            UI/UX Designer (Recent Graduate)
          </motion.p>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Prakash{" "}
          <motion.span 
            variants={itemVariants}
            className="text-[rgb(var(--accent))] relative"
          >
            Sunuwar
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-[rgb(var(--muted))] max-w-lg leading-relaxed font-light"
        >
          I create user-centered digital experiences with fresh insights and modern design 
          approaches, ready to help startups and businesses bring their innovative ideas to life.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex gap-4 pt-6"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))] to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View My Services
              <motion.svg 
                className="w-4 h-4"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-2xl border-2 border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] bg-[rgb(var(--surface))]/50 backdrop-blur-sm transition-all duration-500 font-semibold overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <motion.svg 
                className="w-4 h-4"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </motion.svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Professional Achievement Badge */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-[rgb(var(--border))] mt-8"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--accent))] to-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-[rgb(var(--text))]">UI/UX Design Certified</div>
                <div className="text-xs text-[rgb(var(--muted))]">Recent Graduate - Ready to Learn & Grow</div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-[rgb(var(--border))]" />
            
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-[rgb(var(--accent))]">🚀</div>
              <div>
                <div className="text-sm font-semibold text-[rgb(var(--text))]">Fresh Perspective</div>
                <div className="text-xs text-[rgb(var(--muted))]">Modern Design Approaches</div>
              </div>
            </div>
          </div>
        </motion.div>


      </motion.div>

      {/* RIGHT (PROFESSIONAL IMAGE & DESIGN ELEMENTS) */}
      <motion.div 
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex justify-center items-center relative"
      >
        {/* Background Design System */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary Gradient */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[rgb(var(--accent))]/15 to-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary Gradient */}
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-[rgb(var(--accent))]/10 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 right-20 w-3 h-3 bg-[rgb(var(--accent))]/30 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-32 left-16 w-2 h-2 bg-blue-400/40 rounded-full"
            animate={{
              y: [15, -15, 15],
              x: [5, -5, 5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-1/2 right-8 w-1 h-8 bg-gradient-to-b from-[rgb(var(--accent))]/20 to-transparent"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Main Image Container */}
        <div className="relative z-10">
          {/* Professional Image Frame */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))] via-blue-600 to-purple-600 rounded-3xl p-1 animate-pulse">
              <div className="w-full h-full bg-[rgb(var(--bg))] rounded-3xl" />
            </div>
            
            {/* Image */}
            <div className="relative bg-[rgb(var(--bg))] rounded-3xl p-2 shadow-2xl">
              <img
                src={avatar}
                alt="Prakash Sunuwar - UI/UX Designer"
                className="w-80 h-80 rounded-2xl object-cover"
              />
              
              {/* Overlay Elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent))]/10 via-transparent to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          {/* Professional Floating Badges */}
          <motion.div
            className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[rgb(var(--accent))] to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-center">
              <svg className="w-8 h-8 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="text-xs text-white font-bold">UI/UX</div>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-[rgb(var(--accent))] rounded-xl flex items-center justify-center shadow-xl"
            animate={{
              y: [5, -5, 5],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.div>
          
          {/* Design Process Indicators */}
          <motion.div
            className="absolute top-1/4 -left-8 flex flex-col gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            {['🎯', '📐', '✨'].map((icon, index) => (
              <motion.div
                key={index}
                className="w-8 h-8 bg-[rgb(var(--surface))] rounded-lg flex items-center justify-center shadow-lg border border-[rgb(var(--border))]"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2 + index * 0.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <span className="text-sm">{icon}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
