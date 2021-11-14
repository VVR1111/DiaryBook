import { combineReducers } from "redux";
import posts from './posts';
import auth from './Auth';
import post from './post';
export default combineReducers({posts,auth,post});