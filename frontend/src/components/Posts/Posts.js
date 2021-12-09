import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import Post from "./Post/Post";
import useStyles from './styles';
import { useSelector } from "react-redux";

const Posts = () => {
    // Fetch data from the store
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts)
    return (
        // Add Circular spinner
        !posts.length ? <CircularProgress /> : (
            <Grid>
                
            </Grid>
        )
    );
}
export default Posts;