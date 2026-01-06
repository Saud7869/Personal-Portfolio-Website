import { motion } from 'framer-motion'
import {
  FaReact,
  FaNode,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 85 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'HTML5', icon: FaHtml5, level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, level: 85 },
        { name: 'Python', icon: FaPython, level: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 75 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90 },
        { name: 'AWS', icon: FaAws, level: 70 },
        { name: 'Docker', icon: FaDocker, level: 75 },
        { name: 'Database', icon: FaDatabase, level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="text-blue-400 text-xl" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

