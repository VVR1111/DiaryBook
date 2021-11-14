import React,{useState} from 'react';
import { TextField,Button,Paper,Typography } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {createInfo} from '../../actions/posts';
const Form = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const user=JSON.parse(localStorage.getItem('profile'));
    const intitalState={title:'',body:'',tags:''}
    const [postData,setPostData]=useState(intitalState);
    const handleSubmit= (e)=>{
           e.preventDefault();
           dispatch(createInfo(postData));
           Clear();
    }
    const Clear =()=>{
            setPostData(intitalState);
    }

    if(!user?.result?.name)
    {
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center" color="secondary">
                 Please signIn to Write "DIARY" !!!
                </Typography>
            </Paper>
        )
    }
    return (
        <Paper className={classes.paper}>
          <form className={`${classes.root} ${classes.form} `} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Typography variant="h6">Write Today's Activity</Typography>
              <TextField
               name="title" 
               fullWidth
               variant="outlined"
               label="Title"
               value={postData.title}
               onChange={(e)=>setPostData({...postData,title:e.target.value})}
              />
              <TextField
               name="body" 
               fullWidth
               variant="outlined"
               label="Body"
               value={postData.body}
               onChange={(e)=>setPostData({...postData,body:e.target.value})}
              />
              <TextField
               name="tags" 
               fullWidth
               variant="outlined"
               label="Tags"
               value={postData.tags}
               onChange={(e)=>setPostData({...postData,tags:e.target.value.split(",")})}
              />
              <Button color="primary" type="submit" variant="contained" className={classes.buttonSubmit} size="large" fullWidth>Submit</Button>
              <Button color="secondary"  variant="contained" onClick={Clear} size="small" fullWidth>Clear</Button>
         </form>
        </Paper>
    )
}

export default Form;