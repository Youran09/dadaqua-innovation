'use client'

import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Clock, Target, Users, Building, Wrench } from 'lucide-react'

const Timeline = () => {
  const phases = [
    {
      phase: "Phase 1",
      period: "Q1-Q2 2025",
      title: "Foundation & Planning",
      status: "upcoming",
      icon: <Target className="h-6 w-6" />,
      milestones: [
        "Complete detailed site assessment and geological surveys",
        "Finalize community engagement and water committee formation",
        "Secure all regulatory approvals (NEMA, Water Authority, County)",
        "Complete detailed engineering design and procurement planning",
        "Establish partnerships with UNHCR and local government",
        "Launch refugee technician training program (first cohort of 20)"
      ],
      deliverables: [
        "Environmental Impact Assessment approved",
        "Community ownership agreements signed",
        "Detailed technical specifications finalized",
        "Supply chain partnerships established"
      ]
    },
    {
      phase: "Phase 2",
      period: "Q3-Q4 2025",
      title: "Installation & Implementation",
      status: "planned",
      icon: <Building className="h-6 w-6" />,
      milestones: [
        "Install first solar water pumping system (50kW capacity)",
        "Complete water distribution infrastructure upgrades",
        "Establish agrivoltaic demonstration plots (2 hectares)",
        "Train second cohort of refugee technicians (25 people)",
        "Install monitoring and data collection systems",
        "Begin community-managed agricultural production"
      ],
      deliverables: [
        "First 5,000 refugees with improved water access",
        "Daily water availability increased from 10L to 15L per person",
        "Operational agrivoltaic system producing fresh vegetables",
        "Functioning community governance structures"
      ]
    },
    {
      phase: "Phase 3",
      period: "Q1-Q2 2026",
      title: "Scale-Up & Optimization",
      status: "planned",
      icon: <Users className="h-6 w-6" />,
      milestones: [
        "Install additional solar systems to serve 25,000 refugees",
        "Expand agrivoltaic production to 10 hectares",
        "Establish local spare parts supply chain",
        "Complete advanced technician certification program",
        "Launch community-managed revenue generation activities",
        "Begin preparation for system ownership transfer"
      ],
      deliverables: [
        "25,000 refugees accessing 20L daily water per person",
        "Fully operational community maintenance teams",
        "Sustainable agricultural production meeting 30% of vegetable needs",
        "Established cost recovery mechanisms"
      ]
    },
    {
      phase: "Phase 4",
      period: "Q3-Q4 2026",
      title: "Full Operation & Transfer",
      status: "planned",
      icon: <Wrench className="h-6 w-6" />,
      milestones: [
        "Complete infrastructure to serve all 280,000 refugees",
        "Achieve full community ownership and operation",
        "Establish sustainable financing for ongoing maintenance",
        "Document and replicate model for other refugee camps",
        "Complete investor payback through documented fuel savings",
        "Transition to permanent urban water infrastructure"
      ],
      deliverables: [
        "Water security for entire Dadaab refugee population",
        "Fully autonomous community-managed systems",
        "Documented ROI for investors through verified savings",
        "Scalable model ready for replication"
      ]
    }
  ]

  const keyMetrics = [
    {
      metric: "Total Investment Required",
      value: "$2.5M - $5M",
      description: "Phased investment based on demonstrated success"
    },
    {
      metric: "Expected ROI Timeline",
      value: "3-5 years",
      description: "Return through documented diesel fuel savings"
    },
    {
      metric: "System Lifespan",
      value: "25+ years",
      description: "Long-term community asset with minimal maintenance"
    },
    {
      metric: "People Served",
      value: "280,000",
      description: "Complete refugee population with improved water access"
    }
  ]

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Implementation <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A carefully planned 18-month journey from concept to full community ownership,
            with clear milestones and measurable impact at every stage
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
              <h4 className="font-semibold mb-2">{metric.metric}</h4>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary to-green-500"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className="text-primary">{phase.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{phase.phase}</h3>
                        <p className="text-sm text-gray-600">{phase.period}</p>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-3">{phase.title}</h4>

                    <div className="mb-4">
                      <h5 className="font-medium text-gray-800 mb-2">Key Milestones:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {phase.milestones.slice(0, 3).map((milestone, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {milestone}
                          </li>
                        ))}
                        {phase.milestones.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
                            +{phase.milestones.length - 3} more milestones...
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Expected Deliverables:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative">
                    {index + 1}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to be Part of This Journey?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join us in implementing this transformative solution. Whether you're an investor,
            partner organization, or technical expert, there's a role for you in this timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Download Detailed Timeline
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
              Schedule Progress Review
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline