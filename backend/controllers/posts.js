import { Mongoose } from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find(); // Async because it takes time to retrieve data from database
        console.log(postMessages);
        res.status(200).json(postMessages); // Everything is OK
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async(req, res) => {
    const post = req.body;  //retreive info from the filled form   
    // Create a new PostMessage object with the info retrieved
    const newPost = new PostMessage(post);
    //log the newPost
    console.log(newPost);
        
    try{
        // Save in the db
        await newPost.save();
        // Successful creation
        res.status(201).json(newPost);
    } catch (error){
        console.log("Hello world")
        res.status(409).json({message: error.message});
   
    }
   
}


export const updatePost = async (req, res) => {
    const { id: _id } = req.params;  // rename id to _id
    const post = req.body;
    
    // Check if _id is a mongoose id
    if (mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
}
