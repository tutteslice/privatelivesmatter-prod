import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Code, ArrowRight, ChevronRight, Zap, Globe, Server } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

const features = [
  {
    icon: Shield,
    title: 'Privacy Tools',
    description: 'Essential tools to test, enhance, and protect your digital privacy.',
    link: '/tools',
  },
  {
    icon: Lock,
    title: 'Security Reviews',
    description: 'Honest reviews and recommendations for the best privacy-focused services.',
    link: '/tools',
  },
  {
    icon: Eye,
    title: 'Education',
    description: 'Learn about surveillance capitalism, threat modeling, and your digital rights.',
    link: '/knowledge-base',
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'Supporting transparency through open-source tools and community collaboration.',
    link: '/knowledge-base',
  },
];

const stats = [
  { value: '10+', label: 'Privacy Tools', icon: Zap },
  { value: '50+', label: 'Resources', icon: Globe },
  { value: '24/7', label: 'Protection', icon: Server },
];

export function Home() {
  const { storeEnabled } = useSettings();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/8 rounded-full blur-[128px] pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span>Your Privacy is a Right, Not a Privilege</span>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-dark-900 rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-brand-500 group-hover:scale-110 transition-transform duration-500 animate-float" />
              </div>
            </div>
          </div>

          {/* Title & Intro */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
              Private Lives <span className="text-brand-500">Matter</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-dark-300 leading-relaxed">
              Private Lives Matter is a dedicated space where we gather the information and tools 
              you need to reclaim your digital privacy, strengthen your security, and defend 
              your freedom online.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/tools"
              className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
            >
              Explore Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/knowledge-base"
              className="px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-xl border border-white/10 transition-all duration-200 flex items-center gap-2"
            >
              Explore Material
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-dark-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 z-10">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-dark-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-dark-500 rounded-full mt-1.5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We <span className="text-brand-400">Offer</span>
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Everything you need to take control of your digital life — from custom privacy tools 
              to educational resources and curated recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="group p-6 bg-dark-800/40 border border-white/5 rounded-2xl hover:border-brand-500/20 hover:bg-dark-800/60 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dark-950">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/80 to-dark-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Lock className="w-8 h-8 text-brand-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              "Privacy is not about having something to hide. 
              <span className="text-brand-400"> It's about having something to protect."</span>
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              In a world where data is the new currency, your personal information is constantly being 
              harvested, analyzed, and sold. Private Lives Matter exists to arm you with the knowledge 
              and tools you need to fight back.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              Read our story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Store Preview */}
      {storeEnabled && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Wear Your <span className="text-brand-400">Values</span>
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto mb-10">
              Premium privacy-themed apparel and accessories. Every purchase supports the mission.
            </p>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/20"
            >
              Visit the Store
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
