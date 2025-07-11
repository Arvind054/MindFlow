import { createSlice } from '@reduxjs/toolkit';
import Flow from '../../../../Backend/Models/FlowSchema';
const initialState = {
    flowId: null,
    mapData: null,
    chat: null,
}

const flowSlice = createSlice({
    name: Flow,
    initialState,
    reducers:{
        setFlow:(state, action)=>{
            state.flowId = action.id,
            state.mapData = action.mapData,
            state.chat= action.chat
        }
    }
});
export const {setFlow} = flowSlice.actions;
export default flowSlice.reducer;