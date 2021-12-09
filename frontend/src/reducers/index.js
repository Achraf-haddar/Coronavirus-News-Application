import { combineReducers } from "redux";

import posts from './posts';

export default combineReducers({
    posts: posts,  // We put all reducers that we have
});