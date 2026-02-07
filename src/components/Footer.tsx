import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Mail } from 'lucide-react';
import { Newsletter } from './Newsletter';
import { useSettings } from '../context/SettingsContext';

export function Footer() {
  const { storeEnabled } = useSettings();

  const quickLinks = [
    { to: '/tools', label: 'Tools' },
    { to: '/knowledge-base', label: 'Knowledge Base' },
    { to: '/media', label: 'Media' },
    ...(storeEnabled ? [{ to: '/store', label: 'Store' }] : []),
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/settings', label: 'Settings' },
  ];

  return (
    <footer className="border-t border-white/5 bg-dark-900/50">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-3">Stay Informed. Stay Private.</h3>
          <p className="text-dark-300 text-sm">
            Get the latest privacy news, tool reviews, and security tips delivered to your inbox. 
            No tracking. No spam. Unsubscribe anytime.
          </p>
        </div>
        <Newsletter variant="inline" />
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-bold text-white">Private Lives Matter</span>
              </Link>
              <p className="text-dark-400 text-sm leading-relaxed mb-5">
                Empowering individuals to reclaim their digital privacy, security, and freedom in an age of surveillance.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-brand-400 hover:bg-dark-700 transition-all" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-brand-400 hover:bg-dark-700 transition-all" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-brand-400 hover:bg-dark-700 transition-all" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold text-dark-300 uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                {quickLinks.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-dark-400 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-semibold text-dark-300 uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2.5">
                {[
                  'Privacy Guides',
                  'VPN Reviews',
                  'Threat Modeling',
                  'Encryption Basics',
                  'Digital Rights',
                  'Open Source',
                ].map(item => (
                  <li key={item}>
                    <Link to="/knowledge-base" className="text-sm text-dark-400 hover:text-brand-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold text-dark-300 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/privacy" className="text-sm text-dark-400 hover:text-brand-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-dark-400 hover:text-brand-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                {[
                  'Cookie Policy',
                  'Refund Policy',
                  'Shipping Info',
                ].map(item => (
                  <li key={item}>
                    <span className="text-sm text-dark-400 hover:text-brand-400 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dark-500">
            &copy; {new Date().getFullYear()} Private Lives Matter. All rights reserved.
          </p>
          <p className="text-xs text-dark-500">
            Built with 🔒 by Thomas Rooth
          </p>
        </div>
      </div>
    </footer>
  );
}
