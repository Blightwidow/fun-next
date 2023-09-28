import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import styles from './layout.module.css'

import '@/styles/globals.css'
import '@/styles/normalize.css'
import { App } from '@/components/App'

const font = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'theo.fun',
  description: 'A collection of fun experiments.',
  authors: [{ name: 'Theo Dammaretz', url: 'https://dammaretz.fr' }],
  keywords: ['Theo', 'Dammaretz', 'software', 'engineer', 'international', 'developper', 'developer', 'fun', 'experiments'],
  robots: 'index, follow',
  openGraph: {
    title: 'theo.fun',
    type: 'website',
    url: 'https://fun.dammaretz.fr',
    description: 'A collection of fun experiments.',
    siteName: 'theo.fun',
  },
  twitter: {
    card: 'summary',
  },
  other: {
    humans: '/humans.txt',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className={styles.wrapper}>
          <App className={styles.content}>{children}</App>
        </div>
        <footer className={styles.footer}>
          Made with love from <a href="https://dammaretz.fr">Theo Dammaretz</a>
        </footer>
      </body>
    </html>
  )
}
