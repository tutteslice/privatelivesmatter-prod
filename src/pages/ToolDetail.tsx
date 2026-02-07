import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Star, ArrowLeft, Check, Tag, ShieldCheck } from 'lucide-react';
import { recommendedTools } from '../data/tools';
import { useAffiliate } from '../context/AffiliateContext';

export function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const { getLink } = useAffiliate();
  
  const tool = recommendedTools.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Tool Not Found</h1>
        <p className="text-dark-300 mb-8">The tool you are looking for does not exist or has been removed.</p>
        <Link to="/tools" className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl transition-all">
          Back to Tools
        </Link>
      </div>
    );
  }

  const affiliateLink = getLink(tool.id);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/tools" className="inline-flex items-center gap-2 text-dark-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        {/* Header */}
        <div className="bg-dark-800/40 border border-white/5 rounded-3xl p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-brand-500/10 text-brand-400 text-xs font-medium rounded-lg border border-brand-500/20">
                  {tool.category}
                </span>
                {tool.free && (
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-lg border border-green-500/20">
                    Free Plan Available
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{tool.name}</h1>
              <p className="text-lg text-dark-200 leading-relaxed mb-6">
                {tool.longDescription || tool.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dark-700/50 rounded-lg text-xs text-dark-300">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-8">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < tool.rating ? 'text-yellow-400 fill-yellow-400' : 'text-dark-600'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-dark-400">({tool.rating}/5 Rating)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
                >
                  Get {tool.name} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Visual / Icon Placeholder */}
            <div className="w-full md:w-48 aspect-square bg-dark-700/30 rounded-2xl flex items-center justify-center border border-white/5">
              <ShieldCheck className="w-20 h-20 text-dark-600" />
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          <div className="md:col-span-2 space-y-8">
            {tool.features && tool.features.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
                <div className="grid grid-cols-1 gap-3">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-dark-800/20 border border-white/5 rounded-xl">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-400" />
                      </div>
                      <span className="text-dark-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {tool.pricing && (
              <div className="bg-dark-800/40 border border-white/5 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Pricing</h3>
                <p className="text-brand-400 font-medium text-lg">{tool.pricing}</p>
              </div>
            )}
            
            <div className="bg-dark-800/40 border border-white/5 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Transparency</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-dark-400 text-sm">Open Source</span>
                  <span className={`text-sm font-medium ${tool.openSource ? 'text-green-400' : 'text-dark-300'}`}>
                    {tool.openSource ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-400 text-sm">Free Tier</span>
                  <span className={`text-sm font-medium ${tool.free ? 'text-green-400' : 'text-dark-300'}`}>
                    {tool.free ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
