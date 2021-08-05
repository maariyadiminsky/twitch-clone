import React, { Component } from "react";
import { EMAIL } from "../const";

class GoogleAuth extends Component {
    componentDidMount() {
        console.log(EMAIL);
        // loads up google api OAuth client library (I only need email for this app)
        window.gapi.load("client:auth2", () => {
            // return a promise so can pass in callback or .then when complete
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
                scope: EMAIL
            }).then(() => {
                // api is ready to be used so get auth instance
                this.auth = window.gapi.auth2.getAuthInstance();
            });
        });
    }


    render() {
        return (
            <div>Google Auth</div>
        );
    }
}

export default GoogleAuth;