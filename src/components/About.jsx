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
    { name: "Figma & Adobe XD", level: 95 },
    { name: "User Research", level: 90 },
    { name: "Wireframing", level: 95 },
    { name: "Prototyping", level: 90 },
    { name: "Design Systems", level: 88 },
    { name: "Usability Testing", level: 85 }
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
              I'm a passionate UI/UX designer who specializes in creating beautiful, 
              functional, and user-centered digital experiences. With a keen eye for 
              design and deep understanding of user psychology, I help startups and 
              businesses build products that users love and businesses need.
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

              {/* Design Process */}
              <motion.div 
                variants={itemVariants}
                className="mt-16"
              >
                <h3 className="text-3xl font-bold text-center mb-12">My Design Process</h3>
                <div className="grid md:grid-cols-5 gap-6">
                  {[
                    { step: "01", title: "Research", description: "User interviews, competitive analysis, and market research to understand user needs.", icon: "🔍" },
                    { step: "02", title: "Ideate", description: "Brainstorming sessions, sketching, and defining user personas and journeys.", icon: "💡" },
                    { step: "03", title: "Design", description: "Creating wireframes, prototypes, and high-fidelity designs in Figma.", icon: "🎨" },
                    { step: "04", title: "Test", description: "Usability testing, A/B testing, and gathering user feedback for iterations.", icon: "🧪" },
                    { step: "05", title: "Launch", description: "Finalizing designs, creating design systems, and supporting implementation.", icon: "🚀" }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-6 bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ y: -5, scale: 1.02 }}
                      variants={itemVariants}
                    >
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>
                      <div className="text-xs font-bold text-[rgb(var(--accent))] mb-2">
                        {process.step}
                      </div>
                      <h4 className="text-lg font-bold mb-3 group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                        {process.title}
                      </h4>
                      <p className="text-sm text-[rgb(var(--muted))] leading-relaxed">
                        {process.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills Bars */}
              <motion.div 
                variants={itemVariants}
                className="mt-16"
              >
                <h3 className="text-3xl font-bold text-center mb-8">Core Design Skills</h3>
                <div className="max-w-4xl mx-auto space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-[rgb(var(--text))]">
                          {skill.name}
                        </span>
                        <span className="text-sm text-[rgb(var(--muted))]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-[rgb(var(--surface))] rounded-full h-3 border border-[rgb(var(--border))]">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 rounded-full relative overflow-hidden"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
