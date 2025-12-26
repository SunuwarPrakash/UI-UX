import { motion } from "framer-motion";

export default function Services() {
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

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "User Research & Analysis",
      description: "Deep dive into user needs, behaviors, and pain points to create data-driven design decisions that truly serve your target audience.",
      features: ["User Interviews", "Competitive Analysis", "User Journey Mapping", "Persona Development"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that convert visitors into customers while providing exceptional user experiences across all devices.",
      features: ["Wireframes & Prototypes", "Visual Design", "Interaction Design", "Mobile-First Approach"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Design Systems",
      description: "Scalable design systems and component libraries that ensure consistency and efficiency across your entire product ecosystem.",
      features: ["Component Library", "Style Guides", "Design Tokens", "Documentation"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Usability Testing",
      description: "Validate your design decisions through comprehensive testing to ensure your product meets user expectations and business goals.",
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
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 overflow-hidden"
    >
      {/* Background Design Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Gradient Background - Static */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[rgb(var(--accent))]/3 to-blue-400/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/3 to-[rgb(var(--accent))]/3 rounded-full blur-3xl" />
        
        {/* Single Floating Element - Reduced from 3 to 1 */}
        <motion.div
          className="absolute top-1/4 left-10 w-2 h-2 bg-[rgb(var(--accent))]/15 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-20 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-8">
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-1 h-12 bg-gradient-to-b from-[rgb(var(--accent))] to-blue-600 rounded-full" />
            <motion.p 
              className="text-sm text-[rgb(var(--muted))] font-medium tracking-wider uppercase"
            >
              Design Services I Offer
            </motion.p>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Design Services{" "}
            <span className="text-[rgb(var(--accent))] relative">
              That Convert
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-[rgb(var(--muted))] max-w-4xl mx-auto leading-relaxed font-light"
          >
            Transform your business goals into exceptional user experiences. 
            I specialize in creating design solutions that not only look beautiful but drive real results for your bottom line.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 bg-gradient-to-br from-[rgb(var(--card))] to-[rgb(var(--surface))]/50 rounded-3xl border border-[rgb(var(--border))] hover:shadow-2xl transition-all duration-700 hover:border-[rgb(var(--accent))]/40 overflow-hidden"
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {/* Background Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[rgb(var(--accent))]/10 to-transparent rounded-full blur-xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-[rgb(var(--accent))] to-blue-600 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-6 group-hover:text-[rgb(var(--accent))] transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-[rgb(var(--muted))] leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>

                {/* Enhanced Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-4 p-3 rounded-xl bg-[rgb(var(--surface))]/50 backdrop-blur-sm border border-[rgb(var(--border))] group-hover:border-[rgb(var(--accent))]/20 transition-all duration-300"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 + 0.2 }}
                      whileHover={{ x: 8 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.3 }}
                      />
                      <span className="text-[rgb(var(--text))] font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div 
          variants={itemVariants}
          className="bg-[rgb(var(--surface))] rounded-3xl p-8 md:p-12 border border-[rgb(var(--border))]"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8"
          >
            Industries I Serve
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-[rgb(var(--card))] rounded-2xl border border-[rgb(var(--border))] hover:border-[rgb(var(--accent))] transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                variants={itemVariants}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div className="text-sm font-semibold text-[rgb(var(--muted))] group-hover:text-[rgb(var(--text))] transition-colors duration-300">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's Discuss Your Project
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
