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

    try{
        // Save in the db
        await newPost.save();
        // Successful creation
        res.status(201).json(newPost);
    } catch (error){
        res.status(409).json({message: error.message});

    }
    res.send('Post Creation');
}