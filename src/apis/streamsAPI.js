import axios from "axios";

import { FindBaseURL } from "../utils";

export default axios.create({
    baseURL: FindBaseURL()
});