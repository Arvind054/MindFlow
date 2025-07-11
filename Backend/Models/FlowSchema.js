const mongoose = require('mongoose');
const FlowSchema = new mongoose.Schema({
    nodes:{
        type: String,
        required: false,
    },
    edges:{
        type:String,
        required: false,
    },
    chat :{
        type:mongoose.Types.ObjectId,
        required: true,
    }
});

const Flow = mongoose.model('Flow', FlowSchema);
module.exports = Flow;
