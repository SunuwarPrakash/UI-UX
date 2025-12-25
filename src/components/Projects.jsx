import { motion } from "framer-motion";
import { projects } from "../App";
import { useState } from "react";

export default function Projects({ setActiveProject }) {
  const [activeModal, setActiveModal] = useState(null);
  const [modalType, setModalType] = useState(null);
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
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-[rgb(var(--surface))] text-[rgb(var(--muted))] border border-[rgb(var(--border))]"
                  >
                    {tech}
                  </span>
                )) || ['Figma', 'UI/UX', 'Design'].map((tech) => (
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
                <motion.button
                  onClick={() => {
                    setActiveModal(project);
                    setModalType('case-study');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2.5 text-sm rounded-xl bg-[rgb(var(--accent))] text-white font-medium text-center hover:shadow-lg transition-all duration-300"
                >
                  View Case Study
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    if (project.figmaEmbed) {
                      setActiveModal(project);
                      setModalType('preview');
                    } else {
                      window.open(project.link, '_blank');
                    }
                  }}
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

      {/* Project Modal */}
      {activeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[rgb(var(--border))]">
              <div>
                <h3 className="text-2xl font-bold text-[rgb(var(--text))]">{activeModal.title}</h3>
                <p className="text-[rgb(var(--muted))] mt-1">{activeModal.description}</p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 rounded-full bg-[rgb(var(--surface))] hover:bg-[rgb(var(--accent))] text-[rgb(var(--text))] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              {modalType === 'case-study' ? (
                // Case Study Content
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[rgb(var(--text))]">Project Overview</h4>
                    <p className="text-[rgb(var(--muted))] leading-relaxed">
                      {activeModal.description}
                    </p>
                  </div>

                  {/* Process Timeline */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[rgb(var(--text))]">Design Process</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                        <div>
                          <h5 className="font-semibold text-[rgb(var(--text))]">Research & Discovery</h5>
                          <p className="text-[rgb(var(--muted))] text-sm">User research, competitor analysis, and defining project goals</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                        <div>
                          <h5 className="font-semibold text-[rgb(var(--text))]">Wireframing & Prototyping</h5>
                          <p className="text-[rgb(var(--muted))] text-sm">Low-fidelity wireframes and interactive prototypes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                        <div>
                          <h5 className="font-semibold text-[rgb(var(--text))]">Visual Design</h5>
                          <p className="text-[rgb(var(--muted))] text-sm">High-fidelity designs, component library, and style guide</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                        <div>
                          <h5 className="font-semibold text-[rgb(var(--text))]">Testing & Iteration</h5>
                          <p className="text-[rgb(var(--muted))] text-sm">User testing, feedback incorporation, and final refinements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[rgb(var(--text))]">Key Challenges & Solutions</h4>
                    <div className="space-y-4">
                      <div className="bg-[rgb(var(--surface))] p-4 rounded-xl">
                        <h5 className="font-semibold text-[rgb(var(--text))] mb-2">Challenge</h5>
                        <p className="text-[rgb(var(--muted))] text-sm">Creating a clean, intuitive interface that works across different devices and user skill levels.</p>
                      </div>
                      <div className="bg-[rgb(var(--accent))]/10 p-4 rounded-xl border border-[rgb(var(--accent))]/20">
                        <h5 className="font-semibold text-[rgb(var(--accent))] mb-2">Solution</h5>
                        <p className="text-[rgb(var(--muted))] text-sm">Implemented a consistent design system with clear visual hierarchy, progressive disclosure, and responsive breakpoints.</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies & Skills */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-[rgb(var(--text))]">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeModal.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] border border-[rgb(var(--accent))]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-[rgb(var(--text))]">Key Features</h4>
                      <ul className="space-y-2 text-[rgb(var(--muted))] text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(var(--accent))] rounded-full"></div>
                          Responsive Design
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(var(--accent))] rounded-full"></div>
                          User-Centered Design
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(var(--accent))] rounded-full"></div>
                          Modern UI Components
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : modalType === 'preview' ? (
                // Preview Content (Figma Embed)
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-2 text-[rgb(var(--text))]">Design Preview</h4>
                    <p className="text-[rgb(var(--muted))] text-sm">Interact with the live Figma design below</p>
                  </div>
                  
                  {activeModal.figmaEmbed ? (
                    <div className="relative">
                      <iframe
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        width="100%"
                        height="600"
                        src={activeModal.figmaEmbed}
                        allowFullScreen
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🚀</div>
                      <h4 className="text-xl font-semibold text-[rgb(var(--text))] mb-2">Design Preview</h4>
                      <p className="text-[rgb(var(--muted))] mb-6">
                        This design preview is coming soon. Check back for interactive design exploration.
                      </p>
                      <motion.button
                        onClick={() => window.open(activeModal.link, '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        View Design
                      </motion.button>
                    </div>
                  )}
                </div>
              ) : (
                // Fallback content
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold text-[rgb(var(--text))] mb-2">Project Preview</h4>
                  <p className="text-[rgb(var(--muted))] mb-6">
                    This project showcase is coming soon. Check back for detailed case studies and design process documentation.
                  </p>
                  <motion.button
                    onClick={() => window.open(activeModal.link, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    View Project
                  </motion.button>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {activeModal.link && activeModal.link !== "#" && (
              <div className="p-6 border-t border-[rgb(var(--border))] bg-[rgb(var(--surface))]/50">
                <div className="flex justify-center gap-3">
                  {modalType === 'case-study' ? (
                    <motion.button
                      onClick={() => {
                        setModalType('preview');
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[rgb(var(--border))] text-[rgb(var(--text))] font-semibold hover:bg-[rgb(var(--surface))] transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Preview Design
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={() => {
                        setModalType('case-study');
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[rgb(var(--border))] text-[rgb(var(--text))] font-semibold hover:bg-[rgb(var(--surface))] transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Case Study
                    </motion.button>
                  )}
                  
                  <motion.a
                    href={activeModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Open in Figma
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </motion.a>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
