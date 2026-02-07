import { PlayCircle, Radio, Newspaper, Clock } from 'lucide-react';

export function Media() {
  return (
    <div className="min-h-screen bg-dark-950 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <div className="w-20 h-20 bg-brand-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-brand-500/20">
             <Clock className="w-10 h-10 text-brand-400" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4 italic tracking-tight uppercase">Media Library Coming Soon</h2>
          <p className="text-dark-300 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            We are curating a library of video guides, interviews, and deep-dives. 
            Stay tuned for the launch of our multimedia portal.
          </p>
        </div>

        {/* Categories Preview (Placeholders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 grayscale pointer-events-none">
          <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center mb-4">
              <PlayCircle className="w-6 h-6 text-dark-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Video Guides</h3>
            <p className="text-sm text-dark-400">Step-by-step tutorials on securing your devices.</p>
          </div>
          <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center mb-4">
              <Radio className="w-6 h-6 text-dark-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Interviews</h3>
            <p className="text-sm text-dark-400">Podcast appearances and expert discussions.</p>
          </div>
          <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center mb-4">
              <Newspaper className="w-6 h-6 text-dark-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Press</h3>
            <p className="text-sm text-dark-400">Articles and mentions in major publications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
