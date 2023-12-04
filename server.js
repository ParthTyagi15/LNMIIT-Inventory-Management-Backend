const express=require("express");
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const cors = require('cors');

const authRoutes=require("./routes/auth.js"); 
const userRoutes=require("./routes/Users.js");
const adminRoutes=require("./routes/Admin.js");

dotenv.config();
const app=express();

const db_key = process.env.MONGO_URI;

//MongoDb Connection
mongoose.connect(db_key,(err)=>{
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

const port = 8080;
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}/`);
})