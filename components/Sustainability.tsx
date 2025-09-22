'use client'

import { motion } from 'framer-motion'
import { Wrench, Users, Building, TreePine, Shield, TrendingUp } from 'lucide-react'

const Sustainability = () => {
  const pillars = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: 'Local Maintenance',
      description: 'Refugee-trained technicians ensure system reliability',
      points: [
        'Comprehensive training programs',
        'Locally sourced spare parts',
        'Preventive maintenance schedules',
        'Knowledge transfer initiatives',
      ],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Community Ownership',
      description: 'Water committees manage and govern the systems',
      points: [
        'Democratic decision-making',
        'Transparent fund management',
        'Conflict resolution mechanisms',
        'Women leadership programs',
      ],
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: 'Urban Integration',
      description: 'Alignment with Kenya\'s vision for Dadaab',
      points: [
        'Infrastructure development',
        'Economic integration',
        'Permanent settlement planning',
        'Government partnership',
      ],
    },
  ]

  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Long-term Success</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our sustainability model ensures the project thrives for generations,
            creating lasting change in Dadaab
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="text-primary mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-700 mb-4">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-primary mr-2">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Environmental Benefits</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <TreePine className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">500 tons</div>
              <p className="text-sm text-gray-600">CO2 saved annually</p>
            </div>
            <div>
              <Shield className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <p className="text-sm text-gray-600">Renewable energy</p>
            </div>
            <div>
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">30%</div>
              <p className="text-sm text-gray-600">Water efficiency gain</p>
            </div>
            <div>
              <Users className="h-10 w-10 text-solar mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">Zero</div>
              <p className="text-sm text-gray-600">Noise pollution</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Project Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="bg-white rounded-lg p-4 shadow-md max-w-sm mr-8 text-right">
                  <div className="font-bold text-primary">Phase 1: Q1-Q2 2025</div>
                  <div className="text-sm text-gray-600">Site assessment & community engagement</div>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                <div className="w-1/3"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-1/3"></div>
                <div className="w-4 h-4 bg-solar rounded-full relative z-10"></div>
                <div className="bg-white rounded-lg p-4 shadow-md max-w-sm ml-8 text-left">
                  <div className="font-bold text-solar">Phase 2: Q3-Q4 2025</div>
                  <div className="text-sm text-gray-600">Installation & training programs</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="bg-white rounded-lg p-4 shadow-md max-w-sm mr-8 text-right">
                  <div className="font-bold text-green-600">Phase 3: 2026</div>
                  <div className="text-sm text-gray-600">Full operation & community handover</div>
                </div>
                <div className="w-4 h-4 bg-green-600 rounded-full relative z-10"></div>
                <div className="w-1/3"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sustainability