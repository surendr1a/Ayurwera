// SignupPage.js
import React, { useState } from 'react';

const SignupPage = () => {
  const [error, setError] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    const isSignupSuccessful = false; // Replace with real logic
    setError(!isSignupSuccessful);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 mt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Sign Up</h2>
        
        {error && (
          <p className="text-red-500 text-center mb-4">Signup failed. Please check your details.</p>
        )}
        
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Age</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email ID</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-700 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-green-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
