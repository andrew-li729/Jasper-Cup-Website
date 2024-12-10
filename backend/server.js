import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"
import Event from './models/event.model.js'


dotenv.config();

const app = express ();

app.use(express.json()); //lets us use json in the req.body


app.post('/api/events', async (req, res) => {
    const event = req.body; //user sends data through body

    const requiredFields = ["event_id", "event_date", "track", "car_name"];

    var errors = []

    for (const field of requiredFields) {
        if (!(field in event)) {
            errors.push(`Missing field: ${field}`);
        } else if (typeof event[field] === "string" && event[field].trim() === "") {
            errors.push(`Field '${field}' cannot be empty`);
        }
    }
    if(errors.length > 0){
        return res.status(400).json({ success: false, message: errors.join(", ") });
    }

    const newEvent = new Event(event)

    try{
        await newEvent.save();
        res.status(201).json({success:true, data: newEvent});
    } catch (error) {
        console.error("error in creating event:", error.message);
        res.status(500).json({success:false, message:"server error"})
    }
});

app.listen(5000, () =>{
    connectDB();
    console.log("Server started at http://localhost:5000");
});

console.log(process.env.MONGO_URI);