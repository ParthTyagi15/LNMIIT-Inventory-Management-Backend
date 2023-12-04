const express=require("express");
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const cors = require('cors');

const authRoutes=require("./routes/auth.js"); 
const userRoutes=require("./routes/Users.js");
const adminRoutes=require("./routes/Admin.js");

dotenv.config();
const app=express();

//MongoDb Connection
mongoose.connect("mongodb+srv://21ucs097:test@cluster0.yelia6t.mongodb.net/?retryWrites=true&w=majority",(err)=>{
    if(err) {throw err;}
    console.log('connected to mongodb')
})

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/admin",adminRoutes)



app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}/`);
})