import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dadaqua Innovation - Sustainable Water Solutions for Dadaab',
  description: 'Transforming lives through solar-powered water systems and agrivoltaic innovation in the Dadaab refugee camp, Kenya.',
  keywords: 'solar water pumping, refugee camp development, sustainable water solutions Kenya, agrivoltaic agriculture, impact investing',
  openGraph: {
    title: 'Dadaqua Innovation',
    description: 'Bringing sustainable water solutions to Dadaab refugee camp',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}