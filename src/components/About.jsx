import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      icon: FaPalette,
      title: 'Creative Design',
      description: 'Creating beautiful and intuitive user interfaces.',
    },
    {
      icon: FaRocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Who I Am</h3>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative
              solutions and beautiful user experiences. With expertise in modern web
              technologies, I bring ideas to life through code.
            </p>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career
              where I continuously learn and adapt to new technologies. I believe in
              writing clean, efficient code and creating applications that make a
              difference.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-lg"
              >
                <feature.icon className="text-4xl text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

