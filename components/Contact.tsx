'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to invest in sustainable water solutions? Have questions about our project?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info@dadaquainnovation.org</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">+254 700 123 456</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">
                    Dadaab, Garissa County<br />
                    Kenya, East Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <p className="text-gray-700">
                Monday - Friday: 9:00 AM - 6:00 PM (EAT)<br />
                Saturday: 10:00 AM - 2:00 PM (EAT)<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="technical">Technical Questions</option>
                  <option value="media">Media Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-semibold"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for project updates, impact stories, and investment opportunities
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact