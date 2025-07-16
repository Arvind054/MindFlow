import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { getAllFlows } from '../Store/API/FlowApi';
import LoadingAllFlows from './Loaders/LoadingAllFlows'
const MyFlows = () => {
  const navigator = useNavigate();
  const [flows, setFlows] = useState([]);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector((state)=>state.user.isAuthenticated);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
   const fetchFlows = async()=>{
    setLoading(true);
     const response = await getAllFlows(user?.email);
     setLoading(false);
     if(!response)return ;
     setFlows(response);
   };
   fetchFlows();
  }, [user]);

if(loading){
  return <LoadingAllFlows/>
}
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-30">
      <h1 className="text-4xl font-bold mb-8 text-center">🧠 Your Flows</h1>

      {flows.length === 0 ? (
        <p className="text-center text-gray-400">You don't have any flows yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flows.map((flow) => (
            <Link
              to={`/flow/${flow._id}`}
              key={flow._id}
              className="bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{flow.title || "Untitled Flow"}</h2>
              <p className="text-gray-400 text-sm">
                Created: {new Date(flow.createdAt).toLocaleDateString()}<br />
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFlows;
