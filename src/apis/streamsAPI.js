import axios from "axios";

import { DEVELOPMENT, PRODUCTION } from "../const";

const FindAPIUrl = () => {
    if (process.env.NODE_ENV === PRODUCTION) {
        return process.env.REACT_APP_PROD_API_URL;
    } else if (process.env.NODE_ENV === DEVELOPMENT) {
        console.log("in dev");
        return process.env.REACT_APP_DEV_API_URL;
    } 
    
    return "";
}

export default axios.create({
    baseURL: FindAPIUrl()
});