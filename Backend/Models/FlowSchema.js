const mongoose = require('mongoose');
const { Schema } = mongoose;

const FlowSchema = new Schema({
  nodes: {
    type: Schema.Types.Mixed, 
    required: false,
  },
  edges: {
    type: Schema.Types.Mixed, 
    required: false,
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'FlowChat', 
    required: true,
  },
 createdAt:{
  type: Date,
  default: Date.now,
 }
});

const Flow = mongoose.model('Flow', FlowSchema);
module.exports = Flow;
