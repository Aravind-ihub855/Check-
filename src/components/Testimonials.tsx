import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "FlowSync transformed our ops. We've cut manual entry by 80%. The impact on our bottom line was immediate.",
    author: "Sarah Jenkins",
    role: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    text: "The cleanest UI I've used in a decade. Highly recommended for teams that value speed and simplicity.",
    author: "Marcus Chen",
    role: "Product Lead at ScaleUp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
  },
  {
    text: "Finally, an automation tool that doesn't require a CS degree. Our marketing team uses it every single day.",
    author: "Elena Rodriguez",
    role: "Founder of Bloom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  }
];

/**
 * Testimonials Component
 * Grid of customer success stories.
 */
const Testimonials: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by world-class teams</h2>
          <p className="text-slate-600">See how FlowSync is changing the way companies work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-indigo-200 mb-6" />
              <p className="text-slate-700 italic leading-relaxed mb-8 flex-1">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-slate-500 text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;