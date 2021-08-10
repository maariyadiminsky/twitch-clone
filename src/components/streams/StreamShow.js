import React, { Component } from "react";
import flv from "flv.js";
import { connect } from "react-redux";

import { getStream } from "../../actions/streams";

class StreamShow extends Component {
    componentDidMount() {
        const { stream, id, getStream } = this.props;

        if (!stream) getStream(id);
    }

    render() {
        const { stream } = this.props;

        if (!stream) {
            return <div>Loading...</div>
        }
        
        return (
            <div>
             <h1>{stream.title}</h1>
             <h5>{stream.description}</h5>
            </div>
        );
    }
}

const mapStateToProps = ({ streams }, ownProps) => ({ 
    stream: streams[ownProps.match.params.id],
    id: ownProps.match.params.id
});

export default connect(mapStateToProps, { getStream })(StreamShow);