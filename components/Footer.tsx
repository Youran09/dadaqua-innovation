'use client'

import { Droplet, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'About': [
      { label: 'Our Mission', href: '#' },
      { label: 'The Problem', href: '#problem' },
      { label: 'Our Solution', href: '#solution' },
      { label: 'Impact', href: '#impact' },
    ],
    'Get Involved': [
      { label: 'Investment', href: '#investment' },
      { label: 'Partnership', href: '#contact' },
      { label: 'Volunteer', href: '#' },
      { label: 'Donate', href: '#' },
    ],
    'Resources': [
      { label: 'Project Report', href: '#' },
      { label: 'Investment Prospectus', href: '#' },
      { label: 'Media Kit', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
    'Contact': [
      { label: 'Contact Form', href: '#contact' },
      { label: 'Office Location', href: '#' },
      { label: 'Press Inquiries', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Youtube className="h-5 w-5" />, href: '#' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-white">Dadaqua Innovation</span>
            </div>
            <p className="mb-4 text-sm">
              Transforming lives through sustainable water solutions in the Dadaab refugee camp.
              Together, we\'re building a water-secure future for 280,000 refugees.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {currentYear} Dadaqua Innovation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg text-center text-sm">
          <p>
            This project aligns with UN Sustainable Development Goals 6 (Clean Water), 
            7 (Affordable Energy), and 13 (Climate Action)
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer