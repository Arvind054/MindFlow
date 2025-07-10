const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    flows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Flow"
    }]
});
const FlowUser = mongoose.model('FlowUser', UserSchema);
module.exports = FlowUser;