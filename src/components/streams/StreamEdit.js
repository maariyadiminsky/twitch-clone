import React, { Component } from "react";
import { getStreams, getStream } from "../../actions/streams";
import { connect } from "react-redux";

class StreamEdit extends Component {
    componentDidMount() {
        const { stream, getStream, match: { params: { id }} } = this.props;

        if (!stream) getStream(id);
    }

    renderStream() {
        const { stream } = this.props;
    }

    render() {
        const { stream } = this.props;

        if (!stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                StreamEdit
                {this.renderStream()}
            </div>
        );
    }
}

const mapStateToProps = ({ streams }, ownProps) => ({ 
    stream: streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { getStream })(StreamEdit);