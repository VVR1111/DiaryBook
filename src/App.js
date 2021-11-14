import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/Diary/Post/PostDetails';

const App = () => {
    
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Switch>
                <Route path='/' exact >
                    <Home />
                </Route>
                <Route path='/auth' exact component={Auth}/>
                <Route path='/diary/:id' exact>
                    <PostDetails />
                </Route>
            </Switch>
        </Container>
    </BrowserRouter>
    )
}

export default App;