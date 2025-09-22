'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Droplet, Sun, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-solar/20 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Transforming Lives</span>
            <br />
            Through Sustainable Water
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Bringing solar-powered water solutions to 280,000 refugees in Dadaab, Kenya
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#investment"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-semibold"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <Droplet className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Water Access</h3>
              <p className="text-gray-600">From 10L to 20L per person daily</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <Sun className="h-12 w-12 text-solar mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Solar Power</h3>
              <p className="text-gray-600">100% renewable energy solution</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <Users className="h-12 w-12 text-earth mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-gray-600">Jobs, food security & empowerment</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero