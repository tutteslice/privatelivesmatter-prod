import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Search, CheckCircle, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { recommendedTools, recommendedCategories } from '../data/tools';
import { useAffiliate } from '../context/AffiliateContext';

const starterPackIds = ['nordvpn', 'proton-mail', 'proton-pass'];

export function ToolsRecommended() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [showOpenSourceOnly, setShowOpenSourceOnly] = useState(false);
  const [showStarterPack, setShowStarterPack] = useState(false);
  const { getLink } = useAffiliate();

  const filteredTools = recommendedTools.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFree = !showFreeOnly || tool.free;
    const matchesOS = !showOpenSourceOnly || tool.openSource;
    const matchesStarterPack = !showStarterPack || starterPackIds.includes(tool.id);
    
    // If starter pack is active, ONLY show starter pack items (filtered forward)
    if (showStarterPack && !starterPackIds.includes(tool.id)) return false;

    return matchesCategory && matchesSearch && matchesFree && matchesOS && matchesStarterPack;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-brand-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Tools</h1>
          </div>
          <p className="text-dark-300 text-lg leading-relaxed">
            A curated collection of privacy-focused tools and services that I personally use and trust. 
            Each tool has been thoroughly tested and vetted for security, reliability, and respect for user privacy.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recommended tools..."
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowStarterPack(!showStarterPack)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  showStarterPack
                    ? 'bg-brand-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:text-white border border-white/5'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Starter Pack
              </button>
              <button
                onClick={() => setShowFreeOnly(!showFreeOnly)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  showFreeOnly
                    ? 'bg-brand-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:text-white border border-white/5'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                Free
              </button>
              <button
                onClick={() => setShowOpenSourceOnly(!showOpenSourceOnly)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  showOpenSourceOnly
                    ? 'bg-brand-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:text-white border border-white/5'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                Open Source
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {recommendedCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                    : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="group bg-dark-800/40 border border-white/5 rounded-2xl p-6 hover:border-brand-500/20 hover:bg-dark-800/60 transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-brand-500/10 text-brand-400 text-xs font-medium rounded-lg border border-brand-500/20">
                    {tool.category}
                  </span>
                  {tool.openSource && (
                    <span className="px-2 py-1 bg-brand-500/10 text-brand-400 text-xs font-medium rounded-lg border border-brand-500/20">
                      OSS
                    </span>
                  )}
                </div>
                {tool.free && (
                  <span className="text-xs font-semibold text-brand-400">FREE</span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-dark-400 leading-relaxed mb-4 flex-1">
                {tool.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < tool.rating ? 'text-yellow-400 fill-yellow-400' : 'text-dark-600'}`}
                  />
                ))}
                <span className="text-xs text-dark-400 ml-1">{tool.rating}/5</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {tool.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-dark-700/60 rounded-md text-xs text-dark-300">
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <a
                  href={getLink(tool.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-brand-500/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Get Now
                </a>
                <Link
                  to={`/tool/${tool.id}`}
                  className="flex-1 py-2.5 bg-dark-700/50 hover:bg-dark-700 text-white text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 border border-white/5 hover:border-white/10"
                >
                  <Search className="w-3.5 h-3.5" />
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-dark-400 text-lg">No tools found matching your criteria.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-dark-800/30 border border-white/5 rounded-2xl p-6 mb-16">
          <p className="text-dark-400 text-sm leading-relaxed">
            <strong className="text-dark-200">Disclaimer:</strong> These recommendations are based on personal experience and research. 
            I am not affiliated with or compensated by any of these services unless explicitly stated. 
            Always do your own research and choose tools that fit your specific threat model and needs.
          </p>
        </div>
      </div>
    </div>
  );
}