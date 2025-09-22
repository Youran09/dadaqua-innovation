'use client'

import { motion } from 'framer-motion'
import { Users, Droplet, Briefcase, GraduationCap, Heart, TrendingUp } from 'lucide-react'
import ImpactCalculator from './ImpactCalculator'

const Impact = () => {
  const impacts = [
    {
      icon: <Droplet className="h-10 w-10 text-primary" />,
      title: 'Water Security',
      value: '100%',
      description: 'Increase in daily water access',
      details: 'From 10L to 20L per person daily',
    },
    {
      icon: <Briefcase className="h-10 w-10 text-solar" />,
      title: 'Job Creation',
      value: '500+',
      description: 'Direct employment opportunities',
      details: 'Technical, agricultural, and administrative roles',
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-earth" />,
      title: 'Skills Development',
      value: '2,000+',
      description: 'Refugees trained annually',
      details: 'Solar tech, agriculture, and water management',
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: 'Health Improvement',
      value: '40%',
      description: 'Reduction in waterborne diseases',
      details: 'Clean water access and hygiene education',
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: 'Community Gardens',
      value: '50',
      description: 'Agrivoltaic farming plots',
      details: 'Fresh produce for 5,000+ families',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
      title: 'Economic Growth',
      value: '$2M+',
      description: 'Annual economic impact',
      details: 'Local economy stimulation',
    },
  ]

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformative <span className="gradient-text">Community Impact</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Beyond water access: Creating sustainable livelihoods and building resilient communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">{impact.icon}</div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-1">{impact.title}</h3>
                  <div className="text-3xl font-bold text-gray-900">{impact.value}</div>
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-2">{impact.description}</p>
              <p className="text-sm text-gray-600">{impact.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Ripple Effects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">280,000</div>
              <p className="text-lg">Direct beneficiaries</p>
              <p className="text-sm opacity-90 mt-2">Refugees with improved water access</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1.2M</div>
              <p className="text-lg">Indirect impact</p>
              <p className="text-sm opacity-90 mt-2">Extended family and community members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-lg">Years of impact</p>
              <p className="text-sm opacity-90 mt-2">System operational lifespan</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Calculate Your Impact</h3>
          <ImpactCalculator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Success Stories (Coming Soon)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <p className="italic text-gray-700 mb-2">
                "Access to clean water has transformed our daily lives. My children can now attend school
                instead of spending hours fetching water."
              </p>
              <p className="text-sm font-semibold">- Refugee Community Member</p>
            </div>
            <div className="border-l-4 border-solar pl-4">
              <p className="italic text-gray-700 mb-2">
                "The solar training program gave me skills and hope. I now maintain the systems and
                support my family."
              </p>
              <p className="text-sm font-semibold">- Local Technician</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact