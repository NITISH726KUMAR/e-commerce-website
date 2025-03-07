import { useState } from 'react';
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Fashion Store</h1>
        
        {/* Men's Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Men's Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((product) => product.category === 'men')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>

        {/* Women's Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Women's Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((product) => product.category === 'women')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
} 