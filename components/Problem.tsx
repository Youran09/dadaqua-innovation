'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Clock, Droplet } from 'lucide-react'

const Problem = () => {
  const stats = [
    {
      icon: <Droplet className="h-8 w-8 text-red-500" />,
      value: '10L',
      label: 'Daily water per person',
      description: '50% of UN minimum (20L standard)',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      value: '$45,000',
      label: 'Monthly water cost',
      description: 'Using expensive diesel pumps',
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      value: '3-4 hrs',
      label: 'Daily water collection',
      description: 'Time lost to water access',
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      value: '280,000',
      label: 'Affected refugees',
      description: 'Living with water scarcity',
    },
  ]

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Water Crisis in <span className="text-red-600">Dadaab</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The world's largest refugee camp faces severe water scarcity,
            forcing families to survive on only 10L daily - half the UN's 20L minimum standard.
            Diesel dependency limits pumping hours and drives up operational costs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            The Diesel Dependency Problem
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Current System Challenges:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Diesel generators power water pumps (expensive & unreliable)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  High operational costs limit water availability
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Limited pumping hours due to fuel rationing
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Aid funding cuts worsen the water crisis
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Human Impact:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Women & children spend 3-4 hours daily collecting water
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Health risks from inadequate water (hygiene, dehydration)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  No irrigation means food insecurity persists
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  UN budget constraints reduce essential services
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem