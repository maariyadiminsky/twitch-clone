import React, { Component } from "react";
import { EMAIL } from "../const";

// NOTE: Google API's authentication status persists between page reloads
class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount () {
        // loads up google api OAuth client library (I only need email for this app)
        window.gapi.load("client:auth2", () => {
            // return a promise so can pass in callback or .then when complete
            window.gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
                scope: EMAIL
            }).then(() => {
                // api is ready to be used so get auth instance
                this.auth = window.gapi.auth2.getAuthInstance();

                // check if user is signed in on initial load
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });

                // event listener that listens if user has signed in
                // callback passed in will get the boolean value
                this.auth.isSignedIn.listen(this.handleOnUserAuthChange);
            });
        });
    }

    handleOnUserAuthChange = (isUserSignedIn) => {
        this.setState({ isSignedIn: isUserSignedIn });
    }

    handleSetUserAuthChange = () => {
        const { isSignedIn } = this.state;

        // nothing should happen while google api is still loading sign in status
        if (isSignedIn == null) return;

        // if signed in, then when user clicks they want to sign out 
        // if signed out, then when user clicks they want to sign in
        isSignedIn ? this.auth.signOut() : this.auth.signIn();
    }

    renderButtonForAuthUser() {
        const { isSignedIn } = this.state;

        // null means, on initial load
        if (isSignedIn == null) return "Loading...";
        return isSignedIn ? "Sign Out" : "Sign In";
    }

    render() {
        return (
            <button className="ui red google button" onClick={this.handleSetUserAuthChange}>
                <i className="google icon" />
                {this.renderButtonForAuthUser()}
            </button>
        );
    }
}

export default GoogleAuth;