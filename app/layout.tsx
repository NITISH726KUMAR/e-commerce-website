import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './components/Providers'
import Navbar from './components/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fashion Store - Modern Clothing for Men and Women',
  description: 'Discover the latest trends in men\'s and women\'s fashion at our online store.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="pt-28">
            <main className="min-h-screen bg-gray-50">
              {children}
            </main>
          </div>
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">About Us</h3>
                  <p className="text-gray-300">Your one-stop destination for modern fashion.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                    <li><Link href="/men" className="text-gray-300 hover:text-white">Men's Fashion</Link></li>
                    <li><Link href="/women" className="text-gray-300 hover:text-white">Women's Fashion</Link></li>
                    <li><Link href="/cart" className="text-gray-300 hover:text-white">Shopping Cart</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <p className="text-gray-300">Email: info@fashionstore.com</p>
                  <p className="text-gray-300">Phone: (555) 123-4567</p>
                </div>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
} 