import { Nunito } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Modal actionLabel='Submit' title='AWS' isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
