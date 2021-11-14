import React  from 'react';
import {Paper,Typography} from '@material-ui/core';
import { useSelector} from 'react-redux';
import useStyles from './DetailsStyles';

const PostDetails = ()=>{
   
    const post =useSelector((state)=> state.post);   
    const classes=useStyles();
    return(

        <>
        <Paper className={classes.paper} align="center">
            <h1>TITLE</h1><Typography variant="h2"  className={classes.title}>{post.title}</Typography>
            <br/>
            <h3>DATE</h3>
            <Typography variant="h6" color="secondary">{post.createdAt}</Typography>
            <br/>
            <h2>DIARYNOTE</h2>
            <Typography variant="h4" color="primary" >{post.body}</Typography>
            
        </Paper>
        
        </>
    )
}

export default PostDetails;