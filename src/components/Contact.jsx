import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can integrate with a service like Formspree, EmailJS, or your backend
    setStatus('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset status message after 5 seconds
    setTimeout(() => setStatus(''), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: FaEnvelope, text: 'shaikhsaud359@gmail.com', link: 'mailto:shaikhsaud359@gmail.com' },
    { icon: FaPhone, text: '+91 9664147869', link: 'tel:+919664147869' },
    { icon: FaMapMarkerAlt, text: 'mumbai, india', link: '#' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/shaikh-saud-1606b5312/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/Saud7869', label: 'GitHub' },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 glass-effect p-4 rounded-lg group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <info.icon className="text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {info.text}
                  </span>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Your Message"
                />
              </div>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400"
                >
                  {status}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

