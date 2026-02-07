import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { SettingsProvider } from './context/SettingsContext';
import { AffiliateProvider } from './context/AffiliateContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { ToolsCreated } from './pages/ToolsCreated';
import { ToolsRecommended } from './pages/ToolsRecommended';
import { ToolDetail } from './pages/ToolDetail';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { Media } from './pages/Media';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Settings } from './pages/Settings';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ToolsRecommended />} />
          <Route path="/tool/:id" element={<ToolDetail />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/media" element={<Media />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
      <CookieBanner />
      <Footer />
    </>
  );
}

export function App() {
  return (
    <Router>
      <SettingsProvider>
        <ThemeProvider>
          <AffiliateProvider>
            <CartProvider>
              <AppContent />
            </CartProvider>
          </AffiliateProvider>
        </ThemeProvider>
      </SettingsProvider>
    </Router>
  );
}
