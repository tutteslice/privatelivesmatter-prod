import { useState } from 'react';
import { Shield, AlertTriangle, Eye, Lock, Smartphone, Globe, Activity, CheckCircle, XCircle, Filter, Zap, Target } from 'lucide-react';
import { cn } from '../utils/cn';

export function DigitalSovereignty() {
  const [isProtected, setIsProtected] = useState(false);
  const [activeTab, setActiveTab] = useState<'browsing' | 'social' | 'mobile'>('browsing');
  const [expandedThreat, setExpandedThreat] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Interactive Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            Digital <span className="text-brand-500">Sovereignty</span>
          </h1>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            The modern web is built on surveillance. Every click, hover, and purchase creates a shadow profile used by data brokers.
            This guide simulates your exposure and provides the protocols to vanish from the radar.
          </p>
        </div>

        {/* DASHBOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Exposure Visualization */}
          <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-400" />
                Vulnerability Surface
              </h3>
              <span className={cn("px-3 py-1 rounded-lg text-xs font-bold", isProtected ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400")}>
                {isProtected ? "SECURED" : "HIGH EXPOSURE"}
              </span>
            </div>
            
            <div className="space-y-6">
              {/* Pseudo-Chart Bars */}
              {[ 
                { label: 'Location Tracking', val: isProtected ? 20 : 90 },
                { label: 'Identity Linkage', val: isProtected ? 15 : 85 },
                { label: 'Financial Data', val: isProtected ? 10 : 70 },
                { label: 'Behavioral Habits', val: isProtected ? 25 : 95 },
                { label: 'Social Graph', val: isProtected ? 15 : 80 },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-dark-200">{metric.label}</span>
                    <span className="text-dark-400">{metric.val}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all duration-1000 ease-out", isProtected ? "bg-green-500" : "bg-brand-500")} 
                      style={{ width: `${metric.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tracker Volume */}
          <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-400" />
                Trackers per Session
              </h3>
              <span className="text-xs text-dark-400">Avg. Session</span>
            </div>

            <div className="flex-1 flex items-end justify-around gap-4 pb-4">
               {[ 
                 { label: 'News', visible: 5, hidden: isProtected ? 0 : 25 },
                 { label: 'Social', visible: 2, hidden: isProtected ? 2 : 45 },
                 { label: 'Shop', visible: 4, hidden: isProtected ? 1 : 30 },
                 { label: 'Blog', visible: 3, hidden: isProtected ? 0 : 15 },
               ].map((site) => (
                 <div key={site.label} className="flex flex-col items-center gap-2 w-full">
                    <div className="w-full max-w-[60px] flex flex-col justify-end h-48 bg-dark-900/50 rounded-lg overflow-hidden relative">
                      {/* Hidden Trackers (Red/Green) */}
                      <div 
                        className={cn("w-full transition-all duration-1000 border-b border-dark-900/20", isProtected ? "bg-green-500/50" : "bg-red-500/80")} 
                        style={{ height: `${site.hidden}%` }}
                      />
                      {/* Visible Ads (Gray) */}
                      <div 
                        className="w-full bg-dark-600 transition-all duration-1000"
                        style={{ height: `${site.visible}%` }}
                      />
                    </div>
                    <span className="text-xs text-dark-400 font-medium">{site.label}</span>
                 </div>
               ))}
            </div>
            <p className="text-center text-sm text-dark-400 mt-4">
              {isProtected 
                ? "Invisible trackers blocked. Only essential scripts running." 
                : "Red bars indicate hidden 3rd-party scripts collecting data."}
            </p>
          </div>
        </div>

        {/* SIMULATION BUTTON */}
        <div className="text-center mb-24">
          <button
            onClick={() => setIsProtected(!isProtected)}
            className={cn(
              "px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto",
              isProtected 
                ? "bg-green-500 hover:bg-green-600 text-white shadow-green-500/20" 
                : "bg-brand-500 hover:bg-brand-600 text-white shadow-brand-500/20"
            )}
          >
            <Shield className="w-6 h-6" />
            {isProtected ? "Protocols Active" : "Activate Privacy Protocols"}
          </button>
          <p className="mt-3 text-xs text-dark-400 uppercase tracking-widest">
            Click to simulate defensive measures
          </p>
        </div>

        {/* THREAT MATRIX */}
        <section id="threats" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">The Threat Matrix</h2>
            <p className="text-dark-300">Understand the adversaries. Click to reveal operational details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              {
                id: 'fingerprinting',
                icon: Target,
                title: 'Browser Fingerprinting',
                summary: 'You are tracked not by cookies, but by your unique screen resolution, fonts, and hardware.',
                mechanism: 'Scripts query your browser\'s canvas rendering and audio context to build a unique hash.',
                counter: 'Use Firefox (Hardened) or Brave Browser which randomize these values.'
              },
              {
                id: 'capitalism',
                icon: Eye,
                title: 'Surveillance Capitalism',
                summary: '"Free" services monetize your behavioral data, predicting your actions better than you can.',
                mechanism: 'Real-time bidding (RTB) auctions your profile to advertisers in milliseconds.',
                counter: 'Block 3rd-party scripts (uBlock Origin) and avoid SSO (Log in with Google/Facebook).'
              },
              {
                id: 'metadata',
                icon: Globe,
                title: 'Metadata Aggregation',
                summary: 'It\'s not just what you say, but who you talk to, when, and from where.',
                mechanism: 'ISPs and mobile carriers log DNS requests and tower connections.',
                counter: 'Use Encrypted DNS (DoH) and a reputable VPN to decouple location from identity.'
              }
            ].map((threat) => (
              <div 
                key={threat.id}
                onClick={() => setExpandedThreat(expandedThreat === threat.id ? null : threat.id)}
                className={cn(
                  "bg-dark-800/40 border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1",
                  expandedThreat === threat.id ? "border-brand-500/50 bg-dark-800/60" : "border-white/5 hover:border-brand-500/20"
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
                    <threat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-dark-500">
                    {expandedThreat === threat.id ? "MINIMIZE" : "EXPAND +"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{threat.title}</h3>
                <p className={cn("text-dark-300 text-sm leading-relaxed", expandedThreat === threat.id && "hidden")}>
                  {threat.summary}
                </p>
                
                {expandedThreat === threat.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                    <div className="mb-3">
                      <strong className="text-white text-sm block mb-1">Mechanism:</strong>
                      <p className="text-dark-300 text-sm">{threat.mechanism}</p>
                    </div>
                    <div>
                      <strong className="text-green-400 text-sm block mb-1">Countermeasure:</strong>
                      <p className="text-dark-200 text-sm">{threat.counter}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BEHAVIORAL PROTOCOLS */}
        <section id="behaviors" className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Behavioral Protocols</h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-dark-800 p-1 rounded-xl inline-flex">
              {(['browsing', 'social', 'mobile'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2.5 rounded-lg text-sm font-medium transition-all capitalize",
                    activeTab === tab 
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20" 
                      : "text-dark-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bad Habit */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                The Vulnerable Habit
              </h3>
              <ul className="space-y-3 text-dark-300 text-sm">
                {activeTab === 'browsing' && (
                  <>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Using Chrome logged into a Google Account.</li>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Accepting "All Cookies" to remove popups quickly.</li>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Searching for sensitive info on standard engines.</li>
                  </>
                )}
                {activeTab === 'social' && (
                  <>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Posting real-time location photos.</li>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Participating in "Viral Quizzes" (data harvesting).</li>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Using "Sign in with Facebook" on 3rd party apps.</li>
                  </>
                )}
                {activeTab === 'mobile' && (
                  <>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Leaving WiFi/Bluetooth on when leaving the house.</li>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Granting "Always Allow" location access.</li>
                    <li className="flex gap-2"><span className="text-red-500">•</span> Using unencrypted SMS for sensitive chats.</li>
                  </>
                )}
              </ul>
            </div>

            {/* Good Habit */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                The Secure Protocol
              </h3>
              <ul className="space-y-3 text-dark-300 text-sm">
                {activeTab === 'browsing' && (
                  <>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Compartmentalization:</strong> Use different browsers for different tasks.</li>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Search Agnosticism:</strong> Use DuckDuckGo or StartPage.</li>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Cookie Autodelete:</strong> Wipe cookies when tabs close.</li>
                  </>
                )}
                {activeTab === 'social' && (
                  <>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Disinformation:</strong> Use slightly incorrect data (e.g. wrong birth date).</li>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Time-Shifting:</strong> Post photos days after the event.</li>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Burner Accounts:</strong> Unique emails for every platform.</li>
                  </>
                )}
                {activeTab === 'mobile' && (
                  <>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Radio Silence:</strong> Toggle Airplane Mode when commuting.</li>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>Signal Protocol:</strong> Move chats to Signal or Session.</li>
                    <li className="flex gap-2"><span className="text-green-500">✓</span> <strong>App Audit:</strong> Regularly revoke permissions.</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
