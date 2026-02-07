export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: string;
  url?: string;
  github?: string;
  image?: string;
  tags: string[];
  status: 'active' | 'beta' | 'coming-soon';
}

export interface RecommendedTool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  features?: string[];
  pricing?: string;
  category: string;
  url: string;
  infoUrl?: string;
  icon?: string;
  rating: number;
  free: boolean;
  openSource: boolean;
  tags: string[];
}

export interface InfoArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}
