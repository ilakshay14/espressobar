import { ADD_MENU } from '../constants/action.constants';


export const addMenu = (payload) => {
    return { type: ADD_MENU, payload };
};