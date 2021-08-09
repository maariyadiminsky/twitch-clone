// general
export const LOADING = "Loading...";

// auth
export const EMAIL = "email";
export const SIGN_IN = "Sign In";
export const SIGN_OUT = "Sign Out";

// paths
export const STREAMS_LIST_PATH = "/";
export const CREATE_NEW_STREAM_PATH = "streams/new";
export const EDIT_STREAM_PATH = (id) => `/streams/edit/${id}`;
export const DELETE_STREAM_PATH = (id) => `/streams/delete/${id}`;

// response status codes
export const RESPONSE_STATUS_CREATED = 201;
export const RESPONSE_STATUS_SUCCESS = 200;

// .env
export const PRODUCTION = "production";
export const DEVELOPMENT = "development";