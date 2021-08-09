import React from "react";
import { createPortal } from "react-dom";

const Modal = () => {
    return createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Modal
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default Modal;