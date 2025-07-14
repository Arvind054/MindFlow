const mongoose = require('mongoose');
const ChatSchema = new mongoose.Schema({
    messages:[{
        type: mongoose.Types.ObjectId,
        required: false,
        ref: 'FlowMessage', 
    }]
});

const FlowChat = mongoose.model("FlowChat",ChatSchema);
module.exports = FlowChat;