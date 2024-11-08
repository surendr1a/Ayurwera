// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    // Example:
    const isLoginSuccessful = false; // Replace with real logic
    setError(!isLoginSuccessful);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Login</h2>
        
        {error && (
          <p className="text-red-500 text-center mb-4">Login failed. Please check your credentials.</p>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
          <p className="text-center text-gray-700 mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
