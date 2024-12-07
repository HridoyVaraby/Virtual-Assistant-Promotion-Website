import React, { useState } from 'react';

const serviceOptions = [
  'Administrative Executive Assistant',
  'Bookkeeping Assistant',
  'Software Tester/QA Engineer',
  'Remote Developer'
];

export function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id="hero" className="min-h-screen pt-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-20">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Need a Virtual Assistant to Scale Your Business?
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Hire pre-vetted, highly skilled VAs from Wishup to save time, reduce costs, and accelerate your business growth.
          </p>
          <p className="text-lg mb-8 text-gray-200">
            Get started with a free consultation and see how Wishup's expert VAs can handle your routine tasks, allowing you to focus on what matters most.
          </p>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
            alt="Virtual Assistant working remotely"
            className="rounded-lg shadow-2xl max-w-md w-full hidden lg:block"
          />
        </div>

        <div className="lg:w-1/2 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Get Your Free Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  I want to hire a
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your requirements
                </label>
                <textarea
                  id="requirements"
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}