import React from 'react';
import { Loader2 } from 'lucide-react'; // Spinner icon

const FlowLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <div className="text-5xl animate-bounce mb-4">🧠💭🗺️</div>

      <p className="text-xl font-semibold animate-pulse">
        Thinking takes time...
      </p>
      <p className="text-md text-gray-400 mt-1 mb-6">
        Creating your flow 
      </p>

      <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
    </div>
  );
};

export default FlowLoader;
