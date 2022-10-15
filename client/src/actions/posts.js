import * as api from '../api';//to use index js in api
//imports everything from the actions a s apiu

//action creators 

export const getPosts = () => async(dispatch) => {
    //actual fetching posts takes time so we use thunk so in that thunk additionakl 
    //information can be passed and start invoving async and await
    try {
        const {data} = await api.fetchPosts();

        dispatch({
            type:'FETCH_ALL',payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
    
    
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data}  = await api.createPost(post);

        dispatch({type:'CREATE',payload:data});
    } catch (error) {
        console.log(error);
    }
}