import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStreams } from "../../actions/streams";
import { CREATE_NEW_STREAM_PATH } from "../../const";

class StreamList extends Component {
    componentDidMount() {
        const { getStreams } = this.props;

        getStreams();
    }

    // if the incoming stream has the same userId as the
    // current logged in user--render the buttons
    renderActionButtonsTry(streamUserId){
        const { currentLoggedInUserId } = this.props;

        if (currentLoggedInUserId === streamUserId) {
            return (
                <div className="right floated content">
                    <button className="ui button">Edit</button>
                    <button className="ui button">Remove</button>
                </div>
            );
        }

        return "";
    }

    renderCreateStreamButtonTry() {
        const { isUserSignedIn } = this.props;

        console.log(isUserSignedIn);

        if (isUserSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link className="ui button inverted red" to={CREATE_NEW_STREAM_PATH}>Create Stream</Link>
                </div>
            );
        }

        return "";
    }

    renderStreams() {
        const { streams } = this.props;

        return streams.map(({ id, title, description, userId }) => (
            <div className="item" key={id}>
                {this.renderActionButtonsTry(userId)}
                <i className="large middle aligned icon tv" />
                <div className="content">
                    {title}
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderStreams()}
                </div>
                {this.renderCreateStreamButtonTry()}
            </div>
        );
    }
}

// turn objects into array for easier mapping
const mapStateToProps = ({ streams, auth: { userId, isUserSignedIn } }) => ({
    streams: Object.values(streams),
    currentLoggedInUserId: userId,
    isUserSignedIn
});

export default connect(mapStateToProps, { getStreams })(StreamList);