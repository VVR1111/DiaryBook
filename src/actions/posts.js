import * as api from '../api/index';
import { FETCH_ALL,FETCH_ONE,CREATE } from '../constants/actionTypes';
export const getInfo= ()=> async(dispatch) => {
    try {
        const {data}=await api.getInfo();
        // console.log(data);
        dispatch({type:FETCH_ALL,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const getOne=(id)=> async(dispatch) =>{
    try {
        const {data}=await api.getOne(id);
        //  console.log(data);
        dispatch({type:FETCH_ONE,payload:data});
    } catch (error) {
        console.log("hi"+error.message);
    }
}
export const createInfo = (newpost) =>async(dispatch) =>{
    try {
        const {data}= await api.createInfo(newpost);
        dispatch({type:CREATE,payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

