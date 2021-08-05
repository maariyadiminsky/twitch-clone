import React, { Component } from "react";

class GoogleAuth extends Component {
    componentDidMount() {
        // loads up google api OAuth client library
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID
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