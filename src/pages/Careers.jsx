import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaCloud, FaPaintBrush, FaBullhorn, FaChartLine, FaClock, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const Careers = () => {
  const internships = [
    {
      id: 1,
      title: 'Web Development Intern',
      icon: FaCode,
      department: 'Development',
      duration: '1-6 Months',
      location: 'Noida, UP (Hybrid)',
      type: 'Internship',
      description: 'Join our web development team to work on real-world projects using React, Next.js, and Node.js. Learn from experienced developers and contribute to client projects.',
      requirements: [
        'Currently pursuing B.Tech/BCA/MCA or equivalent',
        'Basic knowledge of HTML, CSS, JavaScript',
        'Familiarity with React is a plus',
        'Strong problem-solving skills'
      ],
      stipend: '₹6,000 - ₹10,000/month'
    },
    {
      id: 2,
      title: 'Mobile App Development Intern',
      icon: FaMobile,
      department: 'Development',
      duration: '1-6 Months',
      location: 'Noida, UP (Hybrid)',
      type: 'Internship',
      description: 'Work on cross-platform mobile applications using React Native and Flutter. Gain hands-on experience in building production-ready mobile apps.',
      requirements: [
        'Currently pursuing B.Tech/BCA/MCA or equivalent',
        'Basic understanding of mobile app development',
        'Knowledge of JavaScript or Dart',
        'Passion for mobile technologies'
      ],
      stipend: '₹6,000 - ₹10,000/month'
    },
    {
      id: 3,
      title: 'Cloud & DevOps Intern',
      icon: FaCloud,
      department: 'Infrastructure',
      duration: '1-6 Months',
      location: 'Noida, UP (Remote)',
      type: 'Internship',
      description: 'Learn cloud infrastructure management with AWS/Azure. Work on CI/CD pipelines, containerization, and infrastructure automation.',
      requirements: [
        'Currently pursuing B.Tech/MCA or equivalent',
        'Basic knowledge of Linux',
        'Interest in cloud technologies',
        'Understanding of Git version control'
      ],
      stipend: '₹10,000 - ₹12,000/month'
    },
    {
      id: 4,
      title: 'UI/UX Design Intern',
      icon: FaPaintBrush,
      department: 'Design',
      duration: '1-6 Months',
      location: 'Noida, UP (Hybrid)',
      type: 'Internship',
      description: 'Create beautiful user interfaces and experiences for web and mobile applications. Work with Figma, Adobe XD, and collaborate with development teams.',
      requirements: [
        'Currently pursuing Design/B.Tech or equivalent',
        'Proficiency in Figma or Adobe XD',
        'Strong visual design skills',
        'Portfolio showcasing design work'
      ],
      stipend: '₹8,000 - ₹12,000/month'
    },
    {
      id: 5,
      title: 'Digital Marketing Intern',
      icon: FaBullhorn,
      department: 'Marketing',
      duration: '1-6 Months',
      location: 'Noida, UP (Hybrid)',
      type: 'Internship',
      description: 'Assist in planning and executing digital marketing campaigns across social media, SEO, and content marketing. Learn analytics and performance optimization.',
      requirements: [
        'Currently pursuing BBA/MBA/Mass Communication',
        'Understanding of social media platforms',
        'Basic knowledge of SEO',
        'Excellent written communication'
      ],
      stipend: '₹8,000 - ₹12,000/month'
    },
    {
      id: 6,
      title: 'Data Analytics Intern',
      icon: FaChartLine,
      department: 'Analytics',
      duration: '1-6 Months',
      location: 'Noida, UP (Remote)',
      type: 'Internship',
      description: 'Work with data visualization tools and help create insightful dashboards. Learn SQL, Python, and business intelligence tools.',
      requirements: [
        'Currently pursuing B.Tech/BCA/Statistics',
        'Basic knowledge of SQL',
        'Familiarity with Excel/Google Sheets',
        'Interest in data analysis and visualization'
      ],
      stipend: '₹10,000 - ₹15,000/month'
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
            Career <span className="text-primary">Opportunities</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-tertiary)] max-w-3xl mx-auto leading-relaxed px-2">
            Join Zentik IT Solution and kickstart your career in technology. We offer exciting 
            internship opportunities for passionate individuals ready to make an impact.
          </p>
        </motion.div>

        {/* Why Join Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-br from-dark to-gray-900 p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-[var(--border-color)]">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
              Why <span className="text-primary">Intern With Us?</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { title: 'Real Projects', desc: 'Work on actual client projects, not just simulations' },
                { title: 'Mentorship', desc: 'Learn directly from experienced industry professionals' },
                { title: 'Flexible Hours', desc: 'Balance your studies with practical work experience' },
                { title: 'Certificate', desc: 'Receive official internship completion certificate' },
                { title: 'PPO Opportunity', desc: 'Top performers get Pre-Placement Offers' },
                { title: 'Stipend', desc: 'Competitive monthly stipend for all interns' }
              ].map((item, index) => (
                <div key={index} className="text-center p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-[var(--text-tertiary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Internship Listings */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
            Open <span className="text-primary">Positions</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-dark to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <internship.icon className="text-lg sm:text-xl md:text-2xl text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--text-primary)] truncate">{internship.title}</h3>
                    <p className="text-sm sm:text-base text-primary">{internship.department}</p>
                  </div>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/20 text-primary text-xs sm:text-sm rounded-full flex-shrink-0">
                    {internship.type}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-[var(--text-tertiary)]">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-primary" />
                    {internship.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary" />
                    <span className="truncate max-w-[150px] sm:max-w-none">{internship.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {internship.description}
                </p>

                {/* Requirements */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1.5 sm:mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[var(--text-tertiary)] space-y-0.5 sm:space-y-1">
                    {internship.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Stipend */}
                <div className="pt-3 sm:pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <span className="text-sm sm:text-base text-[var(--text-secondary)]">
                    <strong className="text-primary">Stipend:</strong> {internship.stipend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Apply Section - Resume Card */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-primary/30 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <FaEnvelope className="text-xl sm:text-2xl md:text-3xl text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Interested in Joining Us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Send your resume along with a cover letter mentioning the position you're interested in.
            </p>
            <a
              href="mailto:contact@zentik.info?subject=Internship Application - [Position Name]&body=Hi Zentik IT Solution Team,%0D%0A%0D%0AI am interested in applying for the [Position Name] internship position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards,%0D%0A[Your Name]"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#007A8C] text-white font-semibold px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              <FaEnvelope />
              <span className="hidden sm:inline">Send Resume to</span> contact@zentik.info
            </a>
            <p className="text-[var(--text-tertiary)] mt-4 sm:mt-6 text-xs sm:text-sm">
              We typically respond within 3-5 business days
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Careers
