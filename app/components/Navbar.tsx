'use client';

import { ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <div className="bg-blue-600">
      {/* Top Navigation */}
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Search */}
            <div className="flex items-center flex-1 gap-8">
              <Link href="/" className="flex flex-col">
                <span className="text-2xl font-bold text-white">Fashion Store</span>
                <span className="text-xs text-white/80 italic">Explore More</span>
              </Link>
              
              {/* Search Bar */}
              <div className="hidden sm:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className="w-full py-2 px-4 pr-10 rounded-sm focus:outline-none"
                  />
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-2.5" />
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-white/80 font-medium">
                Home
              </Link>
              <Link href="/men" className="text-white hover:text-white/80 font-medium">
                Men
              </Link>
              <Link href="/women" className="text-white hover:text-white/80 font-medium">
                Women
              </Link>
              <Link href="/cart" className="text-white hover:text-white/80 flex items-center gap-1">
                <div className="relative">
                  <ShoppingBagIcon className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="font-medium">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Categories Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-8 h-12 px-4 text-sm">
            <Link href="/men" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              Men's Fashion
            </Link>
            <Link href="/women" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              Women's Fashion
            </Link>
            <Link href="/new-arrivals" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              New Arrivals
            </Link>
            <Link href="/deals" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              Deals
            </Link>
            <Link href="/customer-service" className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
              Customer Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 