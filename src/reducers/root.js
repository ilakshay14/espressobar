import { ADD_MENU } from "../constants/action.constants";
import { USER_LOGIN } from "../constants/action.constants";

const initialState = {
    menu: [],
    user: {}
}

const rootReducer = (state = initialState, action) => {
    if(action.type ===  ADD_MENU){
        return Object.assign({}, state, {
            //menu: state.menu.concat(action.payload)
            menu: [...action.payload]
        })
    }

    if(action.type ===  USER_LOGIN){
        return Object.assign({}, state, {
            //menu: state.menu.concat(action.payload)
            user: {...action.payload}
        })
    }
    
    return state;
}

export default rootReducer;