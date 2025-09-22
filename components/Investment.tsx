'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

const Investment = () => {
  const investmentTiers = [
    {
      name: 'Community Partner',
      amount: '$50,000 - $100,000',
      benefits: [
        'Fund 1 complete water point',
        'Direct impact on 5,000 refugees',
        'Quarterly impact reports',
        'Site visit opportunities',
      ],
      color: 'bg-blue-50 border-blue-200',
    },
    {
      name: 'Impact Leader',
      amount: '$100,000 - $500,000',
      benefits: [
        'Fund multiple water points',
        'Named partnership recognition',
        'Board advisory opportunity',
        'Annual stakeholder meetings',
      ],
      color: 'bg-solar/10 border-solar/30',
      featured: true,
    },
    {
      name: 'Transformation Partner',
      amount: '$500,000+',
      benefits: [
        'Full system implementation',
        'Strategic partnership role',
        'Co-branding opportunities',
        'Expansion planning input',
      ],
      color: 'bg-green-50 border-green-200',
    },
  ]

  const botModel = [
    { phase: 'Build', duration: '6 months', description: 'Installation & setup' },
    { phase: 'Operate', duration: '5 years', description: 'Management & returns' },
    { phase: 'Transfer', duration: 'Year 6', description: 'Community ownership' },
  ]

  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investment <span className="gradient-text">Opportunity</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us in creating sustainable water infrastructure with guaranteed social
            and financial returns
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">BOT Investment Framework</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {botModel.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{phase.phase}</h4>
                <p className="text-solar font-semibold mb-2">{phase.duration}</p>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold mb-3">Financial Structure:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                Investment repaid through diesel cost savings
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                5-year payback period with 8-12% IRR
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                System transfers to community ownership after payback
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                Risk mitigation through insurance and guarantees
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {investmentTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 border-2 ${tier.color} ${
                tier.featured ? 'transform scale-105 shadow-xl' : 'shadow-lg'
              }`}
            >
              {tier.featured && (
                <div className="bg-solar text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-2xl font-bold text-primary mb-4">{tier.amount}</div>
              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-semibold">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Why Invest in Dadaqua?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Measurable Impact</h4>
              <p className="text-sm opacity-90">Direct, quantifiable social returns</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">De-risked Model</h4>
              <p className="text-sm opacity-90">Proven technology & guaranteed offtake</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Long-term Value</h4>
              <p className="text-sm opacity-90">25+ years of community benefit</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">ESG Leadership</h4>
              <p className="text-sm opacity-90">Align with UN SDGs 6, 7, and 13</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-gray-700 mb-6">
            Download our investment prospectus for detailed financial projections and impact metrics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-semibold">
              Download Prospectus
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Investment