import axiosInstance from './axiosInstance';

//To create A new Flow
export const createFlowAPI = async()=>{
    try{
    const response = await axiosInstance.post("/flow/create");
    console.log("response");
    return response.data.flow;
    }catch(err){
        console.log(err);
        return null;
    }
};

// To chat for the current flow

export const chatFlowAPI = async(flowId, text)=>{
    try{
        console.log(flowId, text);
        const response = await axiosInstance.post("/flow/chat", {id:flowId, text});
        return response.data;
    }catch(err){
        console.log(err);
        return null;
    }
}