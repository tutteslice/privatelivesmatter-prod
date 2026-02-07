import { Shield, Lock, Eye, Code, Heart, Globe, ArrowRight, Users, Target, Zap, BookOpen, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import thompaPhoto from '../assets/thompa.jpeg';

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Every tool we build, every service we recommend, and every decision we make puts your privacy at the forefront.',
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'Transparency is non-negotiable. We believe in open-source software that anyone can inspect, audit, and verify.',
  },
  {
    icon: Eye,
    title: 'Education',
    description: 'Knowledge is the most powerful privacy tool. We\'re committed to making privacy education accessible to everyone.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Privacy is a collective effort. We build tools and resources for the community, driven by the community.',
  },
];

const timeline = [
  {
    year: '2025',
    title: 'The Beginning',
    description: 'The first seeds were planted with simple, loose ideas about digital freedom and personal privacy.',
  },
  {
    year: '2026',
    title: 'The Present',
    description: 'Private Lives Matter has evolved into a dedicated platform focused on spreading awareness and protecting your digital rights.',
  },
  {
    year: '????',
    title: 'The Future',
    description: 'The digital landscape is shifting. We are preparing for the next phase of the fight. Stay vigilant.',
  },
];

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            About <span className="text-brand-400">Private Lives Matter</span>
          </h1>
          <p className="text-lg sm:text-xl text-dark-300 leading-relaxed max-w-3xl mx-auto">
            We believe that privacy is not a luxury — it's a fundamental human right. In an age where 
            every click, search, and conversation is tracked, analyzed, and monetized, we're here to 
            help you fight back.
          </p>
        </div>

        {/* Thomas Rooth Section */}
        <section className="mb-20">
          <div className="bg-dark-800/40 border border-white/5 rounded-3xl p-8 sm:p-12 md:flex md:items-center md:gap-12">
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <div className="relative group mx-auto md:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-cyan rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={thompaPhoto} 
                  alt="Thomas Rooth" 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl object-cover border border-white/10 shadow-2xl" 
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Thomas Rooth</h2>
              <p className="text-brand-400 font-medium mb-4">Founder & Privacy Advocate</p>
              <p className="text-dark-300 leading-relaxed mb-4">
                I started Private Lives Matter because I was frustrated with the state of digital privacy. 
                We're seeing major shifts like the EU's "chat control" initiative being pushed forward while most 
                people don't even bat an eye. It's alarming how quickly our fundamental rights are being 
                undermined while the public remains largely unaware.
              </p>
              <p className="text-dark-300 leading-relaxed mb-4">
                We've seen it firsthand here in Sweden, where ministers publicly commit to one stance only 
                to change their minds behind closed doors. This kind of shady, inconsistent behavior 
                from those in power is exactly why I believe this mission is so necessary. 
                Information needs to be out there, easily accessible, so everyone knows exactly what is at stake.
              </p>
              <p className="text-dark-300 leading-relaxed">
                My goal is to make privacy accessible. Not everyone needs to be a cybersecurity expert 
                to protect their digital life. Through honest recommendations and plain-language education, 
                I want to empower anyone — regardless of their technical background — to take control 
                of their online privacy and defend their rights.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-dark-300 leading-relaxed">
                To educate and empower individuals with the knowledge they need to recognize 
                and resist the erosion of their digital freedom and privacy.
              </p>
            </div>
            <div className="bg-dark-800/40 border border-white/5 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-dark-300 leading-relaxed">
                To spread awareness on online rights and that they are slowly but steadily 
                being taken away from us.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Values</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-dark-800/40 border border-white/5 rounded-2xl p-6 text-center hover:border-brand-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-brand-400" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-white/5 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-brand-400">{item.year}</span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-brand-500/10 to-accent-cyan/5 border border-brand-500/20 rounded-3xl p-8 sm:p-12 text-center">
            <Lock className="w-12 h-12 text-brand-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Take Control?
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto mb-8">
              Explore our tools, read our guides, and join a community of people who believe 
              that privacy is worth fighting for.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <Link
                to="/tools"
                className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-brand-500/20"
              >
                Explore Tools <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/knowledge-base"
                className="px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center gap-2"
              >
                Explore Material <BookOpen className="w-4 h-4" />
              </Link>
              <Link
                to="/media"
                className="px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center gap-2"
              >
                Explore Media <PlayCircle className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center gap-2"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
