// A reducer is a function that accepts the state and the action
// And based on the action type return an action or a state
import { DELETE, UPDATE, FETCH_ALL, CREATE, LIKE } from "../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type){
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            // Return changed array
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload]; // posts is the state
        default:
            return posts;
    }
}