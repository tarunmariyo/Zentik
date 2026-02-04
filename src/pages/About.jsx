import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLightbulb, FaUsers, FaHeart, FaRocket, FaEnvelope } from 'react-icons/fa'

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

  const stats = [
    { number: '2+', label: 'Years Experience', icon: '🚀', color: 'from-blue-500/20 to-primary/20' },
    { number: '30+', label: 'Happy Clients', icon: '😊', color: 'from-green-500/20 to-primary/20' },
    { number: '50+', label: 'Projects Completed', icon: '✅', color: 'from-purple-500/20 to-primary/20' },
    { number: '25+', label: 'Team Members', icon: '👥', color: 'from-orange-500/20 to-primary/20' }
  ]

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="text-primary">Zentik IT Solution</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed px-2">
            Empowering businesses worldwide with innovative IT solutions since 2023.
          </p>
        </motion.div>

        {/* About Company Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-gradient-to-br from-dark to-gray-900 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-[var(--border-color)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Our <span className="text-primary">Company</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-center max-w-4xl mx-auto mb-4 sm:mb-6">
              Zentik IT Solution is a leading technology company dedicated to delivering innovative 
              digital solutions that transform businesses. Since our founding in 2023, we have been 
              at the forefront of digital transformation, helping organizations across industries 
              leverage cutting-edge technology to achieve their goals.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-tertiary)] leading-relaxed text-center max-w-4xl mx-auto">
              Our comprehensive suite of services includes web development, mobile applications, 
              cloud solutions, AI integration, cybersecurity, and digital marketing. We combine 
              technical expertise with creative thinking to deliver solutions that not only meet 
              but exceed our clients' expectations.
            </p>
          </div>
        </motion.section>

        {/* Director Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Our <span className="text-primary">Leadership</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 bg-gradient-to-br from-dark to-gray-900 p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl border border-[var(--border-color)]">
            {/* Director Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <img
                  src="/assets/ceo.png"
                  alt="Director - Zentik IT Solution"
                  className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
                  }}
                />
              </div>
            </motion.div>

            {/* Director Info */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1 sm:mb-2">
                Rohit Kumar
              </h3>
              <p className="text-lg sm:text-xl text-primary mb-4 sm:mb-6">Director</p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-3 sm:mb-4">
                With over 4 years of experience in the IT industry, Rohit Kumar leads Zentik IT Solution 
                with a vision to bridge the gap between technology and business success. His strategic 
                leadership and technical expertise have been instrumental in establishing Zentik as a 
                trusted partner for businesses seeking digital excellence.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-tertiary)] leading-relaxed">
                Under his guidance, Zentik IT Solution has successfully delivered 50+ projects across 
                various industries including healthcare, finance, e-commerce, and education. Rohit's 
                commitment to innovation, quality delivery, and client satisfaction continues to drive 
                the company's growth and success in the competitive IT landscape.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-primary">Impact</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className={`relative text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-primary/30 overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">{stat.icon}</div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-3 group-hover:scale-110 transition-transform duration-300">{stat.number}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[var(--text-secondary)] font-semibold">{stat.label}</p>
                </div>
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
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 bg-gradient-to-br from-dark to-gray-900 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="text-xl sm:text-2xl md:text-3xl text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-[var(--text-tertiary)] leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Careers CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-64 sm:h-80 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop"
              alt="Zentik IT Solution Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/30 flex items-center justify-center">
              <div className="text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
                  Join Our Team
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  Be part of something extraordinary. Explore exciting career opportunities at Zentik IT Solution.
                </p>
                <Link
                  to="/careers"
                  className="inline-block bg-primary hover:bg-[#007A8C] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
                >
                  View Careers
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
