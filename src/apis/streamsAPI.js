import axios from "axios";

import { DEVELOPMENT, PRODUCTION } from "../const";

const FindAPIUrl = () => {
    if (process.NODE_ENV === PRODUCTION) {
        return process.ENV.REACT_APP_DEV_API_URL;
    } else if (process.NODE_ENV === DEVELOPMENT) {
        return process.ENV.REACT_APP_PROD_API_URL;
    } 

    return "";
}

export default axios.create({
    baseURL: FindAPIUrl()
});