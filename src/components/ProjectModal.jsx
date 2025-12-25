import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ activeProject, setActiveProject }) {
  if (!activeProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={() => setActiveProject(null)}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="bg-[rgb(var(--bg))] rounded-xl w-full max-w-5xl h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={`https://embed.figma.com/design/UJXukoCvPOeNN52YHpND6P/UI-UX?node-id=221-1612&embed-host=share allowfullscreen`}
            className="w-full h-full rounded-xl"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
