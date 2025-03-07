'use client';

import Image from 'next/image';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    try {
      setIsAdding(true);
      addToCart(product);
      // Show feedback to user
      const button = document.getElementById(`add-to-cart-${product.id}`);
      if (button) {
        button.textContent = 'Added!';
        setTimeout(() => {
          button.textContent = 'Add to Cart';
          setIsAdding(false);
        }, 1000);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button 
            id={`add-to-cart-${product.id}`}
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`${
              isAdding 
                ? 'bg-green-600' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white px-4 py-2 rounded-md transition-colors duration-300 disabled:opacity-50`}
          >
            {isAdding ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
} 