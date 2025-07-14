const Flow = require('../Models/FlowSchema');
const FlowChat = require('../Models/ChatSchema');
const FlowMessage = require("../Models/MessageSchema");
const {GoogleGenAI} = require('@google/genai');
const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEMINI_API,});
//To Create A Flow
module.exports.CreateFlow = async(req, res)=>{
    console.log("req, received");
   try{
    const message = await FlowMessage.create({ text: "Hello, How Can I Assist you today", sender: "AI" });
    const newChat = await FlowChat.create({ messages: [message._id] });
    const newFlow = await Flow.create({
      chat: newChat._id,  
        nodes: [
          {
            id: "1",
            type: "editableNode",
            position: { x: 100, y: 100 },
            data: {
              label: "Start Here"
            }
          }
        ],
        edges: []
    });
    //console.log("new flow is", newFlow);
    const populatedFlow = await Flow.findById(newFlow._id).populate({
      path: 'chat',
      populate: {
        path: 'messages', 
      },
    });
    console.log("populated flow is ", populatedFlow);
    return res.json({ flow: populatedFlow });
   }catch(err){
    console.log("err", err);
    return res.status(500).json({ error: "Internal Server Error", details: err.message });
   }
}
//to Hnadle the User Chat with the Flow
module.exports.flowChat = async (req, res) => {
  const { id, text } = req.body;

  try {
    if (!id || !text) {
      return res.status(401).send("Flow or message not found");
    }

    const currFlow = await Flow.findById(id).populate({
      path: 'chat',
      populate: { path: 'messages' },
    });

    if (!currFlow) {
      return res.status(401).send("Flow not found");
    }

    const currChat = currFlow.chat;

    const mapData = {nodes : currFlow?.nodes||[], edges: currFlow?.edges || []};
    const chatHistory = currChat.messages.map(msg => ({
      sender: msg.sender,
      text: msg.text
    }));

    const prompt = `The user is generating a mind map using React Flow.
Current map data:
${JSON.stringify(mapData)}
Chat history:
${JSON.stringify(chatHistory)}
Now, the user has asked: "${text}"
Please provide:
1. Updated React Flow map data (nodes and edges) in JSON format, directly usable by React Flow.
2. A one-line summary of what you updated/created in this mind map.
Respond in the following JSON format:
{
  "mapData": {
    "nodes": [...],
    "edges": [...]
  },
  "summary": "Your one-line summary here"
}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    // Assume extractAIResponse is a utility that parses the response
    const { newMapData, summary } = extractAIResponse(response.text);
    const userMessage = await FlowMessage.create({ text, sender: "user" });
    const aiMessage = await FlowMessage.create({ text: summary, sender: "AI" });
    currChat.messages.push(userMessage._id, aiMessage._id);
    await currChat.save();
    currFlow.nodes = newMapData?.nodes;
    currFlow.edges = newMapData?.edges;
    await currFlow.save();
    const updatedFlow = await Flow.findById(id).populate({
      path: 'chat',
      populate: { path: 'messages' },
    });
    res.json(updatedFlow);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating response");
  }
};
function extractAIResponse(text) {
  try {
    const jsonBlock = text.match(/```json([\s\S]*?)```/)?.[1] || text;
    const cleaned = jsonBlock
      .replace(/,\s*}/g, '}') 
      .replace(/,\s*]/g, ']');
    const parsed = JSON.parse(cleaned);
    return {
      newMapData: parsed.mapData,
      summary: parsed.summary,
    };
  } catch (err) {
    console.error("Failed to parse AI response:", err);
    return null;
  }
}