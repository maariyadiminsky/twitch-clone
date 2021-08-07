import React, { Component } from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions/streams"

class StreamList extends Component {
    componentDidMount() {
        const { getStreams } = this.props;

        getStreams();
    }

    renderStreams() {
        const { streams } = this.props;

        return streams.map(({ id, title, description }) => (
            <div className="item" key={id}>
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
            </div>
        );
    }
}

// turn objects into array for easier mapping
const mapStateToProps = ({ streams }) => ({
    streams: Object.values(streams)
})

export default connect(mapStateToProps, { getStreams })(StreamList);