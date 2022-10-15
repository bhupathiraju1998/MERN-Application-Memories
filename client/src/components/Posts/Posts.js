import React from "react";
import { Grid,CircularProgress } from "@material-ui/core";
import {useSelector} from 'react-redux';//fetch data from global redux store

import Post from './Post/Post';
import useStyles from './styles'


const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts );//here state is a variable where will have access to whole redux state
    const classes = useStyles();//calling useStyles
    console.log(posts);
    return(
        // !posts.length? <CircularProgress/> : 
        (
            <Grid className={classes.container} conatiner alignItems="stretch" spacing={3}>
                
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                
            </Grid>
        )
    );
}

export default Posts;