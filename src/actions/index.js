import streamsAPI from "../apis/streamsAPI";
import { STREAMS_ENDPOINT } from "../apis/const";

import { SIGN_USER_IN, SIGN_USER_OUT } from "./types";

// api
export const createStream = (formValues) => (
    async(dispatch) => {
        streamsAPI.post(STREAMS_ENDPOINT, formValues)
    }
);

// auth
export const signUserIn = (userId) => {
    return {
        type: SIGN_USER_IN,
        payload: userId
    }
};

export const signUserOut = () => {
    return {
        type: SIGN_USER_OUT
    }
};
