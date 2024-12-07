import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">About Wishup</h3>
            <p className="mb-4">
              Wishup is a leading virtual assistant service provider, connecting businesses with pre-vetted, highly skilled professionals to help scale operations efficiently and cost-effectively.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Wishup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}