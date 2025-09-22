'use client'

import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Impact from '@/components/Impact'
import Sustainability from '@/components/Sustainability'
import Timeline from '@/components/Timeline'
import Investment from '@/components/Investment'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Impact />
      <Sustainability />
      <Timeline />
      <Investment />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}