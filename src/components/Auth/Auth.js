import React from 'react';
import {Paper,Button,Container} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import useStyles from './styles'
import Icon from './Icon';
const Auth = () => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const history=useHistory();
    
    
    const googleSuccess = async (res)=>{
        const result = res?.profileObj;
        const token = res?.tokenId;

              try {
                  dispatch({type:"AUTH" , data:{result,token}});
                  history.push('/');
              } catch (error) {
                  console.log(error);
              }
    }
    const googleFailure = (error)=>{
        console.log(error);
    }
    return (
       <Container component="main" maxWidth="xs">
             <Paper className={classes.paper}>
                
                    <GoogleLogin
                        clientId="135603238105-8n7785oknb5ehmuh00d11lqudbe3g3so.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} fullWidth color="primary" 
                            onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained" startIcon={<Icon/>}>
                            Google Sign In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
             </Paper>
       </Container>
    )
}

export default Auth;
