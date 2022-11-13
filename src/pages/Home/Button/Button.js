import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Button.module.scss";

const Button = ({ text, filled, onclick = () => { } }) => {
    return (
        <div className={`${styles.Button} ${filled ? styles.Button__filled : ""}`} onClick={onclick}>
            <span>{text}</span> <span><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg></span>
        </div >
    )
}

Button.propTypes = {}

export default Button