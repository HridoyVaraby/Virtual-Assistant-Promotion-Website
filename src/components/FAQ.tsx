import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How soon can I hire a Virtual Assistant?',
    answer: 'You can hire a VA within 24 hours! Our team makes sure the perfect match is found quickly, so you can get started right away without long delays.'
  },
  {
    question: 'What services can Virtual Assistants handle?',
    answer: 'Our VAs are trained in over 200 skill sets. Whether you need administrative support, bookkeeping, software testing, or even software development, we\'ve got you covered.'
  },
  {
    question: 'How do I know if a VA is right for my business?',
    answer: 'We ensure every VA is pre-vetted and highly qualified. During your consultation, we\'ll match you with a VA who fits your exact needs and requirements.'
  },
  {
    question: 'Can I scale my VA team as my business grows?',
    answer: 'Yes! Our service is completely flexible. As your business needs change, you can easily scale your VA team up or down, whether you need full-time, part-time, or hourly support.'
  },
  {
    question: 'Are there any long-term contracts?',
    answer: 'No, there are no long-term binding contracts. You can hire VAs for as long as you need—no commitments, no hassle.'
  },
  {
    question: 'What if I\'m not happy with the Virtual Assistant?',
    answer: 'We offer a 7-day money-back guarantee. If you\'re not completely satisfied with your VA, we\'ll replace them—no questions asked.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Have Questions? We've Got Answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}