import { SIGN_USER_IN, SIGN_USER_OUT } from "../const/actions";

const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === SIGN_USER_IN) {
        
    } else if (action.type === SIGN_USER_OUT) {
        
    };

    return state.isSignedIn;
}