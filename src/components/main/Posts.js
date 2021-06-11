import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './post/Post.js';
import useStyles from './style.js';
function Posts() {
    const classes = useStyles();
    return (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    
                    <Grid  item xs={12} sm={6}>
                         <Post  />
                    </Grid>
                    
            </Grid>
    );
}

export default Posts;