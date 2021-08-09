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

        console.log("here", stream);
    }

    render() {
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