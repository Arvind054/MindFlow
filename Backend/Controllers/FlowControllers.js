const Flow = require('../Models/FlowSchema');
const FlowChat = require('../Models/ChatSchema');
const FlowMessage = require("../Models/MessageSchema");
//To Create A Flow
module.exports.CreateFlow = async(req, res)=>{
    console.log("req, received");
   try{
        const message = await FlowMessage.create({text:"Hello, How Can i Assist you today", sender: "AI"});
       const newChat = await FlowChat.create({messages: [message._id]});
       console.log("chat created", newChat);
       const newFlow = await Flow.create({chat:newChat._id});
       return res.json({flow:newFlow, chat:newChat});
   }catch(err){
    console.log("err", err);
    return res.status(500).json({ error: "Internal Server Error", details: err.message });
   }
}