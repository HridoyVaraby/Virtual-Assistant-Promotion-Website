import React from 'react';
import { Check, Clock, Users, Brain, Globe, Calendar, Shield, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Pre-Vetted & Highly Qualified VAs',
    description: 'Only the top 1% of applicants make it through our rigorous screening process.'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective & Scalable',
    description: 'No overhead costs, no employee benefits, and flexible hiring options — part-time, full-time, or hourly.'
  },
  {
    icon: Clock,
    title: 'Quick Onboarding (Under 24 Hours)',
    description: 'Get a professional VA onboarded within a day and start delegating tasks immediately.'
  },
  {
    icon: Brain,
    title: 'Over 200 Skill Sets Available',
    description: 'From administrative support to specialized services like bookkeeping, project management, and software testing.'
  },
  {
    icon: Globe,
    title: 'Seamless Remote Collaboration',
    description: 'Hire VAs that work in your time zone for easy communication and high productivity.'
  },
  {
    icon: Calendar,
    title: 'No Long-Term Contracts',
    description: 'Work with a VA as long as you need—scale your team up or down without any commitment.'
  },
  {
    icon: Shield,
    title: 'Money-Back Guarantee',
    description: 'Enjoy peace of mind with our no-questions-asked 7-day money-back policy.'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Wishup's Virtual Assistants?
          </h2>
          <p className="text-xl text-gray-600">
            Unlock the power of highly trained, pre-vetted professionals to grow your business with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <benefit.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}