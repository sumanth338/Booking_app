import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

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

//middlewares
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)

app.listen(3000, ()=>{
    connect()
    console.log("Server is running on port 3000")
})