import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../App";

export default function Project() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link 
            to="/" 
            className="text-[rgb(var(--accent))] hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[rgb(var(--bg))] border-b border-[rgb(var(--border))]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-lg hover:text-[rgb(var(--accent))] transition">
            Prakash
          </Link>
          
          {/* Back to home */}
          <div className="ml-auto">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg border border-[rgb(var(--border))] hover:bg-[rgb(var(--surface))] transition text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--accent))] transition mb-8"
          >
            ← Back to projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-[rgb(var(--muted))] max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column - Project Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="space-y-4 text-[rgb(var(--muted))]">
                  <p>
                    This project showcases modern UI/UX design principles with a focus on 
                    user experience and clean aesthetics. The interface is designed to be 
                    intuitive and responsive across all device sizes.
                  </p>
                  <p>
                    Key features include responsive design, smooth animations, and accessibility 
                    considerations. The design system uses consistent colors, typography, and 
                    spacing to create a cohesive user experience.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-[rgb(var(--muted))]">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--accent))] mr-2">•</span>
                    Responsive design that works on all devices
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--accent))] mr-2">•</span>
                    Dark mode support with smooth transitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--accent))] mr-2">•</span>
                    Accessible UI with proper contrast ratios
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--accent))] mr-2">•</span>
                    Modern animations and micro-interactions
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Project Meta */}
            <div className="space-y-6">
              <div className="bg-[rgb(var(--surface))] rounded-xl p-6">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-[rgb(var(--muted))]">Role:</span>
                    <span className="ml-2 font-medium">Frontend Developer</span>
                  </div>
                  <div>
                    <span className="text-[rgb(var(--muted))]">Duration:</span>
                    <span className="ml-2 font-medium">2-3 weeks</span>
                  </div>
                  <div>
                    <span className="text-[rgb(var(--muted))]">Status:</span>
                    <span className="ml-2 font-medium text-green-600 dark:text-green-400">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[rgb(var(--surface))] rounded-xl p-6">
                <h3 className="font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[rgb(var(--accent))] text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 rounded-lg bg-[rgb(var(--accent))] text-white font-medium text-center hover:opacity-90 transition"
                >
                  View Prototype
                </a>
                <Link
                  to="/"
                  className="block w-full px-6 py-3 rounded-lg border border-[rgb(var(--border))] text-center hover:bg-[rgb(var(--surface))] transition"
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
