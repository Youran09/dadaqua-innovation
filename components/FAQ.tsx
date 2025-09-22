'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: "Project Fundamentals",
      questions: [
        {
          question: "What is the exact water cost structure mentioned in your presentation?",
          answer: "We are currently clarifying the exact operational cost structure. Our presentation mentions '$1 per liter' while our analysis shows operational costs that need verification. We will provide updated, source-verified financial data in our investment prospectus. Transparency is critical for investor confidence."
        },
        {
          question: "How do you verify the 280,000 refugee population figure?",
          answer: "The 280,000 figure represents the official UNHCR registered population in Dadaab refugee complex. This number fluctuates based on new arrivals and voluntary repatriation programs. We will provide current UNHCR statistics and demographic breakdowns in our detailed project documentation."
        },
        {
          question: "What is the UN minimum water standard, and how does current supply compare?",
          answer: "The UN minimum standard is 20 liters per person per day for basic needs (drinking, cooking, hygiene). Dadaab currently provides approximately 10 liters per person daily - exactly 50% of the minimum. Our solar solution aims to increase this to 20L daily while reducing operational costs."
        }
      ]
    },
    {
      category: "Investment & Financial",
      questions: [
        {
          question: "What are the key investment risks?",
          answer: "Main risks include: (1) Political stability in Kenya affecting refugee policy, (2) Technology performance in harsh desert conditions, (3) Community acceptance and maintenance capacity, (4) Currency fluctuation affecting ROI calculations, (5) Potential changes in UNHCR funding priorities. We provide detailed risk mitigation strategies in our investment prospectus."
        },
        {
          question: "How does the Build-Operate-Transfer (BOT) model work exactly?",
          answer: "Phase 1: Investors fund installation (6-12 months). Phase 2: We operate systems, collect revenue from water cost savings, repay investors (3-5 years). Phase 3: Full ownership transfers to community water committees. Investors receive returns through documented fuel savings passed through UNHCR budget restructuring."
        },
        {
          question: "What guarantees exist for return on investment?",
          answer: "While no investment is guaranteed, our model relies on verified diesel savings that are currently being spent by UNHCR. We're developing partnerships with UNHCR to formalize cost-savings revenue streams. Detailed financial projections with conservative scenarios are available to qualified investors."
        },
        {
          question: "How do you handle currency and inflation risks?",
          answer: "We structure investments in USD to minimize currency risk. Diesel costs are typically USD-indexed, providing natural inflation protection. Local maintenance costs (KES) represent a small percentage of total operations, limiting local currency exposure."
        }
      ]
    },
    {
      category: "Technical & Sustainability",
      questions: [
        {
          question: "What happens when solar panels need replacement?",
          answer: "Solar panels have 25-year warranties and typically last 25-30 years. Our financial model includes replacement reserves. By transfer time, systems should have 15+ years remaining life. We're establishing local supply chains for components and training refugee technicians for maintenance."
        },
        {
          question: "How do you ensure community ownership and sustainability?",
          answer: "We establish water committees with democratic governance, provide comprehensive technical training to refugee technicians, create transparent financial management systems, and align with Kenya's plan to transition Dadaab from temporary camp to permanent city status."
        },
        {
          question: "What if the refugee population changes significantly?",
          answer: "Our modular system design allows scaling up or down. If population decreases, excess capacity supports agricultural irrigation. If population increases, additional modules can be added. Kenya's urbanization plan for Dadaab suggests long-term population stability or growth."
        }
      ]
    },
    {
      category: "Partnerships & Implementation",
      questions: [
        {
          question: "What is UNHCR's official position on this project?",
          answer: "We are in preliminary discussions with UNHCR regarding integration with their water program. While not yet formally endorsed, they have expressed interest in sustainable solutions that reduce operational costs. Formal partnerships will be established before major deployment."
        },
        {
          question: "How does this align with Kenya's development plans?",
          answer: "Kenya plans to transition Dadaab from refugee camp to permanent city. Our infrastructure investments align with this urbanization strategy, providing permanent water infrastructure that supports both current refugees and future urban development."
        },
        {
          question: "What regulatory approvals are required?",
          answer: "We need: (1) Kenya National Water Authority permits, (2) Environmental Impact Assessment approval, (3) County government development permits, (4) UNHCR operational agreements. Our legal team is mapping all requirements with realistic timelines."
        }
      ]
    },
    {
      category: "Impact & Measurement",
      questions: [
        {
          question: "How do you measure and verify impact?",
          answer: "We track: water liters delivered daily, health metrics (waterborne illness reduction), time savings for women/children, agricultural output increases, technical training completion rates, financial sustainability metrics. Third-party monitoring ensures accountability."
        },
        {
          question: "What happens if the project doesn't meet impact targets?",
          answer: "We establish clear performance milestones with regular reviews. If targets aren't met, we implement corrective measures including additional technical support, community engagement, or system modifications. Investor agreements include performance-based milestone payments."
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transparent answers to critical questions about our project, investment model, and impact measurement
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary border-b border-gray-200 pb-3">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 1000 + questionIndex
                  const isOpen = openIndex === index

                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full text-left p-4 hover:bg-gray-50 transition-colors flex justify-between items-center"
                      >
                        <h4 className="font-semibold text-gray-900 pr-4">{faq.question}</h4>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4"
                        >
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary/10 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Have More Questions?</h3>
          <p className="text-gray-700 mb-6">
            We're committed to transparency. Schedule a call with our team for detailed discussions
            about financial projections, risk assessments, and implementation timelines.
          </p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-semibold">
            Schedule Investor Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ