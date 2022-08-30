//to utilize possibilites of mongoose
import mongoose from "mongoose";

//create a mongoose scheme ,a schema is a document so each post have these things
const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],//array of strings
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },// for setting additionsala information other than type of number we give the default value as 0 for number so code like an object for number
    createdAt:{
        type:Date,
        default:new Date()
    },
});

//we have schema now turn it into a model
const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;//we run command find create delete update