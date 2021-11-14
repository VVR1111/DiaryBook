import React ,{useEffect} from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import {getInfo} from '../../actions/posts';
import {useDispatch} from 'react-redux';
import { Paper, Typography ,Grid,CircularProgress} from '@material-ui/core';
const Posts = () => {

    const classes=useStyles();
    const posts =useSelector((state)=> state.posts);
    
    const user=JSON.parse(localStorage.getItem('profile'));
    const dispatch=useDispatch();
    // const user=JSON.parse(localStorage.getItem('profile'));
    useEffect(()=>{ 
            
         dispatch(getInfo());         
    },[dispatch])
    if(!user?.result?.name)
    {   return(
        <Paper className={classes.paper}>
            <Typography  variant="h6" align="center" >
                SIGN IN TO VIEW THE DIARY
            </Typography>
        </Paper>
    );
    }
    
    // console.log(posts.length);
    return (
        !posts.length? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {   posts.map((post)=>(
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts;