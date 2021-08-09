import React from "react";
import { createPortal } from "react-dom";

import { STREAMS_LIST_PATH } from "../const";

const Modal = ({ header, content, cancelButtonText, confirmButtonText, history, handleConfirm }) => {
    const handleCancel = () => {
        history.push(STREAMS_LIST_PATH);
    }

    return createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui tiny modal visible active">
                <div className="header">{header}</div>
                <div className="content">{content}</div>
                <div className="actions">
                    <button onClick={handleCancel} className="ui button">{cancelButtonText}</button>
                    <button onClick={handleConfirm} className="ui red button">{confirmButtonText}</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default Modal;