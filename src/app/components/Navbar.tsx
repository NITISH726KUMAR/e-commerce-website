'use client';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Fashion Store
            </Link>
          </div>
          <div className="hidden sm:flex space-x-8">
            <Link href="/men" className="text-gray-700 hover:text-gray-900">
              Men
            </Link>
            <Link href="/women" className="text-gray-700 hover:text-gray-900">
              Women
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-gray-900 flex items-center">
              <ShoppingBagIcon className="h-6 w-6 mr-1" />
              <span>Cart (0)</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 