import React, { useEffect } from "react";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useDispatch } from "react-redux";

import {getPosts} from './actions/posts';
// Import materials components
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

import Post1 from './images/Post1.PNG'
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
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
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            {/*</Grow>*/}

        </Container>
    );
} 
export default App;