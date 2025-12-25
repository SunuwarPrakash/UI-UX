import { motion } from "framer-motion";
import { projects } from "../App";

export default function Projects({ setActiveProject }) {
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

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-[rgb(var(--muted))] max-w-2xl mx-auto"
        >
          A collection of projects showcasing modern UI/UX design and frontend development skills
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative rounded-2xl border border-[rgb(var(--border))] overflow-hidden bg-[rgb(var(--card))] hover:shadow-2xl transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                loading="lazy"
              />
              
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              
              {/* Floating Action Button */}
              <motion.button
                onClick={() => setActiveProject(project)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                  {project.title}
                </h3>
                <motion.span 
                  className="text-xs px-2 py-1 rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {index + 1}
                </motion.span>
              </div>

              <p className="text-sm text-[rgb(var(--muted))] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Tailwind', 'TypeScript'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-[rgb(var(--surface))] text-[rgb(var(--muted))] border border-[rgb(var(--border))]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.a
                  href={`/projects/${project.title.toLowerCase().replace(/\s/g, "-")}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2.5 text-sm rounded-xl bg-[rgb(var(--accent))] text-white font-medium text-center hover:shadow-lg transition-all duration-300"
                >
                  View Case Study
                </motion.a>
                
                <motion.button
                  onClick={() => setActiveProject(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 text-sm rounded-xl border-2 border-[rgb(var(--border))] hover:bg-[rgb(var(--surface))] transition-all duration-300 font-medium"
                >
                  Preview
                </motion.button>
              </div>
            </div>

            {/* Progress Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-400 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.article>
        ))}
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[rgb(var(--accent))] text-[rgb(var(--accent))] font-semibold hover:bg-[rgb(var(--accent))] hover:text-white transition-all duration-300"
        >
          Let's Work Together
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
