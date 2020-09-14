import { ADD_MENU, ADD_TO_CART, UPDATE_CART, UPDATE_USER } from "../constants/action.constants";
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

    if(action.type ===  UPDATE_CART){
        return Object.assign({}, state, {
            ...state,
            user: {
                ...state.user,
                cart: action.payload
            }
        })
        
    }

    if(action.type === UPDATE_USER){
        state.user = {
            ...action.payload
        }
    }
    
    return state;
}

export default rootReducer;