import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-brand-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-dark-300">
            Last Updated: February 6, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-dark-300 prose-a:text-brand-400 prose-strong:text-white prose-ul:text-dark-300">
          <h2>1. Introduction</h2>
          <p>
            At Private Lives Matter, we believe privacy is a fundamental human right. Our business model is not built on harvesting your data. 
            This policy outlines exactly what we do (and more importantly, what we don't do) with your information.
          </p>

          <h2>2. Data Collection</h2>
          <p>
            We operate on a principle of data minimization. We only collect what is strictly necessary to provide our services.
          </p>
          <ul>
            <li><strong>Website Visitors:</strong> We use privacy-friendly analytics (no Google Analytics) that do not track your IP address or use persistent cookies.</li>
            <li><strong>Tools:</strong> Our browser-based tools run locally on your device. Input data (like text for encryption) is processed in your browser and is never sent to our servers.</li>
            <li><strong>Newsletter:</strong> If you subscribe, we collect your email address solely for sending updates. We do not sell this list.</li>
            <li><strong>Store:</strong> Order information is processed securely for fulfillment purposes only.</li>
          </ul>

          <h2>3. Cookies & Tracking</h2>
          <p>
            We do not use third-party tracking cookies. We may use essential local storage to remember your preferences (like your chosen color theme or "Store Enabled" setting).
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            While we strive for independence, we use select third-party providers who align with our privacy standards:
          </p>
          <ul>
            <li><strong>Hosting:</strong> Our site is hosted on secure infrastructure that respects data sovereignty.</li>
            <li><strong>Affiliate Links:</strong> We use affiliate links for recommended tools. Clicking these may set a cookie on the target site (e.g., NordVPN) to attribute the referral, subject to their privacy policies.</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>
            Under GDPR and other privacy laws, you have the right to access, correct, or delete your data. Since we hold minimal data, this is usually as simple as unsubscribing from our newsletter.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have specific privacy concerns, please contact us at: <a href="mailto:privacy@privatelivesmatter.com">privacy@privatelivesmatter.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
