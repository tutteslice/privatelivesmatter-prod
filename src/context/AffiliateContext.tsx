import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { recommendedTools } from '../data/tools';

type AffiliateLinks = Record<string, string>;

interface AffiliateContextType {
  affiliateLinks: AffiliateLinks;
  updateLink: (toolId: string, newUrl: string) => void;
  resetLink: (toolId: string) => void;
  getLink: (toolId: string) => string;
}

const AffiliateContext = createContext<AffiliateContextType | undefined>(undefined);

export function AffiliateProvider({ children }: { children: ReactNode }) {
  // Initialize with overrides from localStorage, falling back to defaults in components
  const [affiliateLinks, setAffiliateLinks] = useState<AffiliateLinks>(() => {
    const saved = localStorage.getItem('plm_affiliate_links');
    return saved !== null ? JSON.parse(saved) : {};
  });

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('plm_affiliate_links', JSON.stringify(affiliateLinks));
  }, [affiliateLinks]);

  const updateLink = (toolId: string, newUrl: string) => {
    setAffiliateLinks(prev => ({
      ...prev,
      [toolId]: newUrl
    }));
  };

  const resetLink = (toolId: string) => {
    setAffiliateLinks(prev => {
      const next = { ...prev };
      delete next[toolId];
      return next;
    });
  };

  // Helper to get the effective link (override or default)
  const getLink = (toolId: string) => {
    if (affiliateLinks[toolId]) {
      return affiliateLinks[toolId];
    }
    const tool = recommendedTools.find(t => t.id === toolId);
    return tool ? tool.url : '#';
  };

  return (
    <AffiliateContext.Provider value={{ affiliateLinks, updateLink, resetLink, getLink }}>
      {children}
    </AffiliateContext.Provider>
  );
}

export function useAffiliate() {
  const context = useContext(AffiliateContext);
  if (context === undefined) {
    throw new Error('useAffiliate must be used within an AffiliateProvider');
  }
  return context;
}
