import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Full Stack Developer', 'Java Developer', 'Problem Solver', 'Tech Enthusiast']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Saud7869', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/shaikh-saud-1606b5312/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:shaikhsaud359@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold text-gradient">
              SM
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Hi, I'm </span>
            <span className="text-white">Saud Mohd Haroon Shaikh</span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-6 h-16 flex items-center justify-center">
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-gradient"
            >
              {texts[currentText]}
            </motion.span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            I create beautiful, functional, and user-centered digital experiences.
            Welcome to my portfolio!
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white hover:text-blue-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span>Explore My Work</span>
              <FaArrowDown className="animate-bounce" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowDown className="text-white text-2xl" />
      </motion.div>
    </section>
  )
}

export default Hero

