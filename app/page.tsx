'use client'

import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Impact from '@/components/Impact'
import Sustainability from '@/components/Sustainability'
import Investment from '@/components/Investment'
import Team from '@/components/Team'
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
      <Investment />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}