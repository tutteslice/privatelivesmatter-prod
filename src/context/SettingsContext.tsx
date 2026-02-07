import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SettingsContextType {
  storeEnabled: boolean;
  setStoreEnabled: (enabled: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage or default to true
  const [storeEnabled, setStoreEnabled] = useState(() => {
    const saved = localStorage.getItem('plm_store_enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('plm_store_enabled', JSON.stringify(storeEnabled));
  }, [storeEnabled]);

  return (
    <SettingsContext.Provider value={{ storeEnabled, setStoreEnabled }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
