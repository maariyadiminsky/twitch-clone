import { SIGN_USER_IN, SIGN_USER_OUT } from "../actions/types";

const INITIAL_STATE = {
    isUserSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_USER_IN:
            return { ...state, isUserSignedIn: true };
        case SIGN_USER_OUT:
            return { ...state, isUserSignedIn: false };
        default:
            return state;
    }
}