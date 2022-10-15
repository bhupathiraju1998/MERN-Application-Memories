// import express from "express";
// import { getPosts,createPost } from "../controllers/posts.js";
// const router = express.Router() //setting up router

// //start adding route
// router.get('/', getPosts);
// router.post('/', createPost);


// export default router
import express from 'express';
    import {getPosts,createPost,updatePost} from '../controllers/post.js';
    
    const router = express.Router();
    
    router.get('/',getPosts);
    router.post('/',createPost);
    router.patch('/:id',updatePost);
    
    
    export default router;

