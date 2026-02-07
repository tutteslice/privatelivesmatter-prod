import { useState } from 'react';
import { ShoppingCart, Search, ShoppingBag, Check, Tag, Clock } from 'lucide-react';
import { products, productCategories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useSettings } from '../context/SettingsContext';
import type { Product } from '../types';

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, 1, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-dark-800/40 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-500/20 hover:bg-dark-800/60 transition-all duration-300 flex flex-col">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <ShoppingBag className="w-12 h-12 text-dark-600 mx-auto mb-2" />
          <span className="text-xs text-dark-500 font-mono">{product.category}</span>
        </div>
        {product.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-brand-500/30">
            Featured
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-dark-950/70 flex items-center justify-center">
            <span className="px-4 py-2 bg-dark-900 text-dark-300 text-sm font-medium rounded-lg border border-white/10">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-white group-hover:text-brand-400 transition-colors flex-1 mr-2">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-brand-400 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-dark-400 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Size Selector */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-3">
            <label className="text-xs text-dark-400 font-medium mb-1.5 block">Size</label>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-brand-500 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selector */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-4">
            <label className="text-xs text-dark-400 font-medium mb-1.5 block">Color</label>
            <div className="flex flex-wrap gap-1.5">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedColor === color
                      ? 'bg-brand-500 text-white'
                      : 'bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-white'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          disabled={!product.inStock || added}
          className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            added
              ? 'bg-brand-500 text-white'
              : product.inStock
              ? 'bg-brand-500/10 hover:bg-brand-500 text-brand-400 hover:text-white border border-brand-500/20 hover:border-brand-500'
              : 'bg-dark-700 text-dark-500 cursor-not-allowed'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function Store() {
  const { storeEnabled } = useSettings();

  // "Coming Soon" override
  const isComingSoon = true;

  if (!storeEnabled || isComingSoon) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-20 h-20 rounded-3xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <Clock className="w-10 h-10 text-brand-400" />
          </div>
          <h1 className="text-4xl font-black text-white mb-4 italic tracking-tight">COMING SOON</h1>
          <p className="text-dark-300 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            We are currently fine-tuning our collection of privacy-themed apparel and accessories. 
            Sign up below to be the first to know when we launch.
          </p>
        </div>
      </div>
    );
  }

  // The rest of the logic is kept but will be unreachable due to isComingSoon = true
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');

  let filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      case 'featured':
      default:
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    }
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Tag className="w-5 h-5 text-brand-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Store</h1>
          </div>
          <p className="text-dark-300 text-lg leading-relaxed">
            Premium privacy-themed apparel and accessories. Wear your values and support the mission 
            to promote internet privacy and digital freedom.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {productCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-4 py-2.5 bg-dark-800 border border-white/10 rounded-xl text-sm text-dark-300 focus:outline-none focus:border-brand-500/50 cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}