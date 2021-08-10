import React, { Component } from "react";
import flv from "flv.js";
import { connect } from "react-redux";

import { getStream } from "../../actions/streams";

const videoStyles = {
    width: "100%"
}
class StreamShow extends Component {
    constructor(props) {
        super(props);
        
        this.videoRef = React.createRef();
    }

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
                <video 
                    style={videoStyles} 
                    ref={this.videoRef} 
                    controls
                />
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