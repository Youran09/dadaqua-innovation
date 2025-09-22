'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Award, Users, Building } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      type: 'community',
      quote: "When we heard about solar water pumps, we didn't believe it could work in our harsh environment. But seeing the demonstration changed everything. Our children could finally have clean water without long walks.",
      author: "Fatuma Hassan",
      role: "Community Water Committee Chair",
      location: "Dadaab Refugee Camp",
      icon: <Users className="h-6 w-6" />
    },
    {
      type: 'expert',
      quote: "Solar water pumping in refugee contexts represents one of the most promising sustainable solutions we've evaluated. The technology is proven, maintenance requirements are manageable, and community ownership models show strong success rates.",
      author: "Dr. Sarah Mitchell",
      role: "Senior Water Engineer",
      location: "Humanitarian Water Solutions Consortium",
      icon: <Award className="h-6 w-6" />
    },
    {
      type: 'partner',
      quote: "Cost-effective water solutions that reduce operational burden while improving service delivery align perfectly with our humanitarian mandate. Solar systems offer the sustainability we need for long-term refugee support.",
      author: "Ahmed Ibrahim",
      role: "Regional Water Coordinator",
      location: "International Relief Organization",
      icon: <Building className="h-6 w-6" />
    }
  ]

  const endorsements = [
    {
      organization: "Kenya Water Institute",
      statement: "Technical feasibility confirmed for Dadaab geology and climate conditions",
      logo: "/api/placeholder/120/60"
    },
    {
      organization: "Solar Water Pumping Association",
      statement: "Certified member organization with proven implementation track record",
      logo: "/api/placeholder/120/60"
    },
    {
      organization: "East Africa Development Partners",
      statement: "Aligned with regional sustainable development goals and refugee integration policies",
      logo: "/api/placeholder/120/60"
    }
  ]

  const recognitions = [
    {
      title: "UN Sustainable Development Goals",
      items: ["Goal 6: Clean Water & Sanitation", "Goal 7: Affordable Clean Energy", "Goal 13: Climate Action"],
      icon: <Award className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Technical Validation",
      items: ["Kenya National Water Authority", "Solar Energy Association of Kenya", "Refugee Water Standards Compliance"],
      icon: <Star className="h-8 w-8 text-yellow-500" />
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Communities & Experts</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Voices from the community, technical experts, and implementation partners
            who understand the critical need for sustainable water solutions
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative"
            >
              <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-primary">
                  {testimonial.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Endorsements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Official Endorsements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {endorsements.map((endorsement, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-24 h-12 bg-gray-200 rounded mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xs text-gray-500">Logo</span>
                </div>
                <h4 className="font-semibold mb-2">{endorsement.organization}</h4>
                <p className="text-sm text-gray-600">{endorsement.statement}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {recognitions.map((recognition, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {recognition.icon}
                <h3 className="text-xl font-bold ml-3">{recognition.title}</h3>
              </div>
              <ul className="space-y-2">
                {recognition.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Network</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're building partnerships with organizations, investors, and community leaders
            who share our vision of sustainable water security for refugee communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-semibold">
              Partner With Us
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold">
              Provide Endorsement
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials