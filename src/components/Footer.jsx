import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--surface))] border-t border-[rgb(var(--border))] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[rgb(var(--accent))] to-blue-600 bg-clip-text text-transparent">
              Prakash Sunuwar
            </h3>
            <p className="text-[rgb(var(--muted))] leading-relaxed">
              UI/UX Designer specializing in creating user-centered digital experiences 
              that drive business growth for startups and established companies.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="mailto:praksunuwar@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prakash-sunuwar-020556234/"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[rgb(var(--text))]">Services</h4>
            <ul className="space-y-2 text-[rgb(var(--muted))]">
              <li><a href="#services" className="hover:text-[rgb(var(--accent))] transition-colors duration-300">User Research</a></li>
              <li><a href="#services" className="hover:text-[rgb(var(--accent))] transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-[rgb(var(--accent))] transition-colors duration-300">Design Systems</a></li>
              <li><a href="#services" className="hover:text-[rgb(var(--accent))] transition-colors duration-300">Usability Testing</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[rgb(var(--text))]">Get In Touch</h4>
            <div className="space-y-2 text-[rgb(var(--muted))]">
              <p>Ready to start your design project?</p>
              <motion.a
                href="#contact"
                className="inline-block px-6 py-3 bg-[rgb(var(--accent))] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-[rgb(var(--border))] text-center"
        >
          <p className="text-[rgb(var(--muted))] text-sm">
            © {new Date().getFullYear()} Prakash Sunuwar. All rights reserved. | 
            <span className="ml-2">UI/UX Designer & Design Consultant</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
