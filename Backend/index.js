const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const FlowRoutes = require("./Routes/FlowRoutes");
const UserRoutes = require("./Routes/UserRoutes");
//Mongo DB Connection 
dbConnection()
.then(console.log("DB connected successfully✅"))
.catch((e)=> console.log("Error Occured ", e));
async function dbConnection(){
    await mongoose.connect(process.env.MONGODB_URL);
}
app.use(cors());
app.use(express.json());

//Routes for Flow
app.use("/flow",FlowRoutes);

//Routes for User
//app.use("/user",UserRoutes);

//App Listening on Port
app.listen(3000, ()=>{
    console.log("Server Started");
})