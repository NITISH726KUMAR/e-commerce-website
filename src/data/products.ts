export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women';
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: "Men's Classic Fit Denim Jeans",
    category: 'men',
    price: 59.99,
    image: '/images/mens-jeans.jpg',
    description: 'Classic fit denim jeans perfect for everyday wear'
  },
  {
    id: '2',
    name: "Men's Cotton Casual Shirt",
    category: 'men',
    price: 45.99,
    image: '/images/mens-shirt.jpg',
    description: 'Comfortable cotton casual shirt in light blue'
  },
  {
    id: '3',
    name: "Women's Summer Floral Dress",
    category: 'women',
    price: 79.99,
    image: '/images/womens-dress.jpg',
    description: 'Beautiful floral print summer dress'
  },
  {
    id: '4',
    name: "Women's High-Waist Slim Pants",
    category: 'women',
    price: 65.99,
    image: '/images/womens-pants.jpg',
    description: 'Elegant high-waist slim fit pants'
  },
  {
    id: '5',
    name: "Men's Casual Blazer",
    category: 'men',
    price: 129.99,
    image: '/images/mens-blazer.jpg',
    description: 'Stylish casual blazer for formal occasions'
  },
  {
    id: '6',
    name: "Women's Knit Sweater",
    category: 'women',
    price: 49.99,
    image: '/images/womens-sweater.jpg',
    description: 'Cozy knit sweater perfect for fall'
  }
]; 