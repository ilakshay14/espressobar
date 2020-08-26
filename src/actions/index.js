import { ADD_MENU } from '../constants/action.constants';
import { USER_LOGIN } from '../constants/action.constants';

export const addMenu = (payload) => {
    return { type: ADD_MENU, payload };
};

export const userLogin = (payload) => {
    return { type: USER_LOGIN, payload };
};