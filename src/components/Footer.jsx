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
      className="bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] border-t border-[var(--border-color)] mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/companylogo.png"
                alt="Zentik IT Solution"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="h-14 w-14 bg-primary rounded-lg flex items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="text-white font-bold text-lg">ZI</span>
              </div>
            </div>
            <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">
              Empowering innovation with cutting-edge IT solutions. Driving businesses
              forward with technology, creativity, and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[var(--text-tertiary)] hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-tertiary)] hover:text-primary transition-all duration-300 transform hover:scale-110"
                  style={{ fontSize: '1.5rem' }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-[var(--text-tertiary)] text-sm">
                <strong className="text-[var(--text-primary)]">Email:</strong> contact@zentik.info
              </p>
              <p className="text-[var(--text-tertiary)] text-sm mt-2">
                <strong className="text-[var(--text-primary)]">Phone:</strong> +91 9217526787
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--border-color)] mt-8 pt-8 text-center">
          <p className="text-[var(--text-tertiary)] text-sm">
            &copy; {currentYear} Zentik IT Solution. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
