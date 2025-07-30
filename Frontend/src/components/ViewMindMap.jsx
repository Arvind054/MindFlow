import React, { useCallback, useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Plus } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import {getFlowById} from '../Store/API/FlowApi';
import { getUserProfile } from '../Store/API/UserApi';
import FlowDataLoader from './Loaders/FlowDataLoader';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setMapData } from '../Store/Slice/FlowSlice';
import toast from 'react-hot-toast';

const ViewMindMap = () => {
  const mapData = useSelector((state) => state.flow.mapData); 
  const isAuthenticated = useSelector((state) =>state.user.isAuthenticated);
  const [flowLoading, setFlowLoading] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const flowRef = useRef();
  const dispatch = useDispatch();
  const currFlowId = useParams();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNewNode = () => {
    const newId = (nodes.length + 1).toString();
    const newNode = {
      id: newId,
      type: 'editableNode',
      position: {
        x: Math.random() * 500,
        y: Math.random() * 400,
      },
      data: { label: `Node ${newId}` },
    };
    setNodes((nds) => [...nds, newNode]);
  };
  const handleSaveAsPDF = ()=>{
    const input = flowRef.current;
    if (!input) return;
    const toastId = toast.loading("Downloading...");
    const scale = 5; 
  
    html2canvas(input, {
      backgroundColor: '#ffffff',
      scale: scale, 
      useCORS: true,
      scrollY: -window.scrollY
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
  
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });
  
      // Use canvas dimensions to avoid resizing
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('mindmap.pdf');
      toast.dismiss(toastId);
      toast.success("Mind Map Downloaded");
    });
  }
  useEffect(()=>{
      const tokenInfo = JSON.parse(localStorage.getItem('VerificationToken'));
      if(!isAuthenticated){
          if(tokenInfo){
              getUserProfile(tokenInfo,dispatch);
            }else{
                navigator("/login");
            }
        }
        
    try{
       if(!currFlowId.id){
        toast.error("Flow Not Found please try again");
        navigator("/");
        return ;
       }
        
       const getFlowData = async()=>{
       const flow = await getFlowById(currFlowId.id);
       console.log("flow is ", flow);
       const flowId = flow._id;
       const mapData = { nodes: flow.nodes, edges: flow.edges }; 
       const data = { id: flowId, mapData,}; 
       dispatch(setMapData(data));
       }
       setFlowLoading(true);
       getFlowData();
       setFlowLoading(false);
       
    }catch(err){
      toast.error("error Getting Flow");
       navigator("/")
    }
  }, [])
  useEffect(()=>{
    setNodes(mapData?.nodes);
    setEdges(mapData?.edges);
  }, [mapData]);

  if(flowLoading){
    return <FlowDataLoader/>;
  }
  return (
    <div className="h-[95vh] w-full bg-[#0f172a] text-white" >
      <Download className='text-green-400 z-10 absolute top-20 right-10 cursor-pointer' onClick={handleSaveAsPDF}></Download>
    <div className='w-full h-full' ref={flowRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        className="bg-[#0f172a]"
        
      >
        <MiniMap  />
        <Controls />
        <Background color="#334155" gap={16} />
      </ReactFlow>
      </div>
    </div>
  );
};

export default ViewMindMap;
