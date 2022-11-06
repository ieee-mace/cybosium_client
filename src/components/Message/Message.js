import { createRef, useEffect } from "react";
import styles from "./Message.module.scss"

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
            <div className={`
                ${styles.Message}
                ${message.type == "error" ? styles.Message__error : ""}
                ${message.type == "success" ? styles.Message__success : ""}
            `}>
                <p className={styles.Message__text}>{message.text}</p>
                <button className={styles.Message__close} onClick={closeMessage}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg></button>
            </div>
        </>
    );
}
export default Message;