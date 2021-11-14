import React from 'react';
import { Card, CardContent ,Typography,CardMedia, Button} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import { getOne } from '../../../actions/posts';
// import { useParams } from 'react-router';
import { useDispatch} from 'react-redux';
const Post = ({post}) => {
    const classes=useStyles();
    const dispatch=useDispatch();
   
    const user=JSON.parse(localStorage.getItem('profile'));
    const handleSubmit = ()=>{
        
            dispatch(getOne(post._id));
         
    }
 

    return ( 
        // <Link to={`/diary/${post._id}`}>
        <Card className={classes.card}>
             <CardMedia className={classes.media} image={user?.result?.imageUrl} title={post.title}/>
             <div className={classes.overlay}>
                  <Typography variant='h6'>{user?.result?.name}</Typography>
                  <Typography variant='body2'>{post.createdAt}</Typography>
             </div>
             <div className={classes.details}>
                 <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=> `#${tag} `)}</Typography>
             </div>
             <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>

             <CardContent >
                <Typography variant='body2' color='textPrimary' component='p'>{post.body.substring(0,10)}...</Typography>
                <br/>
                <Button variant="contained" color="primary" onClick={handleSubmit} component={Link} to={`/diary/${post._id}`}>VIEW</Button>    
             </CardContent>

        </Card>
        // </Link>
    );
}
 
export default Post;