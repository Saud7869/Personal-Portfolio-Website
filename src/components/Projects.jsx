import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const Projects = () => {
  // Add your 3 projects here
  const projects = [
    {
      id: 1,
      name: 'Resume Analyzer',
      description: 'A web application built with Spring Boot and Java that analyzes resumes and provides insights. Features include resume parsing, skill extraction, and compatibility scoring.',
      githubUrl: 'https://github.com/Saud7869', // Add your GitHub repo URL
      liveUrl: '', // Add live demo URL if available
      technologies: ['Spring Boot', 'Java', 'HTML', 'CSS'],
      image: '', // Optional: Add project image URL
    },
    {
      id: 2,
      name: 'Smart Resume Builder with AI Suggestions',
      description: 'A modern, full-stack resume builder application with AI-powered suggestions and PDF export functionality. Features include real-time preview, AI-powered recommendations, PDF export, and data persistence with localStorage.',
      githubUrl: 'https://github.com/Saud7869/Smart-Resume-Builder-with-AI-Suggestions',
      liveUrl: '', // Add live demo URL if available
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'OpenAI API', 'JavaScript'],
      image: '', // Optional: Add project image URL
    },
    {
      id: 3,
      name: 'To-Do List Web App',
      description: 'A front-end only To-Do List web application built with Vanilla JavaScript. Features include adding tasks, marking tasks as completed, deleting tasks, and a clean, responsive UI. Perfect for learning DOM manipulation and event handling.',
      githubUrl: 'https://github.com/Saud7869/Build-a-To-Do-List-Web-App-Front-end-only-using-Vanilla-JavaScript-',
      liveUrl: '', // Add live demo URL if available
      technologies: ['JavaScript', 'HTML', 'CSS'],
      image: '', // Optional: Add project image URL
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 rounded-lg flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FaCode className="text-blue-400 text-xl" />
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
              </div>

              <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex space-x-4 mt-auto">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

