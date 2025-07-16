const router = require('express').Router();
const {CreateFlow,flowChat,getAllFlows,getFlowById} = require("../Controllers/FlowControllers")

//To get All the Flows of the user
router.get("/all",getAllFlows);
//To get A Particular MindMap using ID
router.get("/:id", getFlowById);
//To create A new Flow for the User
router.post("/create", CreateFlow);

//To generate flow using AI
router.post("/chat",flowChat);

//To Handle Manual Edit of the Flow
router.post("/save", (req,res)=>{
    return "1";

});



module.exports = router;