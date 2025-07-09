import React, { useCallback, useState } from 'react';
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

// Custom Editable Node Component
const EditableNode = ({ data, id }) => {
  const [text, setText] = useState(data.label);

  return (
    <div className="bg-white text-black rounded-md shadow px-4 py-2 text-sm min-w-[120px]">
      <Handle type="target" position={Position.Top} />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-transparent outline-none w-full text-center"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

const nodeTypes = {
  editableNode: EditableNode,
};

const MindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: '1',
      type: 'editableNode',
      position: { x: 250, y: 5 },
      data: { label: 'Start Here' },
    }
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

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

  return (
    <div className="h-full w-full bg-[#0f172a] text-white">
      <button
        onClick={addNewNode}
        className="absolute top-4 left-4 z-10 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow"
      >
        <Plus className="w-4 h-4" />
        Add Node
      </button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-[#0f172a]"
      >
        <MiniMap />
        <Controls />
        <Background color="#334155" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default MindMap;
