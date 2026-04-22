import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

/**
 * LandingPage Component
 * Orchestrates the sections of the landing page.
 */
const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">FlowSync</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Customers</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900">Log in</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* How It Works Section (Integrated into main flow) */}
        <section id="how-it-works" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Three steps to total automation</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Stop wrestling with disconnected tools. Set up your first workflow in minutes.
              </p>
            </div>

            <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">
              {/* Connecting Line (Desktop Only) */}
              <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-slate-200 -z-0" />

              {/* Step 1 */}
              <div className="relative z-10 flex-1 flex flex-col items-center text-center group">
                <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Connect</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Link your existing tools like Slack, Notion, or GitHub in minutes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex-1 flex flex-col items-center text-center group">
                <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Configure</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Define your logic using our intuitive visual builder. No coding required.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex-1 flex flex-col items-center text-center group">
                <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Deploy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Launch your automated workflows instantly and watch the magic happen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Features id="features" />
        <Testimonials id="testimonials" />
        <Pricing id="pricing" />

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto bg-indigo-600 rounded-[2.5rem] py-16 md:py-24 text-center text-white px-6 shadow-2xl relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to find your flow?</h2>
              <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join 2,000+ companies automating their operations with FlowSync.
              </p>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
                Start Free Trial
              </button>
              <p className="mt-6 text-sm text-indigo-200">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-indigo-600 p-1 rounded-md">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">FlowSync</span >
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                The modern workflow engine for high-performance teams. Automate everything, sync everything.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600">Features</a></li>
                <li><a href="#" className="hover:text-indigo-600">Integrations</a></li>
                <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-600">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
                <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} FlowSync Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;