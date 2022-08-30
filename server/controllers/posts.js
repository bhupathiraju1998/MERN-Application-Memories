//here we create all the handlers for the routes bcoz writing route code in curd(post.js) looks heavy
import PostMessage from "../models/postMessage.js";

export const getPosts = async(req,res)=>{
    try {
        const postMessages = await PostMessage.find();//retrivee all post in DB find somting in model it is async so we async await
        console.log(postMessages);
        //we need to return something from this function
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
} 

export const createPost = async(req,res) => {
    //as this is posst request we will have body
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        //if successfuk we send res 201
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}