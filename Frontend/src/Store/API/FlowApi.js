import axiosInstance from './axiosInstance';

//To create A new Flow
export const createFlowAPI = async(email)=>{
    try{
    const response = await axiosInstance.post("/flow/create", {email});
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
        const response = await axiosInstance.post("/flow/chat", {id:flowId, text});
        return response.data;
    }catch(err){
        console.log(err);
        return null;
    }
};

//To get All The Flows of the user
export const getAllFlows = async(email)=>{
    if(!email){
        return null;
    }
   try{
    const response = await axiosInstance.get("/flow/all",{
        params:{
            email: email,
        }
    });
    return response.data;
   }catch(err){
    return null;
   }
}

//To Get A Flow By ID
export const getFlowById = async(id)=>{
    try{
       const response = await axiosInstance.get(`/flow/${id}`);
       return response.data;
    }catch(err){
        console.log(err);
        return null;
    }
}