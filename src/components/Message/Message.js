import { createRef, useEffect } from "react";

const MESSAGE_TYPES = {
    ERROR: "error",
    SUCCESS: "success",
}

const Message = ({ message, closeMessage }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            closeMessage()
        }, 5000)
        return () => clearTimeout(timeout)
    }, [message])

    return (
        <>
            <div className={`toast show align-items-center border-0 ${message.type == "error" ? "text-bg-danger" : ""} ${message.type == MESSAGE_TYPES.SUCCESS && "text-bg-success"}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">
                        {message.text}
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => closeMessage()}></button>
                </div>
            </div>
        </>
    );
}
export default Message;