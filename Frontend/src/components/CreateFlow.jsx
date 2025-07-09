import React, { useCallback, useState } from 'react';
import { Send, Plus } from 'lucide-react';
import MindMap from './MindMap';
const CreateFlow = () => {
  
  return (
    <div className="h-screen w-full bg-[#0f172a] text-white flex overflow-hidden pt-15">

      {/* Left Chat Section */}
      <div className="w-[28%] bg-[#1e293b] border-r border-gray-700 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-600 text-lg font-semibold text-white">
          💬 Chat With Our Advanced AI
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          <div className="bg-[#334155] p-3 rounded-lg w-fit max-w-[90%]">Hi! How can I help you today?</div>
          <div className="bg-blue-500 p-3 rounded-lg w-fit self-end ml-auto max-w-[90%]">Generate a mindmap for AI.</div>
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t border-gray-600">
          <div className="flex items-center bg-[#0f172a] border border-gray-700 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
            />
            <button className="ml-2 hover:text-blue-400 transition">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right MindMap Section */}
      <div className="flex-1 relative">
       <MindMap/>   
      </div>
    </div>
  );
};

export default CreateFlow;
