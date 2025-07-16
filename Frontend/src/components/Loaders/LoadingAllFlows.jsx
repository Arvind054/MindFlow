import React from "react";

const LoadingAllFlows = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-50 mb-6"></div>

      <h2 className="text-2xl font-semibold">Loading your Flows...</h2>
      <p className="text-gray-400 mt-2">Please wait while we fetch your data 🧠</p>
    </div>
  );
};

export default LoadingAllFlows;
