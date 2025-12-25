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
    { name: "Figma & Design Tools", level: 80 },
    { name: "User Research Methods", level: 75 },
    { name: "Wireframing & Prototyping", level: 85 },
    { name: "UI Design & Visual Design", level: 78 },
    { name: "User Testing & Analysis", level: 70 },
    { name: "Design Thinking Process", level: 82 }
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
              I'm a passionate UI/UX designer who recently completed my design certification 
              and is excited to start creating meaningful digital experiences. With fresh 
              knowledge in user-centered design and a strong foundation in design thinking, 
              I'm ready to help bring innovative ideas to life.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6 text-center">
              <h3 className="text-3xl font-bold mb-8">My Journey</h3>
              <div className="space-y-6 text-[rgb(var(--muted))] leading-relaxed text-lg">
                <p>
                  My journey into UI/UX design began with a curiosity about how user 
                  experiences are created. Through my recent certification program, 
                  I've gained comprehensive knowledge in design thinking, user research, 
                  and the complete design process.
                </p>
                <p>
                  During my studies, I've completed several design projects that have 
                  strengthened my skills in wireframing, prototyping, and user testing. 
                  Each project reinforced my belief that great design starts with 
                  understanding user needs and solving real problems.
                </p>
                <p>
                  Now I'm eager to apply my fresh knowledge and enthusiasm to real-world 
                  projects. I'm actively learning about industry trends, studying successful 
                  designs, and preparing to collaborate with teams to create meaningful 
                  digital experiences.
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

              {/* Skills Section */}
              <motion.div 
                variants={itemVariants}
                className="mt-16"
              >
                <h3 className="text-3xl font-bold text-center mb-8">My Design Skills</h3>
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 rounded-full flex-shrink-0" />
                        <span className="text-[rgb(var(--text))] font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
