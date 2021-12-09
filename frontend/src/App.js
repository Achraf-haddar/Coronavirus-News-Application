import React, { useState, useEffect } from "react";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useDispatch } from "react-redux";

import {getPosts} from './actions/posts';
// Import materials components
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

import Post1 from './images/Post1.PNG'
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    // Dispatch an action
    useEffect(() => {
        // getPosts is the action
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Posts</Typography>
                <img className={classes.image} src={Post1} alt="Posts1" height="160"/>
            </AppBar>
            {/*<Grow in="true">  Provide Simple Animation */}
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>

                    </Grid>
                </Container>
            {/*</Grow>*/}

        </Container>
    );
} 
export default App;