import { FindBaseURL } from "../utils";

// general
export const LOADING = "Loading...";

// auth
export const EMAIL = "email";
export const SIGN_IN = "Sign In";
export const SIGN_OUT = "Sign Out";

// paths
export const CREATE_NEW_STREAM_PATH = () => `${FindBaseURL()}/streams/new`;

// .env
export const PRODUCTION = "production";
export const DEVELOPMENT = "development";