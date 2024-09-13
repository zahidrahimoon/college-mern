import React from 'react';

const GoogleForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Registration Form</h1>
      <p className="text-lg text-gray-600 mb-4">Please fill out the registration form by clicking the button below:</p>
      <a
        href="https://forms.gle/cxdoBf49455ex6Ld8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
          Fill Out Form
        </button>
      </a>
    </div>
  );
};

export default GoogleForm;
