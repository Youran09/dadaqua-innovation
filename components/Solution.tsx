'use client'

import { motion } from 'framer-motion'
import { Sun, Droplet, Leaf, Battery, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Solution = () => {
  const [activeTab, setActiveTab] = useState('solar')

  const solutions = {
    solar: {
      title: 'Solar-Powered Water Systems',
      description: 'Replace diesel generators with solar panels for sustainable water pumping',
      benefits: [
        'Zero operational fuel costs',
        'Extended pumping hours (sunrise to sunset)',
        'Minimal maintenance requirements',
        '25+ years operational lifespan',
      ],
      icon: <Sun className="h-12 w-12 text-solar" />,
    },
    agrivoltaic: {
      title: 'Agrivoltaic Innovation',
      description: 'Community gardens flourishing under solar panel shade',
      benefits: [
        'Dual land use: energy + agriculture',
        '30% increase in crop yield from shade',
        'Reduced water evaporation',
        'Fresh produce for refugee families',
      ],
      icon: <Leaf className="h-12 w-12 text-green-600" />,
    },
    integration: {
      title: 'Integrated Ecosystem',
      description: 'A complete solution addressing water, food, energy, and employment',
      benefits: [
        'Water security for 280,000 refugees',
        'Local job creation and training',
        'Community ownership model',
        'Sustainable revenue generation',
      ],
      icon: <Battery className="h-12 w-12 text-primary" />,
    },
  }

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Innovative Solution</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A comprehensive solar-powered ecosystem that transforms water access,
            creates jobs, and builds sustainable communities
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(solutions).map(([key, solution]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {solution.title.split(' ')[0]}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-blue-50 to-solar/10 rounded-2xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                {solutions[activeTab as keyof typeof solutions].icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">
                  {solutions[activeTab as keyof typeof solutions].title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {solutions[activeTab as keyof typeof solutions].description}
                </p>
                <ul className="space-y-2">
                  {solutions[activeTab as keyof typeof solutions].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                <Sun className="h-16 w-16 text-solar mx-auto mb-2" />
                <h4 className="font-semibold">Solar Panel System</h4>
              </div>
              <div className="text-left text-sm text-gray-600 space-y-1">
                <p><strong>Capacity:</strong> 50-100 kW per installation</p>
                <p><strong>Panel Type:</strong> Monocrystalline silicon</p>
                <p><strong>Efficiency:</strong> 20-22% module efficiency</p>
                <p><strong>Warranty:</strong> 25-year performance guarantee</p>
                <p><strong>Mounting:</strong> Ground-mounted tracking system</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                <Droplet className="h-16 w-16 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Water Pump System</h4>
              </div>
              <div className="text-left text-sm text-gray-600 space-y-1">
                <p><strong>Type:</strong> Submersible centrifugal pumps</p>
                <p><strong>Capacity:</strong> 20-50 m³/hour flow rate</p>
                <p><strong>Head:</strong> Up to 100m pumping height</p>
                <p><strong>Motor:</strong> Permanent magnet synchronous</p>
                <p><strong>Controller:</strong> MPPT solar pump inverter</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
                <Leaf className="h-16 w-16 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold">Agrivoltaic Design</h4>
              </div>
              <div className="text-left text-sm text-gray-600 space-y-1">
                <p><strong>Panel Height:</strong> 3-4m above ground</p>
                <p><strong>Spacing:</strong> 6-8m between panel rows</p>
                <p><strong>Crop Area:</strong> 60-70% of total land use</p>
                <p><strong>Irrigation:</strong> Drip system using pumped water</p>
                <p><strong>Monitoring:</strong> Soil moisture & climate sensors</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-center">System Performance Metrics</h4>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">5.5 kWh/m²</div>
                <p className="text-sm text-gray-600">Daily solar irradiation (Dadaab avg)</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">12-14 hrs</div>
                <p className="text-sm text-gray-600">Daily pumping operation</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500-1000m³</div>
                <p className="text-sm text-gray-600">Daily water output per system</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%+</div>
                <p className="text-sm text-gray-600">Expected system uptime</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Cost Comparison</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-red-600 mb-3">Current (Diesel)</h4>
              <div className="text-3xl font-bold mb-2">$540,000</div>
              <p className="text-gray-600">Annual operational cost</p>
              <ul className="mt-4 text-left text-sm text-gray-700 space-y-1">
                <li>• Diesel fuel: $45,000/month</li>
                <li>• Generator maintenance: $5,000/month</li>
                <li>• Limited pumping hours (8-10/day)</li>
                <li>• Frequent breakdowns & repairs</li>
                <li>• Equipment lifespan: 5-10 years</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-600 mb-3">Future (Solar)</h4>
              <div className="text-3xl font-bold mb-2">$0</div>
              <p className="text-gray-600">Annual fuel cost</p>
              <ul className="mt-4 text-left text-sm text-gray-700 space-y-1">
                <li>• No fuel costs (solar powered)</li>
                <li>• Minimal maintenance: $500/month</li>
                <li>• Extended pumping hours (12-14/day)</li>
                <li>• High reliability (95%+ uptime)</li>
                <li>• Equipment lifespan: 25+ years</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution