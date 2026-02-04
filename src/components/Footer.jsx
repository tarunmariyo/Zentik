import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com', color: '#0077b5' },
    { icon: FaTwitter, url: 'https://twitter.com', color: '#1da1f2' },
    { icon: FaInstagram, url: 'https://instagram.com', color: '#e1306c' },
    { icon: FaGithub, url: 'https://github.com', color: '#ffffff' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] border-t border-[var(--border-color)] mt-12 sm:mt-16 md:mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img
                src="/assets/companylogo.png"
                alt="Zentik IT Solution"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 bg-primary rounded-lg flex items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="text-white font-bold text-sm sm:text-base md:text-lg">ZI</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-tertiary)] leading-relaxed">
              Empowering innovation with cutting-edge IT solutions. Driving businesses
              forward with technology, creativity, and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm sm:text-base text-[var(--text-tertiary)] hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-tertiary)] hover:text-primary transition-all duration-300 transform hover:scale-110 text-xl sm:text-2xl"
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <div className="mt-4 sm:mt-6">
              <p className="text-[var(--text-tertiary)] text-xs sm:text-sm">
                <strong className="text-[var(--text-primary)]">Email:</strong> contact@zentik.info
              </p>
              <p className="text-[var(--text-tertiary)] text-xs sm:text-sm mt-1 sm:mt-2">
                <strong className="text-[var(--text-primary)]">Phone:</strong> +91 9217526787
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border-color)] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-[var(--text-tertiary)] text-xs sm:text-sm">
            &copy; {currentYear} Zentik IT Solution. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
