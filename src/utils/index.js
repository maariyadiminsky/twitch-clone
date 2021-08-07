import { DEVELOPMENT, PRODUCTION } from "../const";

export const FindBaseURL = () => {
    if (process.env.NODE_ENV === PRODUCTION) {
        return process.env.REACT_APP_PROD_API_URL;
    } else if (process.env.NODE_ENV === DEVELOPMENT) {
        return process.env.REACT_APP_DEV_API_URL;
    } 
    
    return "";
}