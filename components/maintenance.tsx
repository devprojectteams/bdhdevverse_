import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"; // For the button icon

const Maintenance = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4">
      <div className="text-center p-4 max-w-md w-full rounded-lg bg-white shadow-lg">
        <div className="flex justify-center mb-6">
          {/* Placeholder for the maintenance image */}
          <img
            src="/maintenance.png" // Replace with your image path
            alt="Under Maintenance"
            className="w-48 h-48 md:w-64 md:h-64"
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Sorry, This Page is Under Maintenance
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          We are currently updating our website. Please check back within the
          next 24 hours. We apologize for the inconvenience.
        </p>
        <Link href="/" passHref>
          <a className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <FaArrowLeft className="mr-2" />
            Go Back to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Maintenance;
