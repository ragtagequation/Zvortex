import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYouPage({ isDarkMode }) {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-white'} flex items-center justify-center`}>
      <div className={`max-w-md w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg text-center`}>
        <h2 className="text-2xl font-bold mb-6">Thank You!</h2>
        <p className="mb-6">You will hear from us shortly.</p>
        <Link
          to="/"
          className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
