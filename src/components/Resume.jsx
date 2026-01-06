import { motion } from 'framer-motion'
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'

const Resume = () => {
  // You can update this with your actual resume URL
  const resumeUrl = 'https://drive.google.com/file/d/1MOaKkhpNXo6QNogcFqraBx9zpMbZR0tG/view?usp=drive_link' // Replace with your resume URL

  const handleDownload = () => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank')
    }
  }

  const experiences = [
    {
      title: 'Java Developer',
      company: 'Dynamix Networks',
      period: '2025 - Present',
      description: 'Made a resume analyzer web application with Spring Boot, Java, HTML, and CSS.',
    },
    {
      title: 'Web Developer',
      company: 'Elevate Labs',
      period: '2025 - 2025',
      description: 'Built responsive websites and learned best practices in web development.',
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      school: 'Yashwantrao Chavan College of Engineering',
      period: '2022 - 2025',
    },
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={handleDownload}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow mx-auto"
            >
              <FaDownload />
              <span>Download Resume</span>
              <FaFilePdf />
            </button>
          </motion.div>
          
          <p className="text-gray-400 mt-4 text-sm">
            Or{' '}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center space-x-1"
            >
              <span>view online</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 mr-4"></span>
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-lg relative pl-8"
                >
                  <div className="absolute left-0 top-8 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="absolute left-0 top-8 w-0.5 h-full bg-gray-600"></div>
                  <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                  <p className="text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 mr-4"></span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-lg relative pl-8"
                >
                  <div className="absolute left-0 top-8 w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="absolute left-0 top-8 w-0.5 h-full bg-gray-600"></div>
                  <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-purple-400 mb-2">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume

