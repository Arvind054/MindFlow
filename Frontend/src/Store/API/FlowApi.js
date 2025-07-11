import axiosInstance from './axiosInstance';

//To create A new Flow
export const createFlowAPI = async()=>{
    const response = await axiosInstance.post("/flow/create");
    return response.data;
}