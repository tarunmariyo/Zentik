import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import EarthGlobe from '../components/EarthGlobe'

const Home = () => {
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
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Empowering Innovation with{' '}
              <span className="text-primary">IT Solutions</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[var(--text-tertiary)] leading-relaxed"
            >
              Driving businesses forward with technology, creativity, and expertise.
            </motion.p>

            <motion.div variants={itemVariants}>
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
            className="w-full h-[500px] lg:h-[600px]"
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
              About <span className="text-primary">Zenith Pact</span>
            </h2>
            <p className="text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed">
              We are a leading IT solutions provider specializing in web development,
              mobile applications, cloud infrastructure, and AI integration. Our mission
              is to transform your digital vision into reality with cutting-edge
              technology and innovative solutions.
            </p>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                description: 'Pioneering the future of technology'
              },
              {
                title: 'Collaboration',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
                description: 'Working together for success'
              },
              {
                title: 'Excellence',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
                description: 'Delivering quality in every project'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 border border-[var(--border-color)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '200+', label: 'Happy Clients' },
              { number: '300+', label: 'Projects Completed' },
              { number: '50+', label: 'Team Members' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-[var(--bg-secondary)]/50 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-5xl font-bold text-primary mb-3">{stat.number}</h3>
                <p className="text-[var(--text-tertiary)] text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
