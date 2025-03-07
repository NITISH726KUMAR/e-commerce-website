'use client';

import { ReactNode, useEffect, useState } from 'react';
import { CartProvider } from '../context/CartContext';

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <CartProvider>{children}</CartProvider>;
} 