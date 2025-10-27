import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'contact@zenithpact.com',
      link: 'mailto:contact@zenithpact.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'Zenith Pact Pvt. Ltd., Bengaluru, India',
      link: null
    }
  ]

  const socialMedia = [
    { icon: FaLinkedin, url: 'https://linkedin.com', color: '#0077b5', name: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', color: '#1da1f2', name: 'Twitter' },
    { icon: FaInstagram, url: 'https://instagram.com', color: '#e1306c', name: 'Instagram' }
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
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your vision to
            life. We're here to answer your questions and start your journey to success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-dark to-gray-900 p-8 rounded-2xl border border-[var(--border-color)]">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[var(--text-secondary)] mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[var(--text-secondary)] mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[var(--text-secondary)] mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary hover:bg-[#007A8C] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-dark to-gray-900 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="text-2xl text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[var(--text-tertiary)] hover:text-primary transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-[var(--text-tertiary)]">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-8 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl border border-primary/30"
            >
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[var(--bg-secondary)] rounded-lg flex items-center justify-center text-[var(--text-tertiary)] hover:text-primary border border-[var(--border-color)] hover:border-primary transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <social.icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative overflow-hidden rounded-xl h-64 border border-[var(--border-color)]"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                alt="Bengaluru Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">Visit Our Office</h4>
                  <p className="text-[var(--text-secondary)]">Bengaluru, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Working Hours */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-br from-dark to-gray-900 rounded-xl border border-[var(--border-color)]">
            <h3 className="text-xl font-bold text-primary mb-2">Monday - Friday</h3>
            <p className="text-[var(--text-tertiary)]">9:00 AM - 6:00 PM</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-dark to-gray-900 rounded-xl border border-[var(--border-color)]">
            <h3 className="text-xl font-bold text-primary mb-2">Saturday</h3>
            <p className="text-[var(--text-tertiary)]">10:00 AM - 4:00 PM</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-dark to-gray-900 rounded-xl border border-[var(--border-color)]">
            <h3 className="text-xl font-bold text-primary mb-2">Sunday</h3>
            <p className="text-[var(--text-tertiary)]">Closed</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
