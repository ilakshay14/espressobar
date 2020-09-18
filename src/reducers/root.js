import { ADD_MENU, UPDATE_CART, UPDATE_USER, USER_LOGIN } from "../constants/action.constants";

const initialState = {
    menu: [],
    user: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MENU:
            return Object.assign({}, state, {
                menu: [...action.payload]
            })
            break;

        case USER_LOGIN:
            return Object.assign({}, state, {
                user: {...action.payload}
            })
            break;

        case UPDATE_CART:
            return Object.assign({}, state, {
                ...state,
                user: {
                    ...state.user,
                    cart: action.payload
                }
            })
            break;

        case UPDATE_USER:
            state.user = {
                ...action.payload
            }
            break;
    
        default:
            break;  
    }

    return state;
}

export default rootReducer;