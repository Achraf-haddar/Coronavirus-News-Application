import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize the app
const app = express();
// maximum input size for the images
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Connect mongodb (Atlas)
const CONNECTION_URL = 'mongodb+srv://Achraf123:Achraf123@cluster0.lwc1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(()=>{console.log(`Server running on Port: ${PORT}`)})
    .catch((error) => console.log(error.message));
