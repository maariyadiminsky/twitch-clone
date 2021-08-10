import React, { Component } from "react";
import flv from "flv.js";
import { connect } from "react-redux";

import { getStream } from "../../actions/streams";
import { FLV_STREAM_URL, VIDEO_TYPE_FLV } from "../../const";

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

        if (!stream) {
            getStream(id)
            .then(() => this.setupFLVPlayer(id))
            .error((error) => console.log(error));
        } else {
            this.setupFLVPlayer(id);
        }
    }

    // Setup stream url--stream key should be the stream id for this to work.
    // Setup via your OBS application here:
    // https://github.com/illuspas/Node-Media-Server#from-obs
    setupFLVPlayer(streamId) {
        // create flv player
        this.videoPlayer = flv.createPlayer({
            type: VIDEO_TYPE_FLV,
            url: FLV_STREAM_URL(streamId)
        });

        // attach video ref
        this.videoPlayer.attachMediaElement(this.videoRef.current);

        // load it
        this.videoPlayer.load();
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