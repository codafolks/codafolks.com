import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodaFolks - Your Gateway to Open-Source Projects',
  description: 'Explore open-source projects, learn practical software development, and join a thriving developer community.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}