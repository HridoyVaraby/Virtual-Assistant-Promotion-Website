import React, { useState } from 'react';

const serviceOptions = [
  'Administrative Executive Assistant',
  'Bookkeeping Assistant',
  'Software Tester/QA Engineer',
  'Remote Developer'
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: serviceOptions[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get Started Today</h2>
          
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Preferred Service
            </label>
            <select
              id="service"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Find Your VA Today!
          </button>
        </form>
      </div>
    </section>
  );
}