import { useState, type FormEvent } from 'react';
import { Mail, Send, Check, AlertCircle, MessageSquare, Clock, Shield } from 'lucide-react';

// TODO: Replace with your actual Basin Form ID
// You can find this in your Basin dashboard (e.g., https://usebasin.com/f/xxxxx)
// It is the string of characters after /f/
const BASIN_FORM_ID = '10449b04dd68';

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`https://usebasin.com/f/${BASIN_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-brand-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-dark-300 text-lg leading-relaxed">
            Have a question, suggestion, or want to collaborate? We'd love to hear from you. 
            Your message is welcome — and your privacy is respected.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Email</h3>
              <p className="text-sm text-dark-400">contact@privatelivesmatter.com</p>
            </div>

            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-accent-purple" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Response Time</h3>
              <p className="text-sm text-dark-400">Usually within 24-48 hours</p>
            </div>

            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-accent-cyan" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Privacy Note</h3>
              <p className="text-sm text-dark-400">
                We don't store your data beyond what's needed to respond. 
                For sensitive communications, consider using PGP encryption.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-dark-300 text-sm text-center max-w-sm mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-dark-700 hover:bg-dark-600 text-white text-sm font-medium rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-200 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="text-dark-500">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="tools">Tool Feedback/Bug Report</option>
                      <option value="store">Store/Order Question</option>
                      <option value="collaboration">Collaboration/Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-sm text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm animate-fade-in">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Are your tools really free?',
                a: 'Yes! All our privacy tools are free to use. We believe privacy should be accessible to everyone, regardless of their budget.',
              },
              {
                q: 'Do you collect any data?',
                a: 'We practice what we preach. Our tools process data locally in your browser whenever possible. We don\'t track users, sell data, or use analytics that compromise your privacy.',
              },
              {
                q: 'Can I contribute to your projects?',
                a: 'Absolutely! Our tools are open-source and we welcome contributions. Check out our GitHub repositories or reach out through this contact form.',
              },
              {
                q: 'How can I support Private Lives Matter?',
                a: 'You can support us by spreading the word, purchasing from our store, contributing to our open-source projects, or simply sharing our resources with others.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-dark-800/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}