import { SIGN_USER_IN, SIGN_USER_OUT } from "../const/actions";

export const signUserIn = () => {
    return {
        type: SIGN_USER_IN
    }
};

export const signUserOut = () => {
    return {
        type: SIGN_USER_OUT
    }
};