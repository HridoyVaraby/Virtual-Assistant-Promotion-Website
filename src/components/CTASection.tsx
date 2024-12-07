import React from 'react';

export function CTASection() {
  return (
    <section id="cta" className="bg-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Scale Your Business with a Virtual Assistant?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get matched with the perfect VA from Wishup today and start delegating tasks so you can focus on growing your business!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Find Your Perfect Virtual Assistant Now
          </button>
          <button className="bg-transparent hover:bg-purple-700 border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}