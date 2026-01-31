import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { FaCode, FaMobile, FaCloud, FaBrain, FaRocket, FaShieldAlt, FaSearch, FaBullhorn, FaPaintBrush, FaChartLine, FaQuoteLeft, FaStar, FaExternalLinkAlt } from 'react-icons/fa'
import EarthGlobe from '../components/EarthGlobe'

const Home = () => {
  const heroRef = useRef(null)
  
  // Track scroll progress of hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms - different speeds for different elements
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0])
  
  const subtextY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const subtextOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 0.5, 0])
  
  const buttonY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.5, 0.7], [1, 0.5, 0])
  
  const globeY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const globeOpacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 0.8, 0])
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Scroll Animations */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden hero-section-bg"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text with Stagger Fade */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left space-y-6 relative z-10"
          >
            {/* Heading - Fades first */}
            <motion.h1
              variants={itemVariants}
              style={{ y: headingY, opacity: headingOpacity }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Empowering Innovation with{' '}
              <span className="text-primary">IT Solutions</span>
            </motion.h1>

            {/* Subtext - Fades second */}
            <motion.p
              variants={itemVariants}
              style={{ y: subtextY, opacity: subtextOpacity }}
              className="text-xl md:text-2xl text-[var(--text-tertiary)] leading-relaxed"
            >
              Driving businesses forward with technology, creativity, and expertise.
            </motion.p>

            {/* Button - Fades third */}
            <motion.div 
              variants={itemVariants}
              style={{ y: buttonY, opacity: buttonOpacity }}
            >
              <Link
                to="/services"
                className="inline-block bg-primary hover:bg-[#007A8C] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-[500px] lg:h-[600px] relative z-0"
          >
            <EarthGlobe />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Zentik IT Solution</span>
            </h2>
            <p className="text-xl text-[var(--text-tertiary)] max-w-4xl mx-auto leading-relaxed mb-8">
              We are a leading IT solutions provider specializing in web development,
              mobile applications, cloud infrastructure, and AI integration. Founded in 2023,
              Zentik IT Solution has been at the forefront of digital transformation, helping businesses
              worldwide leverage technology to achieve their goals.
            </p>
            <p className="text-lg text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed">
              Our team of expert developers, designers, and consultants bring years of experience
              and a passion for innovation to every project. We don't just build software—we create
              solutions that drive measurable business results and deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Glimpse Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaCode,
                title: 'Web Development',
                description: 'Build responsive, scalable web applications using React, Next.js, and modern technologies.',
                link: '/services/web-development'
              },
              {
                icon: FaMobile,
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                link: '/services/mobile-app-development'
              },
              {
                icon: FaCloud,
                title: 'Cloud Solutions',
                description: 'Scale your infrastructure with AWS, Azure, and Google Cloud.',
                link: '/services/cloud-solutions'
              },
              {
                icon: FaBrain,
                title: 'AI & Data',
                description: 'Harness AI and machine learning to unlock insights and automate processes.',
                link: '/services/ai-data-integration'
              },
              {
                icon: FaRocket,
                title: 'Digital Transformation',
                description: 'Transform your business with digital solutions that streamline operations.',
                link: '/services/digital-transformation'
              },
              {
                icon: FaShieldAlt,
                title: 'Cybersecurity',
                description: 'Protect your digital assets with comprehensive security solutions.',
                link: '/services/cybersecurity'
              },
              {
                icon: FaSearch,
                title: 'SEO Optimization',
                description: 'Boost visibility and rankings with comprehensive SEO strategies and optimization.',
                link: '/services/seo-optimization'
              },
              {
                icon: FaBullhorn,
                title: 'Digital Marketing',
                description: 'Data-driven campaigns including social media, PPC, and email marketing.',
                link: '/services/digital-marketing'
              },
              {
                icon: FaPaintBrush,
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces that delight users and drive engagement.',
                link: '/services/uiux-design'
              },
              {
                icon: FaChartLine,
                title: 'Business Analytics',
                description: 'Transform data into insights with analytics and reporting dashboards.',
                link: '/services/business-analytics'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] p-8 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/30"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{service.title}</h3>
                <p className="text-[var(--text-tertiary)] mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-primary hover:text-[#00B8CE] font-semibold transition-colors duration-300 flex items-center group"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-block bg-primary hover:bg-[#007A8C] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
              Showcasing our recent work and successful implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                category: 'Web Development',
                description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and analytics dashboard.',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
              },
              {
                title: 'Healthcare Mobile App',
                category: 'Mobile Development',
                description: 'Patient management app with appointment scheduling, telemedicine features, and secure health records.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
                technologies: ['React Native', 'Firebase', 'WebRTC']
              },
              {
                title: 'AI Analytics Dashboard',
                category: 'AI & Data',
                description: 'Machine learning powered analytics platform providing predictive insights and automated reporting.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                technologies: ['Python', 'TensorFlow', 'React', 'AWS']
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 border border-[var(--border-color)] hover:border-primary/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent"></div>
                </div>
                <div className="p-6 bg-[var(--bg-secondary)]">
                  <span className="text-primary text-sm font-semibold">{project.category}</span>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-2 mb-3">{project.title}</h3>
                  <p className="text-[var(--text-tertiary)] mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[var(--bg-secondary)]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                position: 'CEO, TechVentures India',
                avatar: '/assets/priyasharma.jpeg',
                rating: 5,
                text: 'Zentik IT Solution transformed our outdated system into a modern, scalable platform. Their expertise in cloud migration was invaluable. The team was professional, responsive, and delivered ahead of schedule.'
              },
              {
                name: 'Rajesh Kumar',
                position: 'CTO, HealthFirst Solutions',
                avatar: '/assets/rajeshkumar.jpeg',
                rating: 5,
                text: 'The mobile app Zentik IT Solution developed for us has been a game-changer. User engagement increased by 300%, and the app has been incredibly stable. Highly recommend their services!'
              },
              {
                name: 'Ananya Patel',
                position: 'Founder, DataDriven Analytics',
                avatar: '/assets/ananyapatel.jpeg',
                rating: 5,
                text: 'Working with Zentik IT Solution on our AI analytics platform exceeded expectations. Their technical knowledge and innovative approach helped us deliver a product that truly stands out in the market.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] p-8 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <FaQuoteLeft className="text-4xl text-primary/30 mb-4" />
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-primary text-lg" />
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div>
                    <h4 className="text-[var(--text-primary)] font-bold">{testimonial.name}</h4>
                    <p className="text-[var(--text-tertiary)] text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Impact</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Years Experience', icon: '🚀', color: 'from-blue-500/20 to-primary/20' },
              { number: '30+', label: 'Happy Clients', icon: '😊', color: 'from-green-500/20 to-primary/20' },
              { number: '50+', label: 'Projects Completed', icon: '✅', color: 'from-purple-500/20 to-primary/20' },
              { number: '25+', label: 'Team Members', icon: '👥', color: 'from-orange-500/20 to-primary/20' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative text-center p-8 bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-primary/30 overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <h3 className="text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">{stat.number}</h3>
                  <p className="text-[var(--text-secondary)] text-lg font-semibold">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
