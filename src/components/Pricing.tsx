import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * Pricing Component
 * Features a Monthly/Yearly toggle and two distinct pricing tiers.
 */
const Pricing: React.FC<{ id?: string }> = ({ id }) => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals and small projects.",
      monthlyPrice: 29,
      yearlyPrice: 23,
      features: ["5 Automations", "10 Integrations", "Email Support", "Standard Reporting"],
      cta: "Start Basic",
      isPopular: false
    },
    {
      name: "Pro",
      description: "For growing teams that need scale.",
      monthlyPrice: 79,
      yearlyPrice: 63,
      features: ["Unlimited Automations", "All Integrations", "Priority 24/7 Support", "Advanced Analytics", "Custom Webhooks"],
      cta: "Go Pro Now",
      isPopular: true
    }
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Simple, transparent pricing</h2>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-indigo-600 rounded-full relative p-1 transition-colors duration-200"
            >
              <motion.div 
                animate={{ x: isYearly ? 28 : 0 }}
                className="w-5 h-5 bg-white rounded-full shadow-sm"
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="ml-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              layout
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                plan.isPopular 
                ? 'bg-white border-2 border-indigo-600 shadow-xl scale-105 z-10' 
                : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-slate-500">/mo</span>
                </div>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                      <Check className="w-5 h-5 text-indigo-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${
                plan.isPopular 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' 
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;