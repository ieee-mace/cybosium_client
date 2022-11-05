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
            <div className={styles.Message}>
                <p className={`
                        ${styles.Message__text}
                        ${message.type == "error" ? styles.Message__error : ""}
                        ${message.type == "success" ? styles.Message__success : ""}
                    `}>{message.text}</p>
                <button className={styles.Message__close} onClick={closeMessage}>X</button>
            </div>
        </>
    );
}
export default Message;