import { motion } from "framer-motion";

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Prakash transformed our product vision into a beautiful, user-friendly interface. His attention to detail and understanding of user needs exceeded our expectations. Our user engagement increased by 40% after the redesign."
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "EduFlow",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Working with Prakash was a game-changer for our edtech platform. He not only delivered stunning designs but also provided valuable insights about our users' behavior. The design system he created scaled perfectly with our growth."
    },
    {
      name: "Emily Johnson",
      role: "Founder",
      company: "ShopEasy",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Prakash's UI/UX expertise helped us increase our conversion rate by 60%. His designs are not just beautiful—they're strategically crafted to drive business results. Highly recommended for any startup looking to improve their digital presence."
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "24h", label: "Average Response Time" }
  ];

  return (
    <section
      id="testimonials"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Gradient Background */}
        <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-to-br from-[rgb(var(--accent))]/8 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-[rgb(var(--accent))]/5 rounded-full blur-3xl" />
        
        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-[rgb(var(--accent))]/15 rounded-full"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-400/25 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/6 w-1 h-12 bg-gradient-to-b from-purple-400/15 to-transparent"
          animate={{
            rotate: [0, -10, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/6 w-3 h-3 bg-gradient-to-br from-[rgb(var(--accent))]/20 to-blue-400/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
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
              Client Success & Results
            </motion.p>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Trusted by{" "}
            <span className="text-[rgb(var(--accent))] relative">
              Industry Leaders
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
            Real results from real clients. See how strategic UI/UX design 
            has transformed businesses and delivered measurable growth.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-[rgb(var(--surface))] rounded-2xl border border-[rgb(var(--border))] hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[rgb(var(--accent))] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[rgb(var(--muted))] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-[rgb(var(--card))] rounded-3xl border border-[rgb(var(--border))] hover:shadow-2xl transition-all duration-500 hover:border-[rgb(var(--accent))]/30 relative overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[rgb(var(--accent))]/5 to-transparent rounded-full -mr-12 -mt-12" />
              
              <div className="relative">
                {/* Quote Icon */}
                <motion.div 
                  className="w-12 h-12 bg-[rgb(var(--accent))]/10 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <svg className="w-6 h-6 text-[rgb(var(--accent))]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <motion.svg
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: starIndex * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[rgb(var(--muted))] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[rgb(var(--text))]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[rgb(var(--muted))]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--border))] text-[rgb(var(--muted))] mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Ready to join these success stories?</span>
          </motion.div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Your Project Today
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
