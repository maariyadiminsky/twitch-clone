import { SIGN_USER_IN, SIGN_USER_OUT } from "../const/actions";

const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_USER_IN:
            return { ...state, isSignedIn: true };
        case SIGN_USER_OUT:
            return { ...state, isSignedIn: false };
        default:
            return state;
    }
}