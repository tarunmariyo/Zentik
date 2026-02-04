import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCode, FaMobile, FaCloud, FaBrain, FaRocket, FaShieldAlt, FaSearch, FaBullhorn, FaPaintBrush, FaChartLine } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 'web-development',
      icon: FaCode,
      title: 'Web Development',
      description:
        'Build responsive, scalable, and high-performance web applications using cutting-edge technologies like React, Next.js, and Node.js.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development']
    },
    {
      id: 'mobile-app-development',
      icon: FaMobile,
      title: 'Mobile App Development',
      description:
        'Create stunning native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'React Native', 'Flutter Development']
    },
    {
      id: 'cloud-solutions',
      icon: FaCloud,
      title: 'Cloud Solutions',
      description:
        'Leverage the power of cloud computing with AWS, Azure, and Google Cloud to scale your infrastructure and optimize costs.',
      features: ['Cloud Migration', 'DevOps Services', 'Infrastructure Management']
    },
    {
      id: 'ai-data-integration',
      icon: FaBrain,
      title: 'AI & Data Integration',
      description:
        'Harness the power of artificial intelligence and machine learning to unlock insights and automate processes.',
      features: ['Machine Learning', 'Data Analytics', 'AI Chatbots']
    },
    {
      id: 'digital-transformation',
      icon: FaRocket,
      title: 'Digital Transformation',
      description:
        'Transform your business with digital solutions that streamline operations and enhance customer engagement.',
      features: ['Process Automation', 'Digital Strategy', 'Innovation Consulting']
    },
    {
      id: 'cybersecurity',
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      description:
        'Protect your digital assets with comprehensive security solutions including penetration testing and security audits.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management']
    },
    {
      id: 'seo-optimization',
      icon: FaSearch,
      title: 'SEO Optimization',
      description:
        'Boost your online visibility and rankings with comprehensive SEO strategies, technical optimization, and content enhancement.',
      features: ['Technical SEO', 'Content Optimization', 'Link Building']
    },
    {
      id: 'digital-marketing',
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description:
        'Drive growth with data-driven digital marketing campaigns including social media, PPC, email marketing, and content strategy.',
      features: ['Social Media Marketing', 'PPC Campaigns', 'Email Marketing']
    },
    {
      id: 'uiux-design',
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      description:
        'Create beautiful, intuitive user interfaces and experiences that delight users and drive engagement with your digital products.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design']
    },
    {
      id: 'business-analytics',
      icon: FaChartLine,
      title: 'Business Analytics',
      description:
        'Transform data into actionable insights with advanced analytics, reporting dashboards, and business intelligence solutions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Custom Reports']
    }
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed px-2">
            We offer comprehensive IT solutions tailored to meet your business needs.
            From concept to deployment, we're with you every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] p-4 sm:p-6 md:p-8 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="text-2xl sm:text-3xl md:text-4xl text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 sm:mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[var(--text-tertiary)] mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none">{service.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm sm:text-base text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Link 
                to={`/services/${service.id}`}
                className="text-primary hover:text-[#00B8CE] font-semibold transition-colors duration-300 flex items-center group text-sm sm:text-base"
              >
                Learn More
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center bg-gradient-to-r from-primary/10 to-primary/20 border border-primary/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-tertiary)] mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Let's discuss how our services can help you achieve your goals. Get in touch
            with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-[#007A8C] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
