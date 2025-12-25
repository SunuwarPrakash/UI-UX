import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

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
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT SIDE — TEXT */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Let's Work{" "}
              <span className="text-[rgb(var(--accent))] relative">
                Together
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--accent))] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-[rgb(var(--muted))] leading-relaxed"
            >
              Have a project in mind, a startup idea, or need help designing a
              product? I'm here to help bring your vision to life with modern,
              accessible, and user-focused solutions.
            </motion.p>
          </div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--border))]">
              <div className="w-12 h-12 bg-[rgb(var(--accent))]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[rgb(var(--accent))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:praksunuwar@gmail.com"
                  className="text-[rgb(var(--accent))] hover:underline"
                >
                  praksunuwar@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--border))]">
              <div className="w-12 h-12 bg-[rgb(var(--accent))]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[rgb(var(--accent))]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/prakash-sunuwar-020556234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--accent))] hover:underline"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--border))]">
              <div className="w-12 h-12 bg-[rgb(var(--accent))]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[rgb(var(--accent))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6m8 0H8" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Availability</h3>
                <p className="text-[rgb(var(--muted))]">Available for freelance & full-time</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="bg-[rgb(var(--card))] p-8 rounded-2xl border border-[rgb(var(--border))] shadow-lg space-y-6 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(var(--accent))]/5 to-transparent rounded-full -mr-16 -mt-16" />
          
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[rgb(var(--text))]">
                  Full Name *
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[rgb(var(--text))]">
                  Email Address *
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[rgb(var(--text))]">
                  Project Details *
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, goals, and budget..."
                  className="w-full px-4 py-3 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))] focus:border-transparent transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-xl bg-[rgb(var(--accent))] text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </div>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </div>

            <p className="text-xs text-[rgb(var(--muted))] text-center mt-4">
              I typically respond within 24 hours. Let's build something amazing together! 🚀
            </p>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
