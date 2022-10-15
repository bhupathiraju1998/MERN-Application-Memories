import express from 'express';
import bodyParser from 'body-parser';//to make post request
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes)//connect expressmiddleware with our appliation with 
//every route in postRoutes start with /posts/anyname

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123123@cluster0.abnociu.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
//below function mongoose takes two parameters(comentes started from 13:40)
//the second argument used for not getting errors or warnings in console
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(PORT,() => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

//not to get any warnings