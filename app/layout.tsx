import type { Metadata } from 'next'
import { Inter as FontSans, Open_Sans as FontMono } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'
import { ThemeProvider } from '@/components/theme-provider'
import Banner from '@/components/banner'
import MainNavigation from '@/components/main-navigation'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ' + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.className} ${fontMono.className}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Banner />
          <MainNavigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
