import { FETCH_ONE } from "../constants/actionTypes";
const Reducers= (posts=[],action) => {
    switch(action.type){       
        case FETCH_ONE:
            return action.payload;            
        default:
            return posts;
    }
};

export default Reducers;