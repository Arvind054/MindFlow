const router = require('express').Router();
const {CreateFlow,flowChat} = require("../Controllers/FlowControllers")

//To get A Particular MindMap using ID
router.get("/:id", (req, res)=>{

});

//To get All the Flows(MindMaps) of the user
router.get("/all", (req, res)=>{
  return "1";
});

//To create A new Flow for the User
router.post("/create", CreateFlow);

//To generate flow using AI
router.post("/chat",flowChat);

//To Handle Manual Edit of the Flow
router.post("/save", (req,res)=>{
    return "1";

});

module.exports = router;