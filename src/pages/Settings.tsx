import { useState } from 'react';
import { Settings as SettingsIcon, ShoppingBag, Link as LinkIcon, RotateCcw, Lock } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import { useAffiliate } from '../context/AffiliateContext';
import { recommendedTools } from '../data/tools';

export function Settings() {
  const { storeEnabled, setStoreEnabled } = useSettings();
  const { getLink, updateLink, resetLink, affiliateLinks } = useAffiliate();
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === 'plm-admin') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-md w-full px-4">
          <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-dark-700/50 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-dark-300" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Restricted Access</h2>
            <p className="text-dark-400 text-sm mb-6">
              This area is for administrative purposes only.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={accessCode}
                onChange={(e) => {
                  setAccessCode(e.target.value);
                  setError(false);
                }}
                placeholder="Enter access code"
                className={`w-full px-4 py-3 bg-dark-900/50 border rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:ring-1 transition-all ${
                  error 
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-white/10 focus:border-brand-500/50 focus:ring-brand-500/20'
                }`}
              />
              {error && (
                <p className="text-xs text-red-400">Incorrect access code</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl transition-all shadow-lg shadow-brand-500/20"
              >
                Unlock Settings
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center">
              <SettingsIcon className="w-5 h-5 text-dark-200" />
            </div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
          </div>

          <div className="space-y-6">
            {/* Store Functionality */}
            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${storeEnabled ? 'bg-brand-500/10' : 'bg-dark-700/50'}`}>
                    <ShoppingBag className={`w-6 h-6 ${storeEnabled ? 'text-brand-400' : 'text-dark-500'}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Store Functionality</h3>
                    <p className="text-dark-400 text-sm max-w-md">
                      Enable or disable the e-commerce features of the site. 
                      When disabled, the store page, cart, and related links will be hidden.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setStoreEnabled(!storeEnabled)}
                  className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 focus:ring-brand-500 ${
                    storeEnabled ? 'bg-brand-500' : 'bg-dark-600'
                  }`}
                >
                  <span className="sr-only">Toggle store</span>
                  <span
                    className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      storeEnabled ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Affiliate Links */}
            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                  <LinkIcon className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Affiliate Links</h3>
                  <p className="text-dark-400 text-sm">
                    Manage the referral links for recommended tools. 
                    These overrides are saved locally in your browser.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {recommendedTools.map(tool => {
                  const isOverridden = !!affiliateLinks[tool.id];
                  return (
                    <div key={tool.id} className="bg-dark-900/50 rounded-xl p-4 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-white">{tool.name}</label>
                        {isOverridden && (
                          <button
                            onClick={() => resetLink(tool.id)}
                            className="text-xs text-dark-400 hover:text-brand-400 flex items-center gap-1 transition-colors"
                            title="Restore default link"
                          >
                            <RotateCcw className="w-3 h-3" />
                            Restore Default
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={getLink(tool.id)}
                        onChange={(e) => updateLink(tool.id, e.target.value)}
                        placeholder={`https://...`}
                        className={`w-full px-4 py-2.5 bg-dark-800 border rounded-lg text-sm text-white placeholder:text-dark-500 focus:outline-none focus:ring-1 transition-all ${
                          isOverridden 
                            ? 'border-accent-purple/50 focus:border-accent-purple focus:ring-accent-purple/20' 
                            : 'border-white/10 focus:border-brand-500/50 focus:ring-brand-500/20'
                        }`}
                      />
                      <div className="mt-1 text-xs text-dark-500 truncate">
                        Default: {tool.url}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
