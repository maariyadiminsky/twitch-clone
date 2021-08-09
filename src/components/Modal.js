import React from "react";
import { createPortal } from "react-dom";

import { stopEventPropagationTry } from "../utils";
import { STREAMS_LIST_PATH } from "../const";

const Modal = ({ header, content, cancelButtonText, confirmButtonText, history, handleConfirm }) => {
    const handleCancel = (event) => {
        stopEventPropagationTry(event);

        history.push(STREAMS_LIST_PATH);
    }

    const handleConfirmButton = (event) => {
        stopEventPropagationTry(event);

        handleConfirm();
    }

    return createPortal(
        <div onClick={handleCancel} className="ui dimmer modals visible active">
            <div className="ui tiny modal visible active">
                <div className="header">{header}</div>
                <div className="content">{content}</div>
                <div className="actions">
                    <button onClick={handleCancel} className="ui button">{cancelButtonText}</button>
                    <button onClick={handleConfirmButton} className="ui red button">{confirmButtonText}</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export default Modal;