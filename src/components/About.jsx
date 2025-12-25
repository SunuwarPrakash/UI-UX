import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 88 }
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[rgb(var(--surface))] rounded-3xl p-8 md:p-16 border border-[rgb(var(--border))] relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[rgb(var(--accent))]/5 to-transparent rounded-full -mr-32 -mt-32" />
        
        <div className="relative">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed"
            >
              I'm a passionate frontend developer who loves creating beautiful, 
              functional, and user-centered digital experiences. With a keen eye for 
              design and a strong technical foundation, I bridge the gap between 
              aesthetics and functionality.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6 text-center">
              <h3 className="text-3xl font-bold mb-8">My Journey</h3>
              <div className="space-y-6 text-[rgb(var(--muted))] leading-relaxed text-lg">
                <p>
                  What started as curiosity about how websites work has evolved into 
                  a passion for creating exceptional user experiences. I believe that 
                  great design is invisible—it just works seamlessly.
                </p>
                <p>
                  Over the past years, I've had the privilege of working on diverse 
                  projects, from simple landing pages to complex web applications. 
                  Each project has taught me something new and reinforced my belief 
                  that attention to detail makes all the difference.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>

              {/* Fun Facts */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                <div className="text-center p-6 bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">☕</div>
                  <div className="text-sm text-[rgb(var(--muted))] font-medium">Coffee Enthusiast</div>
                </div>
                <div className="text-center p-6 bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">🌙</div>
                  <div className="text-sm text-[rgb(var(--muted))] font-medium">Night Owl</div>
                </div>
                <div className="text-center p-6 bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">🎯</div>
                  <div className="text-sm text-[rgb(var(--muted))] font-medium">Goal Oriented</div>
                </div>
                <div className="text-center p-6 bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-[rgb(var(--accent))] mb-2">🚀</div>
                  <div className="text-sm text-[rgb(var(--muted))] font-medium">Innovation Driven</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
