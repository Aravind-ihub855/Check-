import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, BarChart3, Users } from 'lucide-react';

const features = [
  {
    title: "Intelligent Triggers",
    description: "Set up complex logic with zero code. Trigger actions based on any event in your tech stack.",
    icon: Zap,
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    title: "Seamless Ecosystem",
    description: "Connect 500+ apps instantly. From Slack and Notion to custom API endpoints.",
    icon: Layers,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Real-time Insights",
    description: "Visualize bottlenecks as they happen with our advanced analytics dashboard.",
    icon: BarChart3,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Team Sync",
    description: "Work together in a unified environment with shared workflows and permissions.",
    icon: Users,
    color: "text-violet-500",
    bgColor: "bg-violet-50"
  }
];

/**
 * Features Component
 * Grid of benefit-driven cards.
 */
const Features: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Stop managing tools and start managing outcomes. FlowSync handles the plumbing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col"
            >
              <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;