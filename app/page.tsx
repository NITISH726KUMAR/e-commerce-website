'use client';

import { useState } from 'react';
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';

export default function Home() {
  const [category, setCategory] = useState<'all' | 'men' | 'women'>('all');

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-md ${
              category === 'all' ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCategory('men')}
            className={`px-4 py-2 rounded-md ${
              category === 'men' ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
          >
            Men
          </button>
          <button
            onClick={() => setCategory('women')}
            className={`px-4 py-2 rounded-md ${
              category === 'women' ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
          >
            Women
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
} 