import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/topmenu'
import {getServerSession} from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import NextAuthProvider from '@/providers/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaccine Web',
  description: '6431311921 Chawin Ngawbenjakun',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const nextAuthSession = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={nextAuthSession}>
        <TopMenu/>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
