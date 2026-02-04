import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../App";
import { useState, useEffect } from "react";

export default function Projects({ setActiveProject }) {
  const [activeModal, setActiveModal] = useState(null);
  const [modalType, setModalType] = useState("preview");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [activeModal]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          >
            Featured Projects
          </motion.h2>
          <p className="text-[rgb(var(--muted))] text-base md:text-lg max-w-2xl mx-auto">
            A collection of projects showcasing modern UI/UX design and frontend development skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group bg-[rgb(var(--card)] rounded-2xl overflow-hidden border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/30 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setActiveModal(project);
                setModalType("preview");
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[rgb(var(--surface))]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-[rgb(var(--accent))]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Index Badge */}
                <div className="absolute top-3 left-3 w-7 h-7 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[rgb(var(--text))] mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[rgb(var(--muted))] text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-[rgb(var(--surface))] text-[rgb(var(--muted))] border border-[rgb(var(--border))]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg hover:shadow-[rgb(var(--accent))]/25 transition-all duration-300"
          >
            Let's Work Together
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </section>

      {/* Professional Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-6xl max-h-[92vh] md:max-h-[90vh] bg-[rgb(var(--bg))] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b border-[rgb(var(--border))] flex-shrink-0">
                <div className="flex items-center gap-3 md:gap-4">
                  <h3 
                    id="modal-title" 
                    className="text-lg md:text-2xl font-bold text-[rgb(var(--text))]"
                  >
                    {activeModal.title}
                  </h3>
                  <span className="hidden sm:inline-flex px-3 py-1 text-xs font-medium rounded-full bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))]">
                    {activeModal.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* View on Figma Button */}
                  <motion.a
                    href={activeModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[rgb(var(--surface))] text-[rgb(var(--text))] hover:bg-[rgb(var(--border))] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    Open in Figma
                  </motion.a>
                  
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setActiveModal(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[rgb(var(--surface))] hover:bg-[rgb(var(--accent))] text-[rgb(var(--text))] hover:text-white transition-colors flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex items-center gap-1 px-4 md:px-8 py-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))]/30 flex-shrink-0 overflow-x-auto">
                <TabButton 
                  active={modalType === "preview"} 
                  onClick={() => setModalType("preview")}
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  }
                  label="Preview"
                />
                <TabButton 
                  active={modalType === "case-study"} 
                  onClick={() => setModalType("case-study")}
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                  label="Case Study"
                />
                <TabButton 
                  active={modalType === "details"} 
                  onClick={() => setModalType("details")}
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  label="Details"
                />
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                {modalType === "preview" && (
                  <PreviewTab modal={activeModal} />
                )}
                {modalType === "case-study" && (
                  <CaseStudyTab modal={activeModal} />
                )}
                {modalType === "details" && (
                  <DetailsTab modal={activeModal} />
                )}
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between gap-4 px-5 md:px-8 py-4 border-t border-[rgb(var(--border))] bg-[rgb(var(--surface))]/30 flex-shrink-0">
                <div className="hidden md:flex items-center gap-2 text-sm text-[rgb(var(--muted))]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Press ESC to close
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <motion.button
                    onClick={() => setActiveModal(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 text-sm font-medium rounded-xl border border-[rgb(var(--border))] text-[rgb(var(--text))] hover:bg-[rgb(var(--surface))] transition-colors"
                  >
                    Close
                  </motion.button>
                  <motion.a
                    href={activeModal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[rgb(var(--accent))] text-white hover:shadow-lg transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    View in Figma
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Tab Button Component
function TabButton({ active, onClick, icon, label }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
        active
          ? "bg-[rgb(var(--accent))] text-white shadow-lg"
          : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-[rgb(var(--surface))]"
      }`}
    >
      {icon}
      {label}
    </motion.button>
  );
}

// Preview Tab Component
function PreviewTab({ modal }) {
  return (
    <div className="p-4 md:p-8">
      {modal.figmaEmbed ? (
        <div className="space-y-6">
          {/* Figma Embed */}
          <div className="relative rounded-xl overflow-hidden bg-[rgb(var(--surface))] border border-[rgb(var(--border))]">
            <iframe
              width="100%"
              height={window.innerWidth < 768 ? "450" : "650"}
              src={modal.figmaEmbed}
              allowFullScreen
              className="w-full block"
              style={{ border: "none", minHeight: window.innerWidth < 768 ? "450px" : "650px" }}
              title={`${modal.title} Preview`}
            />
          </div>
          
          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[rgb(var(--surface))] rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))] mb-2">Project</h4>
              <p className="text-[rgb(var(--text))] font-medium">{modal.title}</p>
            </div>
            <div className="bg-[rgb(var(--surface))] rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))] mb-2">Category</h4>
              <p className="text-[rgb(var(--text))] font-medium">{modal.category}</p>
            </div>
            <div className="bg-[rgb(var(--surface))] rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))] mb-2">Link</h4>
              <motion.a
                href={modal.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="text-[rgb(var(--accent))] font-medium flex items-center gap-1"
              >
                Open in Figma
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-[rgb(var(--surface))] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[rgb(var(--muted))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-[rgb(var(--text))] mb-3">Preview Coming Soon</h4>
          <p className="text-[rgb(var(--muted))] mb-8 max-w-md mx-auto">
            This design preview is being prepared. You can view the full project in Figma.
          </p>
          <motion.a
            href={modal.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            </svg>
            Open in Figma
          </motion.a>
        </div>
      )}
    </div>
  );
}

// Case Study Tab Component
function CaseStudyTab({ modal }) {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Overview */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--text))] mb-4">Project Overview</h3>
          <p className="text-[rgb(var(--muted))] leading-relaxed text-base md:text-lg">
            {modal.description}
          </p>
        </div>

        {/* Process */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--text))] mb-4">Design Process</h3>
          <div className="space-y-4">
            <ProcessStep 
              number="1" 
              title="Research & Discovery" 
              description="Analyzed user needs, market trends, and competitive landscape to establish a solid foundation for the design direction."
            />
            <ProcessStep 
              number="2" 
              title="Wireframing & Prototyping" 
              description="Created low-fidelity wireframes to map out user flows and information architecture before moving to high-fidelity designs."
            />
            <ProcessStep 
              number="3" 
              title="Visual Design" 
              description="Applied design system, typography, and visual hierarchy to create polished, production-ready mockups."
            />
            <ProcessStep 
              number="4" 
              title="Testing & Iteration" 
              description="Validated designs through user testing and feedback, iterating to improve usability and visual appeal."
            />
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--text))] mb-4">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {modal.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] border border-[rgb(var(--accent))]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Process Step Component
function ProcessStep({ number, title, description }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-[rgb(var(--surface))]">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgb(var(--accent))] text-white font-bold flex items-center justify-center">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-[rgb(var(--text))] mb-1">{title}</h4>
        <p className="text-[rgb(var(--muted))] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Details Tab Component
function DetailsTab({ modal }) {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Project Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <DetailCard 
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            label="Project Title"
            value={modal.title}
          />
          <DetailCard 
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            }
            label="Category"
            value={modal.category}
          />
          <DetailCard 
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            label="Technologies"
            value={modal.technologies?.join(", ")}
          />
          <DetailCard 
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            }
            label="Project Link"
            value="View in Figma"
            isLink
            href={modal.link}
          />
        </div>

        {/* Description */}
        <div className="bg-[rgb(var(--surface))] rounded-xl p-6">
          <h3 className="font-semibold text-[rgb(var(--text))] mb-3">Description</h3>
          <p className="text-[rgb(var(--muted))] leading-relaxed">{modal.description}</p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-[rgb(var(--text))] mb-4">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <FeatureItem text="Modern UI/UX Design" />
            <FeatureItem text="Responsive Layout" />
            <FeatureItem text="User-Centered Approach" />
            <FeatureItem text="Professional Finish" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Detail Card Component
function DetailCard({ icon, label, value, isLink, href }) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-lg bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent))] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--muted))] mb-1">{label}</p>
        <p className="text-[rgb(var(--text))] font-medium">{value}</p>
      </div>
    </>
  );

  if (isLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--surface))] hover:bg-[rgb(var(--surface))]/80 transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--surface))]">
      {content}
    </div>
  );
}

// Feature Item Component
function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-[rgb(var(--surface))]">
      <svg className="w-5 h-5 text-[rgb(var(--accent))] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-[rgb(var(--text))] text-sm">{text}</span>
    </div>
  );
}

