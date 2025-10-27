import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaLightbulb, FaUsers, FaHeart, FaRocket } from 'react-icons/fa'

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const About = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description:
        'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description:
        'We believe in working together with our clients as partners to achieve exceptional results.'
    },
    {
      icon: FaHeart,
      title: 'Integrity',
      description:
        'We maintain the highest standards of honesty, transparency, and ethical practices.'
    },
    {
      icon: FaRocket,
      title: 'Excellence',
      description:
        'We strive for perfection in every project, delivering quality that exceeds expectations.'
    }
  ]

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    },
    {
      name: 'David Kumar',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    }
  ]

  const stats = [
    { number: 10, suffix: '+', label: 'Years Experience' },
    { number: 200, suffix: '+', label: 'Happy Clients' },
    { number: 300, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Team Members' }
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">Zenith Pact</span>
          </h1>
          <p className="text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
            Empowering businesses worldwide with innovative IT solutions since 2014.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-dark to-gray-900 p-12 rounded-2xl border border-[var(--border-color)]">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed text-center max-w-4xl mx-auto">
              At Zenith Pact, our mission is to transform businesses through innovative
              technology solutions. We strive to be the trusted partner that empowers
              organizations to achieve their digital transformation goals, driving growth,
              efficiency, and competitive advantage in an ever-evolving technological
              landscape.
            </p>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl border border-primary/30"
              >
                <h3 className="text-5xl font-bold text-primary mb-3">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </h3>
                <p className="text-[var(--text-tertiary)] text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-dark to-gray-900 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="text-3xl text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{value.title}</h3>
                  <p className="text-[var(--text-tertiary)] leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Office Image */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl h-96">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop"
              alt="Zenith Pact Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                  Join Our Team
                </h2>
                <p className="text-xl text-[var(--text-secondary)] mb-6">
                  Be part of something extraordinary
                </p>
                <button className="bg-primary hover:bg-[#007A8C] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  View Careers
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
