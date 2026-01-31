import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FaCode, FaMobile, FaCloud, FaBrain, FaRocket, FaShieldAlt, FaSearch, FaBullhorn, FaPaintBrush, FaChartLine, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

const ServiceDetail = () => {
  const { serviceId } = useParams()

  const servicesData = {
    'web-development': {
      icon: FaCode,
      title: 'Web Development',
      tagline: 'Build powerful web applications that drive business growth',
      description: 'Our web development services combine cutting-edge technology with creative design to deliver responsive, scalable, and high-performance web applications. We specialize in modern frameworks and technologies that ensure your web presence stands out in the digital landscape.',
      image1: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Responsive Design'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'GraphQL'],
      benefits: [
        'Scalable architecture that grows with your business',
        'SEO-optimized for better search engine visibility',
        'Fast loading times and optimal performance',
        'Cross-browser compatibility',
        'Secure and maintainable codebase'
      ],
      process: [
        { step: 'Discovery', description: 'Understanding your business goals and requirements' },
        { step: 'Design', description: 'Creating wireframes and visual designs' },
        { step: 'Development', description: 'Building your application with best practices' },
        { step: 'Testing', description: 'Rigorous quality assurance and testing' },
        { step: 'Deployment', description: 'Launching your application to production' },
        { step: 'Support', description: 'Ongoing maintenance and updates' }
      ]
    },
    'mobile-app-development': {
      icon: FaMobile,
      title: 'Mobile App Development',
      tagline: 'Create exceptional mobile experiences for iOS and Android',
      description: 'Transform your ideas into stunning mobile applications that users love. Our team builds native and cross-platform apps that deliver seamless performance, intuitive interfaces, and engaging user experiences across all devices.',
      image1: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'In-App Purchases'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      benefits: [
        'Single codebase for multiple platforms',
        'Native-like performance and feel',
        'Reduced development time and costs',
        'Easy maintenance and updates',
        'Access to device features and sensors'
      ],
      process: [
        { step: 'Strategy', description: 'Defining app goals and target audience' },
        { step: 'UX/UI Design', description: 'Crafting intuitive user interfaces' },
        { step: 'Development', description: 'Building robust mobile applications' },
        { step: 'Testing', description: 'Testing across devices and OS versions' },
        { step: 'Launch', description: 'Publishing to App Store and Play Store' },
        { step: 'Optimization', description: 'Monitoring and improving performance' }
      ]
    },
    'cloud-solutions': {
      icon: FaCloud,
      title: 'Cloud Solutions',
      tagline: 'Scale your infrastructure with modern cloud technology',
      description: 'Leverage the power of cloud computing to transform your IT infrastructure. We help businesses migrate to the cloud, optimize costs, and build scalable solutions using industry-leading platforms like AWS, Azure, and Google Cloud.',
      image1: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
      features: [
        'Cloud Migration Services',
        'Infrastructure as Code',
        'DevOps & CI/CD',
        'Cloud Security',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      benefits: [
        'Reduced infrastructure costs',
        'Enhanced scalability and flexibility',
        'Improved reliability and uptime',
        'Automatic updates and patches',
        'Global reach and performance'
      ],
      process: [
        { step: 'Assessment', description: 'Evaluating your current infrastructure' },
        { step: 'Planning', description: 'Designing cloud architecture' },
        { step: 'Migration', description: 'Moving workloads to the cloud' },
        { step: 'Optimization', description: 'Fine-tuning performance and costs' },
        { step: 'Monitoring', description: 'Continuous monitoring and alerts' },
        { step: 'Management', description: 'Ongoing support and maintenance' }
      ]
    },
    'ai-data-integration': {
      icon: FaBrain,
      title: 'AI & Data Integration',
      tagline: 'Unlock the power of artificial intelligence and data',
      description: 'Harness cutting-edge AI and machine learning technologies to unlock valuable insights from your data. Our solutions help automate processes, predict trends, and make data-driven decisions that propel your business forward.',
      image1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Data Pipeline Automation'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Apache Spark'],
      benefits: [
        'Automated decision-making processes',
        'Enhanced customer experiences',
        'Improved operational efficiency',
        'Data-driven insights and predictions',
        'Competitive advantage through innovation'
      ],
      process: [
        { step: 'Data Analysis', description: 'Understanding your data landscape' },
        { step: 'Model Design', description: 'Creating AI/ML architectures' },
        { step: 'Training', description: 'Training models with your data' },
        { step: 'Validation', description: 'Testing accuracy and performance' },
        { step: 'Integration', description: 'Deploying into your systems' },
        { step: 'Refinement', description: 'Continuous learning and improvement' }
      ]
    },
    'digital-transformation': {
      icon: FaRocket,
      title: 'Digital Transformation',
      tagline: 'Transform your business for the digital age',
      description: 'Navigate the complexities of digital transformation with our comprehensive consulting and implementation services. We help organizations modernize operations, enhance customer engagement, and drive innovation through strategic digital initiatives.',
      image1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop',
      features: [
        'Digital Strategy Consulting',
        'Process Automation',
        'Change Management',
        'Innovation Workshops',
        'Legacy System Modernization',
        'Customer Experience Enhancement'
      ],
      technologies: ['RPA Tools', 'Low-Code Platforms', 'Analytics Tools', 'CRM Systems', 'ERP Solutions', 'Workflow Automation'],
      benefits: [
        'Streamlined business processes',
        'Reduced operational costs',
        'Improved employee productivity',
        'Enhanced customer satisfaction',
        'Faster time-to-market for innovations'
      ],
      process: [
        { step: 'Assessment', description: 'Analyzing current digital maturity' },
        { step: 'Strategy', description: 'Developing transformation roadmap' },
        { step: 'Pilot', description: 'Testing solutions in controlled environment' },
        { step: 'Implementation', description: 'Rolling out across organization' },
        { step: 'Training', description: 'Empowering teams with new tools' },
        { step: 'Evolution', description: 'Continuous improvement and adaptation' }
      ]
    },
    'cybersecurity': {
      icon: FaShieldAlt,
      title: 'Cybersecurity',
      tagline: 'Protect your digital assets with enterprise-grade security',
      description: 'Safeguard your business from cyber threats with our comprehensive security solutions. We provide end-to-end protection including vulnerability assessments, penetration testing, security audits, and compliance management to keep your data and systems secure.',
      image1: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Threat Detection & Response',
        'Compliance Management',
        'Security Training',
        'Incident Response Planning'
      ],
      technologies: ['SIEM Tools', 'Firewalls', 'IDS/IPS', 'Encryption', 'VPN', 'Multi-Factor Authentication'],
      benefits: [
        'Protection against cyber threats',
        'Regulatory compliance assurance',
        'Reduced risk of data breaches',
        'Enhanced customer trust',
        'Business continuity protection'
      ],
      process: [
        { step: 'Risk Assessment', description: 'Identifying security vulnerabilities' },
        { step: 'Strategy', description: 'Developing security framework' },
        { step: 'Implementation', description: 'Deploying security measures' },
        { step: 'Testing', description: 'Validating security controls' },
        { step: 'Monitoring', description: '24/7 threat monitoring' },
        { step: 'Response', description: 'Rapid incident response and recovery' }
      ]
    },
    'seo-optimization': {
      icon: FaSearch,
      title: 'SEO Optimization',
      tagline: 'Boost your online visibility and dominate search rankings',
      description: 'Our comprehensive SEO services help your business rank higher in search engines, drive organic traffic, and convert visitors into customers. We use data-driven strategies and proven techniques to improve your online presence.',
      image1: 'https://images.unsplash.com/photo-1571677208710-96a80db23cd5?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      features: [
        'Technical SEO Audit',
        'On-Page Optimization',
        'Content Strategy & Optimization',
        'Link Building & Outreach',
        'Local SEO',
        'SEO Analytics & Reporting'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Schema Markup', 'Screaming Frog'],
      benefits: [
        'Increased organic traffic and visibility',
        'Higher search engine rankings',
        'Better user experience and site performance',
        'Improved conversion rates',
        'Long-term sustainable growth'
      ],
      process: [
        { step: 'Audit', description: 'Comprehensive SEO analysis and competitor research' },
        { step: 'Strategy', description: 'Custom SEO roadmap and keyword targeting' },
        { step: 'Optimization', description: 'Technical and on-page improvements' },
        { step: 'Content', description: 'Quality content creation and optimization' },
        { step: 'Link Building', description: 'Authority building through quality backlinks' },
        { step: 'Monitoring', description: 'Continuous tracking and optimization' }
      ]
    },
    'digital-marketing': {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      tagline: 'Drive growth with data-driven marketing campaigns',
      description: 'Our digital marketing services combine creativity with analytics to create campaigns that resonate with your audience and drive measurable results. From social media to email marketing, we cover all aspects of digital promotion.',
      image1: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&h=600&fit=crop',
      features: [
        'Social Media Marketing',
        'Pay-Per-Click (PPC) Advertising',
        'Email Marketing Campaigns',
        'Content Marketing',
        'Influencer Marketing',
        'Marketing Automation'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot', 'Hootsuite', 'Google Tag Manager'],
      benefits: [
        'Increased brand awareness and reach',
        'Higher engagement and conversions',
        'Better ROI on marketing spend',
        'Data-driven decision making',
        'Scalable growth strategies'
      ],
      process: [
        { step: 'Research', description: 'Audience analysis and market research' },
        { step: 'Planning', description: 'Campaign strategy and channel selection' },
        { step: 'Creation', description: 'Compelling content and ad creation' },
        { step: 'Launch', description: 'Campaign deployment across channels' },
        { step: 'Optimization', description: 'A/B testing and performance tuning' },
        { step: 'Reporting', description: 'Detailed analytics and insights' }
      ]
    },
    'uiux-design': {
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      tagline: 'Create beautiful experiences that users love',
      description: 'Our UI/UX design services focus on creating intuitive, engaging, and aesthetically pleasing digital experiences. We combine user research, design thinking, and creative expertise to craft interfaces that delight users and achieve business goals.',
      image1: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=600&fit=crop',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Interaction Design',
        'Usability Testing',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      benefits: [
        'Enhanced user satisfaction and engagement',
        'Reduced development costs through early testing',
        'Improved conversion rates',
        'Consistent brand experience',
        'Competitive advantage in the market'
      ],
      process: [
        { step: 'Research', description: 'Understanding users and their needs' },
        { step: 'Ideation', description: 'Brainstorming and concept development' },
        { step: 'Wireframing', description: 'Low-fidelity layouts and flows' },
        { step: 'Design', description: 'High-fidelity visual design' },
        { step: 'Prototype', description: 'Interactive prototypes for testing' },
        { step: 'Handoff', description: 'Developer-ready design specifications' }
      ]
    },
    'business-analytics': {
      icon: FaChartLine,
      title: 'Business Analytics',
      tagline: 'Transform data into actionable business insights',
      description: 'Our business analytics services help you make informed decisions by turning complex data into clear, actionable insights. We build custom dashboards, predictive models, and reporting systems that drive strategic decision-making.',
      image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=600&fit=crop',
      features: [
        'Data Visualization Dashboards',
        'Predictive Analytics',
        'Custom Reporting Solutions',
        'Business Intelligence',
        'Data Mining & Analysis',
        'KPI Tracking & Monitoring'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'Google Data Studio'],
      benefits: [
        'Data-driven strategic decisions',
        'Improved operational efficiency',
        'Identification of growth opportunities',
        'Real-time performance monitoring',
        'Better resource allocation'
      ],
      process: [
        { step: 'Assessment', description: 'Understanding data sources and business goals' },
        { step: 'Data Collection', description: 'Gathering and integrating data' },
        { step: 'Analysis', description: 'Statistical analysis and pattern recognition' },
        { step: 'Visualization', description: 'Creating intuitive dashboards' },
        { step: 'Insights', description: 'Generating actionable recommendations' },
        { step: 'Implementation', description: 'Deploying analytics solutions' }
      ]
    }
  }

  const service = servicesData[serviceId]

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const ServiceIcon = service.icon

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <Link
          to="/services"
          className="inline-flex items-center text-primary hover:text-[#00B8CE] transition-colors duration-300 group"
        >
          <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 mb-16"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
            <ServiceIcon className="text-5xl text-primary" />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)]">
              {service.title}
            </h1>
          </div>
        </div>
        <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
          {service.tagline}
        </p>
        <p className="text-xl text-[var(--text-tertiary)] leading-relaxed max-w-4xl">
          {service.description}
        </p>
      </motion.div>

      {/* Image 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 mb-16"
      >
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={service.image1}
            alt={`${service.title} showcase`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent"></div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-3 bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300"
              >
                <FaCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Technologies */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap gap-4">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full text-lg font-semibold border border-primary/30 hover:bg-primary/20 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-7xl mx-auto px-4 mb-16"
      >
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={service.image2}
            alt={`${service.title} in action`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent"></div>
        </div>
      </motion.div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] p-12 rounded-2xl border border-[var(--border-color)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
            Benefits
          </h2>
          <ul className="space-y-4">
            {service.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex items-start space-x-4 text-lg text-[var(--text-secondary)]"
              >
                <FaCheckCircle className="text-primary text-2xl mt-1 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 mt-2">{step.step}</h3>
                <p className="text-[var(--text-tertiary)]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="bg-gradient-to-r from-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--text-tertiary)] mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-[#007A8C] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
          >
            Contact Us Today
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceDetail
