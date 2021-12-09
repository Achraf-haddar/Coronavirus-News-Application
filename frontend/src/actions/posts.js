import * as api from '../api';

// Action Creators: Functions that return actions
export const getPosts = () => async (dispatch) => {
    try {
        // Get response from the api
        const { data } = await api.fetchPosts();
        // Action must have a type and a payload
        // And dispatch it
        dispatch({ type: 'FETCH_ALL', payload: [] });
    } catch (error) {
        console.log(error.message);
    }
}
api.fetchPosts()

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);

    }
}

