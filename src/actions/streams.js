import streamsAPI from "../apis/streamsAPI";
import { STREAM_ENDPOINT, STREAMS_ENDPOINT } from "../apis/const";

import { 
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    GET_STREAM,
    GET_STREAMS,
} from "./types";

export const createStream = (formValues) => (
    async(dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streamsAPI.post(STREAMS_ENDPOINT, { ...formValues, userId });

        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        })
    }
);

export const deleteStream = (id) => (
    async(dispatch) => {
        await streamsAPI.post(STREAM_ENDPOINT(id));

        dispatch({
            type: DELETE_STREAM,
            payload: id
        })
    }
);

export const editStream = (id, formValues) => (
    async(dispatch) => {
        const response = await streamsAPI.post(STREAM_ENDPOINT(id), formValues);

        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        })
    }
);

export const getStream = (id) => (
    async(dispatch) => {
        const response = await streamsAPI.get(STREAM_ENDPOINT(id));

        dispatch({
            type: GET_STREAM,
            payload: response.data
        })
    }
);

export const getStreams = () => (
    async(dispatch) => {
        const response = await streamsAPI.get(STREAMS_ENDPOINT);

        dispatch({
            type: GET_STREAMS,
            payload: response.data
        })
    }
);