const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: false,
    },
    sender: {
        type: String,
        required: true,
    }
});

const FlowMessage = mongoose.model("FlowMessage", messageSchema);

module.exports = FlowMessage;
