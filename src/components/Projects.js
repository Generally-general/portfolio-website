import { motion } from "framer-motion";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-gray-400 mt-2">Check out some of my work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-5">
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg transition hover:shadow-2xl"
          >
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mt-4 text-white">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-300 mt-2">{project.description}</p>

            {/* Tech Stack Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-600/30 px-3 py-1 rounded-full text-sm text-blue-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex justify-between">
              <a 
                href={project.demo} 
                target="_blank" rel="noopener noreferrer"
                className="text-blue-400 font-medium hover:text-blue-500 transition"
              >
                Live Demo ↗
              </a>
              <a 
                href={project.code} 
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 font-medium hover:text-gray-300 transition"
              >
                Source Code ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
