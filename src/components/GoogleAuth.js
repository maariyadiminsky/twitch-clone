import React, { Component } from "react";
import { EMAIL } from "../const";

class GoogleAuth extends Component {
    componentDidMount() {
        console.log(EMAIL);
        // loads up google api OAuth client library (I only need email for this app)
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
                scope: EMAIL
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