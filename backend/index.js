import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

// Initialize the app
const app = express();
dotenv.config();

// maximum input size for the images
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Adding routes
app.use('/posts', postRoutes);    // use /posts as parent path for all routes

app.get('/', (req, res) => {
    res.send('Hello to Corona News API');
})

// Connect mongodb (Atlas)
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))) //if connection is successful
    .catch((error) => console.log(error.message)); //if connection is unsuccessful ==> log the error on console

