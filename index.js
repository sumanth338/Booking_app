import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()
const app = express();


const connect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    }
    catch(error){
        throw error
    }
}

app.listen(3000, ()=>{
    connect()
    console.log("Server is running on port 3000")
})