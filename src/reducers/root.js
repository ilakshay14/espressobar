import { ADD_MENU } from "../constants/action.constants";

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
    // console.log('root reducer', state, action);
    return state;
}

export default rootReducer;