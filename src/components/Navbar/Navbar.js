import React ,{useState,useEffect}from 'react'
import {AppBar,Avatar,Button,Typography} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import {Link,useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useStyles from './styles';
const Navbar = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const history=useHistory();
    const location=useLocation();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(()=>{
      // const token=user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);
    const logout= ()=>{
      dispatch({type:"LOGOUT"});     
      setUser(null);
      history.push('/');
      window.location.reload(false);
    }
    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">DIARYBOOK</Typography>
            </div>
            <Toolbar className={ user?.result ? (classes.toolbar) : (classes.toolBar)}>
              {user?.result ? (
                  <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button  className={classes.logout} color="secondary" variant="contained" onClick={logout}>Logout</Button>
                  </div>
              ):(
                 <Button component={Link} to='/auth' variant="contained" color='primary'>
                   SIGN IN
                 </Button>
              )}
            </Toolbar>
         </AppBar>

    )
}

export default Navbar;
