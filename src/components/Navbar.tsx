import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Shield, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useSettings } from '../context/SettingsContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/tools', label: 'Tools' },
  { to: '/knowledge-base', label: 'Knowledge Base' },
  { to: '/media', label: 'Media' },
  { to: '/store', label: 'Store' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { theme, setTheme } = useTheme();
  const { storeEnabled } = useSettings();
  const location = useLocation();

  const filteredLinks = navLinks.filter(link => link.to !== '/store' || storeEnabled);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-brand-500/20 transition-all duration-300">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold tracking-tight text-white">Private Lives</span>
              <span className="text-sm font-bold tracking-tight text-brand-400"> Matter</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {filteredLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-dark-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme switcher */}
            <div className="relative">
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className={`p-2.5 rounded-lg transition-all flex items-center gap-1 text-xs ${
                  isThemeOpen ? 'bg-white/10 text-white' : 'text-dark-200 hover:text-white hover:bg-white/5'
                }`}
                aria-label="Switch color theme"
              >
                <Palette className="w-4 h-4" />
                <span className="hidden xl:inline capitalize">{theme}</span>
              </button>
              
              {/* Backdrop for closing */}
              {isThemeOpen && (
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsThemeOpen(false)} 
                />
              )}

              {/* Dropdown */}
              {isThemeOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-dark-900 border border-white/10 rounded-xl shadow-lg animate-fade-in z-50">
                  {[
                    { id: 'default', label: 'PLM Default' },
                    { id: 'emerald', label: 'Emerald Night' },
                    { id: 'violet', label: 'Violet Grid' },
                    { id: 'amber', label: 'Amber Glow' },
                    { id: 'cyber', label: 'Cyber Neon' },
                  ].map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() => {
                        setTheme(scheme.id as any);
                        setIsThemeOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs hover:bg-white/5 first:rounded-t-xl last:rounded-b-xl ${
                        theme === scheme.id ? 'text-brand-400' : 'text-dark-200'
                      }`}
                    >
                      <span>{scheme.label}</span>
                      {theme === scheme.id && <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {storeEnabled && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-lg text-dark-200 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-fade-in">
                    {totalItems}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-dark-200 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-t border-white/5 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {filteredLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-dark-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
