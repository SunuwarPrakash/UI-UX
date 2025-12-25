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
      className="max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-32 grid md:grid-cols-2 gap-16 items-center"
    >
      {/* LEFT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.p 
          variants={itemVariants}
          className="text-sm text-[rgb(var(--muted))] font-medium"
        >
          Hello, I'm
        </motion.p>

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
          className="text-lg text-[rgb(var(--muted))] max-w-md leading-relaxed"
        >
          Frontend developer focused on building clean, accessible, and responsive
          user interfaces with modern tools.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex gap-4 pt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl border-2 border-[rgb(var(--border))] hover:bg-[rgb(var(--surface))] transition-all duration-300 font-semibold"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-8 pt-8 border-t border-[rgb(var(--border))] mt-8"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[rgb(var(--accent))]">3+</div>
            <div className="text-sm text-[rgb(var(--muted))]">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[rgb(var(--accent))]">20+</div>
            <div className="text-sm text-[rgb(var(--muted))]">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[rgb(var(--accent))]">100%</div>
            <div className="text-sm text-[rgb(var(--muted))]">Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT (IMAGE) */}
      <motion.div 
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex justify-center items-center"
      >
        <div className="relative">
          {/* Gradient Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))]/20 to-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Image Container */}
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={avatar}
              alt="Prakash Sunuwar"
              className="relative w-64 h-64 rounded-full object-cover border-4 border-[rgb(var(--bg))] shadow-2xl"
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-sm"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚡
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
