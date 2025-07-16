import React, { useEffect, useState } from 'react';
import { Send, Plus } from 'lucide-react';
import MindMap from './MindMap';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast'
import { chatFlowAPI } from '../Store/API/FlowApi';
import { setFlow } from '../Store/Slice/FlowSlice';
import {useNavigate} from 'react-router-dom';
import ChatLoader from './Loaders/ChatLoader'
const CreateFlow = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const chat = useSelector((state) => state.flow.chat);
  const flowId = useSelector((state)=>state.flow.flowId) ;
  const user = useSelector((state)=>state.user.user);
  const isAuthenticated = useSelector((state)=>state.user.isAuthenticated);
  const [userMessage, setuserMessage] = useState('');
  const [flowChat, setFlowChat] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChat = async()=>{
    
    try{
        if(!flowId){
          toast.error("Flow Not Found");
          navigator("/");
          return ;
        }
        if (!userMessage.trim()){
          return;
        } 
        setLoading(true);
        const textMessage = userMessage;
        const message = {
          text: userMessage,
          sender: "user"
        };
        setuserMessage('');
        const updatedChat = {
          messages: [...(flowChat?.messages || []), message],};
          setFlowChat(updatedChat);
        const flow = await chatFlowAPI(flowId, textMessage);
        if(!flow){
          throw new Error("Error Getting Response")
        }
        const newflowId = flow._id;
        const currflowChat = flow.chat;
        const mapData = {
          nodes:flow.nodes,
          edges: flow.edges,
        };
      const data = { id: newflowId, mapData, chat:currflowChat};
      dispatch(setFlow(data));
      toast.success("flow Updated");
      setLoading(false);
    }catch(err){
      toast.error("Error Getting response, plese try again");
      console.log(err);
      setLoading(false);
    }

}
  useEffect(() => {
    setFlowChat(chat);
  }, [chat]);
useEffect(()=>{
  if(!isAuthenticated){
    toast.error("Please login to continue");
    navigator("/login");
    return;
  }
})
  return (
    <div className="h-screen w-full bg-[#0f172a] text-white flex overflow-hidden pt-15">

      {/* Left Chat Section */}
      <div className="w-[28%] bg-[#1e293b] border-r border-gray-700 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-600 text-lg font-semibold text-white">
          💬 Chat With Our Advanced AI
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar flex flex-col">
          {flowChat && flowChat.messages?.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg w-fit max-w-[90%] ${
                message.sender === 'AI'
                  ? 'bg-[#334155] text-white'
                  : 'bg-blue-500 text-white self-end ml-auto'
              }`}
            >
              {message.text}
            </div>
          ))}
          {loading && <ChatLoader/>}
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t border-gray-600">
          <div className="flex items-center bg-[#0f172a] border border-gray-700 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
              onChange={(e)=>setuserMessage(e.target.value)}
              value={userMessage}
              disabled={loading}
            />
           {!loading && (
         <button className="ml-2 hover:text-blue-400 transition" onClick={handleChat}>
            <Send className="w-5 h-5" />
             </button>
              )}
          </div>
        </div>
      </div>

      {/* Right MindMap Section */}
      <div className="flex-1 relative">
        <MindMap />
      </div>
    </div>
  );
};

export default CreateFlow;
