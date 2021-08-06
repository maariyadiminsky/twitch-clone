import React, { Component } from "react";
import { connect } from "react-redux";
import { signUserIn, signUserOut } from "../actions";
import { LOADING, EMAIL, SIGN_IN, SIGN_OUT } from "../const";

// NOTE: Google API's authentication status persists between page reloads
class GoogleAuth extends Component {
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
                this.handleShouldUserSignIn(this.auth.isSignedIn.get());

                // event listener that listens if user has signed in
                // callback passed in will get the boolean value
                this.auth.isSignedIn.listen(this.handleOnUserAuthChange);
            });
        });
    }

    // for setting
    handleShouldUserSignIn = (shouldUserSignIn = null) => {
        const { signUserIn, signUserOut } = this.props;

        // nothing should happen while google api is still loading sign in status
        if (shouldUserSignIn === null) return;

        // sign user in or out
        shouldUserSignIn ? signUserIn() : signUserOut();
    }

    // for when user clicks sign in/ sign out auth button
    handleUpdateUserAuth = () => {
        const { isSignedIn } = this.props;

        // nothing should happen while google api is still loading sign in status
        if (isSignedIn === null) return;

        // if signed in, then when user clicks they want to sign out 
        // if signed out, then when user clicks they want to sign in
        isSignedIn ? this.handleShouldUserSignIn(false) : this.handleShouldUserSignIn(true);
    }

    renderButtonForAuthUser() {
        const { isSignedIn } = this.props;

        // null means, on initial load
        if (isSignedIn == null) return LOADING;
        return isSignedIn ? SIGN_OUT : SIGN_IN;
    }

    render() {
        return (
            <button className="ui red google button" onClick={this.handleUpdateUserAuth}>
                <i className="google icon" />
                {this.renderButtonForAuthUser()}
            </button>
        );
    }
}

const mapStateToProps = ({ auth: { isSignedIn } }) => ({
    isSignedIn
});

export default connect(mapStateToProps, { signUserIn, signUserOut })(GoogleAuth);