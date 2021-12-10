import { FETCH_ALL, DELETE, CREATE, UPDATE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators: Functions that return actions
export const getPosts = () => async (dispatch) => {
    try {
        // Get response from the api
        const { data } = await api.fetchPosts();
        // Action must have a type and a payload
        // And dispatch it
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
api.fetchPosts()

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);

    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
        const { data } = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error.message)


    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({type: UPDATE, payload: data});

    } catch (error) {
        console.log(error)

    }
}