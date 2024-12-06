const mongoose = require('mongoose');

// Define the Event schema with embedded racers
const EventSchema = new mongoose.Schema({
  event_id: {
    type: String,
    required: true,
    unique: true,
  },
  season: {
    type: String,
    required: false, // Optional field
  },
  event_date: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  car_name:{
    type: String,
    required: true,
  },
  racers: [
    {
      racer_id: {
        type: String,
        required: true,
      },
      racer_name: {
        type: String,
        required: false, // Optional field
      },
      best_lap_time: {
        type: Number, // Storing time in seconds
        required: true,
      },
      total_time: {
        type: Number, // Storing time in seconds
        required: true,
      },
      laps_completed: {
        type: Number,
        required: true,
      },
    },
  ],
});

// Create and export the Event model
module.exports = mongoose.model('Event', EventSchema);
