
import TopMenu from '@/components/topmenu'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function BookingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <TopMenu/>
        <body className={inter.className}>{children}</body>
      </html>
    )
  }