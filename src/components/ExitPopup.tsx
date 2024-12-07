import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Wait! Before you go...
        </h2>
        <p className="text-gray-600 mb-6">
          Get your Virtual Assistant now and start scaling today! Sign up through our affiliate link and get a free consultation within the next 24 hours.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Get Started Now!
        </button>
      </div>
    </div>
  );
}