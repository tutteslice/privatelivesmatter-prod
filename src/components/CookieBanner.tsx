import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('plm_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('plm_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('plm_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100%-2rem)] animate-slide-in">
      <div className="bg-dark-900/95 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-black/50">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-brand-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-white mb-1">Privacy Choice</h3>
            <p className="text-xs text-dark-300 leading-relaxed">
              We use minimal local storage to remember your preferences (like your theme). 
              We do <strong>not</strong> use invasive third-party tracking cookies.
            </p>
          </div>
          <button 
            onClick={handleReject}
            className="text-dark-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="flex-1 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-dark-200 text-xs font-medium rounded-lg border border-white/5 transition-all"
          >
            Reject All
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-medium rounded-lg transition-all shadow-lg shadow-brand-500/20"
          >
            Accept Necessary
          </button>
        </div>
      </div>
    </div>
  );
}
