import axios from 'axios';

const API= axios.create({baseURL:"https://diarybook.herokuapp.com"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile'))
    {
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})
export const getInfo=()=> API.get('/diary');
export const getOne=(id)=>API.get(`/diary/${id}`);
export const createInfo=(newpost) => API.post('/diary',newpost);