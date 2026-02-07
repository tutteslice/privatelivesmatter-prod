import { useState, type FormEvent } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

// TODO: Replace with your actual Basin Form ID for the Newsletter
// It's best to create a separate form in Basin for your subscribers
const NEWSLETTER_FORM_ID = 'b1d22276d593';

interface NewsletterProps {
  variant?: 'inline' | 'card' | 'banner';
}

export function Newsletter({ variant = 'inline' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');

    try {
      const response = await fetch(`https://usebasin.com/f/${NEWSLETTER_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Newsletter submission failed');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-brand-600/20 via-brand-500/10 to-brand-600/20 border border-brand-500/20 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-1">Join the Privacy Newsletter</h3>
            <p className="text-sm text-dark-300">Weekly privacy tips, tool reviews, and digital rights news.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 sm:w-64 px-4 py-2.5 bg-dark-900/80 border border-white/10 rounded-lg text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === 'success' ? (
                <Check className="w-4 h-4" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>
        {status === 'success' && (
          <p className="text-brand-400 text-sm mt-3 text-center sm:text-right animate-fade-in">
            ✓ Welcome aboard! Check your inbox to confirm.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-3 text-center sm:text-right animate-fade-in">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className="bg-dark-800/50 border border-white/5 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-brand-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Privacy Newsletter</h3>
        <p className="text-dark-300 text-sm mb-6 max-w-sm mx-auto">
          Stay updated with the latest privacy tools, security news, and digital rights developments.
        </p>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-5 py-3 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Subscribing...
              </>
            ) : status === 'success' ? (
              <>
                <Check className="w-4 h-4" />
                Subscribed!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Subscribe
              </>
            )}
          </button>
          {status === 'error' && (
            <p className="text-red-400 text-xs flex items-center gap-1 justify-center animate-fade-in">
              <AlertCircle className="w-3 h-3" /> Something went wrong. Please try again.
            </p>
          )}
        </form>
        <p className="text-dark-500 text-xs mt-4">No tracking. No spam. Unsubscribe anytime.</p>
      </div>
    );
  }

  // Inline variant
  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for privacy updates..."
          className="flex-1 px-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : status === 'success' ? (
            <>
              <Check className="w-4 h-4" />
              Done!
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Subscribe
            </>
          )}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-brand-400 text-sm mt-2 text-center animate-fade-in">
          ✓ Welcome! Check your inbox to confirm your subscription.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2 text-center animate-fade-in">
          <AlertCircle className="inline w-3 h-3 mr-1" /> Error subscribing. Please try again.
        </p>
      )}
    </div>
  );
}