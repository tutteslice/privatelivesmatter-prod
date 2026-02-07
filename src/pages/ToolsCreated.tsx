import { useState } from 'react';
import { Code, ExternalLink, Github, Tag, Search, Wrench } from 'lucide-react';
import { myTools, toolCategories } from '../data/tools';
import { Newsletter } from '../components/Newsletter';

export function ToolsCreated() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = myTools.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const statusColors = {
    active: 'bg-brand-500/15 text-brand-400 border-brand-500/20',
    beta: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
    'coming-soon': 'bg-dark-600/50 text-dark-300 border-dark-500/20',
  };

  const statusLabels = {
    active: 'Active',
    beta: 'Beta',
    'coming-soon': 'Coming Soon',
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-brand-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Tools I Created</h1>
          </div>
          <p className="text-dark-300 text-lg leading-relaxed">
            Custom-built privacy and security tools designed to help you protect your digital life. 
            All tools are open-source and process data locally whenever possible.
          </p>
        </div>

        {/* HOW TO ADD TOOLS - Developer Note */}
        {/* 
          To add a new tool, edit src/data/tools.ts and add a new object to the `myTools` array.
          Each tool needs: id, name, description, category, tags, and status.
          See the file for detailed instructions and examples.
        */}

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {toolCategories.map(cat => (
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

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="group bg-dark-800/40 border border-white/5 rounded-2xl p-6 hover:border-brand-500/20 hover:bg-dark-800/60 transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${statusColors[tool.status]}`}>
                  {statusLabels[tool.status]}
                </span>
                <span className="text-xs text-dark-500 font-mono">{tool.category}</span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-cyan/10 flex items-center justify-center mb-4 group-hover:from-brand-500/30 group-hover:to-accent-cyan/20 transition-all">
                <Code className="w-6 h-6 text-brand-400" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-dark-400 leading-relaxed mb-4 flex-1">
                {tool.longDescription || tool.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {tool.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-dark-700/60 rounded-md text-xs text-dark-300">
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {tool.url && tool.status !== 'coming-soon' && (
                  <a
                    href={tool.url}
                    className="flex-1 py-2.5 bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Launch
                  </a>
                )}
                {tool.github && (
                  <a
                    href={tool.github}
                    className="py-2.5 px-4 bg-dark-700 hover:bg-dark-600 text-dark-300 hover:text-white text-sm font-medium rounded-lg transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                )}
                {tool.status === 'coming-soon' && (
                  <div className="flex-1 py-2.5 bg-dark-700/50 text-dark-500 text-sm font-medium rounded-lg text-center cursor-not-allowed">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-dark-400 text-lg">No tools found matching your criteria.</p>
          </div>
        )}

        {/* Developer instructions */}
        <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8 mb-16">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-brand-400" />
            Adding New Tools
          </h3>
          <p className="text-dark-300 text-sm mb-4">
            To add new tools to this page, edit the <code className="px-2 py-0.5 bg-dark-700 rounded text-brand-400 font-mono text-xs">src/data/tools.ts</code> file. 
            Add a new object to the <code className="px-2 py-0.5 bg-dark-700 rounded text-brand-400 font-mono text-xs">myTools</code> array with the following fields:
          </p>
          <div className="bg-dark-900 rounded-xl p-4 font-mono text-xs text-dark-300 overflow-x-auto">
            <pre>{`{
  id: 'unique-id',
  name: 'Tool Name',
  description: 'Short description',
  longDescription: 'Detailed description (optional)',
  category: 'Privacy | Security | Network | Encryption',
  url: 'https://link-to-tool',
  github: 'https://github.com/repo',
  tags: ['tag1', 'tag2'],
  status: 'active | beta | coming-soon'
}`}</pre>
          </div>
        </div>

        {/* Newsletter */}
        <Newsletter variant="banner" />
      </div>
    </div>
  );
}
