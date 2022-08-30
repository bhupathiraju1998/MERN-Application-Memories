//reducer is  a function it accepts state and action based on action type
//it does some logic or return state

export default (posts = [],action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}