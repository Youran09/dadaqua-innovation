'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Globe } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Marten Aun',
      role: 'Project Lead',
      expertise: 'Strategic Development & Partnerships',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'Iga Wietecha',
      role: 'Technical Director',
      expertise: 'Solar Energy Systems',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'Maja Schober',
      role: 'Community Engagement',
      expertise: 'Social Impact & Development',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'Niall Hubbard',
      role: 'Operations Manager',
      expertise: 'Project Implementation',
      image: '/api/placeholder/200/200',
    },
    {
      name: 'Youran Tao Jensen',
      role: 'Innovation Lead',
      expertise: 'Agrivoltaic Solutions',
      image: '/api/placeholder/200/200',
    },
  ]

  const partners = [
    { name: 'UNHCR', category: 'Implementation Partner' },
    { name: 'Kenya Red Cross', category: 'Local Partner' },
    { name: 'Solar Water Solutions', category: 'Technology Partner' },
    { name: 'Impact Investors Network', category: 'Financial Partner' },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Team & Partners</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bringing together expertise in renewable energy, community development,
            and humanitarian innovation
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <div className="flex justify-center space-x-3">
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Strategic Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-1">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.category}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for partners who share our vision of sustainable
            development and community empowerment
          </p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-semibold">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Team