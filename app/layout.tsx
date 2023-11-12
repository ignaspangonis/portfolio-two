import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@/components/TheAnalytics'
import { ThemeToggle } from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Ignas Pangonis',
    template: '%s | Ignas Pangonis',
  },
  description: 'Developer and music producer.',
  openGraph: {
    title: 'Ignas Pangonis',
    description: 'Developer and music producer.',
    // url: 'TODO',
    siteName: 'Ignas Pangonis',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900
         dark:text-slate-50 transition-colors duration-500 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <nav className="text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
                <ThemeToggle className="ml-auto" />
              </div>
            </header>
            <main className="pt-12">{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
