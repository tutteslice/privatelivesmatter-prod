import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'plm-tee-classic',
    name: 'PLM Classic T-Shirt',
    description: 'Premium organic cotton tee featuring the Private Lives Matter logo. A comfortable way to spread the message of digital freedom.',
    price: 29.99,
    image: '',
    category: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: ['Black', 'Dark Gray'],
    inStock: true,
    featured: true,
  },
  {
    id: 'plm-sticker-pack',
    name: 'Privacy Sticker Pack',
    description: 'A set of 5 high-quality vinyl stickers with various privacy-themed designs. Perfect for your laptop, phone, or notebook.',
    price: 9.99,
    image: '',
    category: 'Stickers',
    inStock: true,
    featured: true,
  },
  {
    id: 'plm-poster-rights',
    name: 'Digital Rights Manifesto Poster',
    description: 'A high-quality matte poster detailing the fundamental rights of every internet user. 18x24 inches.',
    price: 19.99,
    image: '',
    category: 'Posters',
    inStock: true,
    featured: true,
  },
];

export const productCategories = ['All', 'T-Shirts', 'Stickers', 'Posters'];