import React from "react";
import { createPortal } from "react-dom";

const Modal = () => {
    return createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui tiny modal visible active">
                <div className="header">Delete Stream</div>
                <div className="content">Are you sure you want to delete this stream?</div>
                <div className="actions">
                    <button className="ui button">Nevermind</button>
                    <button className="ui red button">Yes, I'm sure</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default Modal;