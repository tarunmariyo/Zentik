import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCode, FaMobile, FaCloud, FaBrain, FaRocket, FaShieldAlt } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description:
        'Build responsive, scalable, and high-performance web applications using cutting-edge technologies like React, Next.js, and Node.js.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development']
    },
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description:
        'Create stunning native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'React Native', 'Flutter Development']
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description:
        'Leverage the power of cloud computing with AWS, Azure, and Google Cloud to scale your infrastructure and optimize costs.',
      features: ['Cloud Migration', 'DevOps Services', 'Infrastructure Management']
    },
    {
      icon: FaBrain,
      title: 'AI & Data Integration',
      description:
        'Harness the power of artificial intelligence and machine learning to unlock insights and automate processes.',
      features: ['Machine Learning', 'Data Analytics', 'AI Chatbots']
    },
    {
      icon: FaRocket,
      title: 'Digital Transformation',
      description:
        'Transform your business with digital solutions that streamline operations and enhance customer engagement.',
      features: ['Process Automation', 'Digital Strategy', 'Innovation Consulting']
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      description:
        'Protect your digital assets with comprehensive security solutions including penetration testing and security audits.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management']
    }
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive IT solutions tailored to meet your business needs.
            From concept to deployment, we're with you every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] p-8 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="text-4xl text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-[var(--text-tertiary)] mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[var(--text-secondary)]">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button className="text-primary hover:text-[#00B8CE] font-semibold transition-colors duration-300 flex items-center group">
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[var(--text-tertiary)] mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals. Get in touch
            with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-[#007A8C] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
