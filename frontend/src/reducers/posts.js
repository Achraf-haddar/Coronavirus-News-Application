// A reducer is a function that accepts the state and the action
// And based on the action type return an action or a state
export default (posts = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts
        
        default:
            return posts;
    }
}