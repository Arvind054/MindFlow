import React, { useEffect, useState } from 'react';

const messages = [
  "Analyzing your idea...",
  "Identifying key concepts...",
  "Creating structure...",
  "Generating your mind map...",
  "Finalizing..."
];

const ChatLoader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % messages.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[90%] flex items-center justify-center p-2  text-white bg-gray-900 rounded-xl shadow-lg">
      <p className="text-lg animate-pulse">{messages[currentIndex]}</p>
    </div>
  );
};

export default ChatLoader;
