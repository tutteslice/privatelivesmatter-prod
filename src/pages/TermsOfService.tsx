import { FileText } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-dark-800 flex items-center justify-center border border-white/5">
              <FileText className="w-5 h-5 text-dark-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Terms of Service</h1>
          </div>
          <p className="text-dark-300">
            Last Updated: February 6, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-dark-300 prose-a:text-brand-400 prose-strong:text-white prose-ul:text-dark-300">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using Private Lives Matter, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2>2. Educational Purpose</h2>
          <p>
            The content, tools, and resources provided on this site are for educational and informational purposes only. They do not constitute professional legal or cybersecurity advice.
          </p>
          <ul>
            <li>We are not responsible for any actions you take based on the information provided here.</li>
            <li>Usage of our privacy tools is at your own risk. While we strive for accuracy, we cannot guarantee absolute security against all potential threats.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            Our original content is protected by copyright. However, consistent with our mission, we often release tools under open-source licenses (like MIT or GPL). Please check specific repositories for license details.
          </p>

          <h2>4. Affiliate Disclosure</h2>
          <p>
            We may earn a commission when you purchase products or services through links on our site (e.g., VPNs, Password Managers). This supports our mission at no extra cost to you. We only recommend tools we have vetted and trust.
          </p>

          <h2>5. User Conduct</h2>
          <p>
            You agree not to use this website for any unlawful purpose or to conduct any activity that could damage, disable, or impair the site's operation.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall Private Lives Matter or its founders be liable for any indirect, incidental, special, or consequential damages arising out of your use of the site or tools.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any significant changes by updating the date at the top of this page.
          </p>
        </div>
      </div>
    </div>
  );
}
