import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Search, FileText } from 'lucide-react';
import { articles, articleCategories } from '../data/articles';

export function KnowledgeBase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleArticleClick = (id: string) => {
    if (id === 'digital-sovereignty-guide' || id === 'digital-sovereignty-online-guide') {
      navigate('/digital-sovereignty');
    } else {
      setExpandedArticle(expandedArticle === id ? null : id);
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryColors: Record<string, string> = {
    'Real World Cases': 'bg-brand-500/10 text-brand-400 border-brand-500/20',
    Fundamentals: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
    Education: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
    Guides: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
    Rights: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-brand-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Knowledge Base</h1>
          </div>
          <p className="text-dark-300 text-lg leading-relaxed">
            Knowledge is the foundation of privacy. Explore our growing library of articles covering 
            digital rights, privacy fundamentals, security guides, and the fight for internet freedom.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {articleCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
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

        {/* Featured Article */}
        {filteredArticles.length > 0 && !searchQuery && activeCategory === 'All' && (
          <div className="mb-10">
            <div
              className="group bg-gradient-to-br from-dark-800/60 to-dark-800/30 border border-white/5 rounded-2xl p-8 sm:p-10 hover:border-brand-500/20 transition-all duration-300 cursor-pointer"
              onClick={() => handleArticleClick(filteredArticles[0].id)}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-brand-500/10 text-brand-400 text-xs font-semibold rounded-lg border border-brand-500/20">
                  Featured
                </span>
                <span className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${categoryColors[filteredArticles[0].category] || 'bg-dark-700 text-dark-300 border-dark-600'}`}>
                  {filteredArticles[0].category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {filteredArticles[0].title}
              </h2>
              <p className="text-dark-300 text-base leading-relaxed mb-4 max-w-3xl">
                {filteredArticles[0].excerpt}
              </p>
              {expandedArticle === filteredArticles[0].id && (
                <div className="mt-6 pt-6 border-t border-white/5 animate-fade-in">
                  <p className="text-dark-200 leading-relaxed">{filteredArticles[0].content}</p>
                </div>
              )}
              <div className="flex items-center gap-4 text-sm text-dark-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {filteredArticles[0].readTime} read
                </span>
                <span>{filteredArticles[0].date}</span>
                <span className="flex items-center gap-1 text-brand-400 ml-auto group-hover:gap-2 transition-all">
                  {filteredArticles[0].id === 'digital-sovereignty-guide' 
                    ? 'Launch Guide' 
                    : (expandedArticle === filteredArticles[0].id ? 'Collapse' : 'Read more')
                  }
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredArticles.slice(activeCategory === 'All' && !searchQuery ? 1 : 0).map((article, index) => (
            <div
              key={article.id}
              className="group bg-dark-800/40 border border-white/5 rounded-2xl p-6 hover:border-brand-500/20 hover:bg-dark-800/60 transition-all duration-300 animate-fade-in cursor-pointer flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleArticleClick(article.id)}
            >
              {/* Icon & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${categoryColors[article.category] || 'bg-dark-700 text-dark-300 border-dark-600'}`}>
                  {article.category}
                </span>
                <div className="w-8 h-8 rounded-lg bg-dark-700/50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-dark-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-dark-400 leading-relaxed mb-4 flex-1">
                {article.excerpt}
              </p>

              {expandedArticle === article.id && (
                <div className="mb-4 pt-4 border-t border-white/5 animate-fade-in">
                  <p className="text-sm text-dark-200 leading-relaxed">{article.content}</p>
                </div>
              )}

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-dark-500 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
                <span className="flex items-center gap-1 text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {article.id === 'digital-sovereignty-guide' 
                    ? 'Launch' 
                    : (expandedArticle === article.id ? 'Less' : 'Read')
                  }
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-dark-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}