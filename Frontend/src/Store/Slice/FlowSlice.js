import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    flowId: null,
    mapData: {
        nodes: [ {
            id: '1',
            type: 'editableNode',
            position: { x: 250, y: 5 },
            data: { label: 'Start Here' },
          }],
        edges: [],
    },
    chat: {
        messages:[
            {
                text: "Hello How Can I Assist You Today",
                sender: "AI"
            }
        ]
    },
}

const flowSlice = createSlice({
    name: 'flow',
    initialState,
    reducers:{
        setFlow:(state, action)=>{
            state.flowId = action.payload.id;
            state.mapData = action.payload.mapData;
            state.chat= action.payload.chat;
        },
        setMapData:(state, action)=>{
            state.mapData.edges = action.payload.edges;
            state.mapData.nodes = action.payload.nodes;
        },
        setChat:(state, action)=>{
            state.chat = action.payload.chat;
        }
    }
});
export const {setFlow,setMapData,setChat} = flowSlice.actions;
export default flowSlice.reducer;