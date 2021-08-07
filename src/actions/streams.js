import streamsAPI from "../apis/streamsAPI";
import { STREAMS_ENDPOINT } from "../apis/const";

import { 
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    GET_STREAMS,
    GET_STREAM
} from "./types";

export const createStream = (formValues) => (
    async(dispatch) => {
        const response = await streamsAPI.post(STREAMS_ENDPOINT, formValues);

        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        })
    }
);