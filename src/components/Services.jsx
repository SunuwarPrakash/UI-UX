import { motion } from "framer-motion";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "User Research",
      features: ["User Interviews", "Competitive Analysis", "Journey Mapping", "Persona Development"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "UI/UX Design",
      features: ["Wireframes & Prototypes", "Visual Design", "Interaction Design", "Mobile-First"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Design Systems",
      features: ["Component Library", "Style Guides", "Design Tokens", "Documentation"]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Usability Testing",
      features: ["A/B Testing", "User Testing", "Analytics Review", "Optimization"]
    }
  ];

  const industries = [
    { name: "E-commerce", icon: "🛒" },
    { name: "Education", icon: "🎓" },
    { name: "FinTech", icon: "💳" },
    { name: "Healthcare", icon: "🏥" },
    { name: "SaaS", icon: "☁️" },
    { name: "Startups", icon: "🚀" }
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-sm text-[rgb(var(--muted))] font-medium tracking-wider uppercase mb-3">
            Design Services I Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Design Services{" "}
            <span className="text-[rgb(var(--accent))]">That Convert</span>
          </h2>
        </motion.div>

        {/* Compact Services Grid - 2x2 */}
        <motion.div 
          variants={containerVariants}
          className="grid sm:grid-cols-2 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-5 md:p-6 bg-[rgb(var(--card))] rounded-xl border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-[rgb(var(--accent))]/10 rounded-lg flex items-center justify-center text-[rgb(var(--accent))] group-hover:bg-[rgb(var(--accent))] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {service.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Compact Features - Horizontal */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-[rgb(var(--surface))] text-[rgb(var(--muted))]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[rgb(var(--accent))]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact Industries - Horizontal Scroll on Mobile */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold text-center mb-4">
            Industries I Serve
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-[rgb(var(--card))] rounded-full border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))]/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-lg">{industry.icon}</span>
                <span className="text-sm font-medium text-[rgb(var(--text))]">
                  {industry.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[rgb(var(--accent))] text-white font-medium hover:shadow-lg transition-all duration-300"
          >
            Let's Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

