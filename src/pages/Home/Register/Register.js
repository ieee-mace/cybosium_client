import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Register.module.scss";
import CybosiumImage from "../../../assets/images/cybosium.png"
import Button from '../Button/Button';

const Register = (props) => {
    return (
        <div className={styles.Register}>
            <div className={styles.Register__content}>
                <img src={CybosiumImage} />
                <h2 className={styles.Register__description}>ONE BOT AT A TIME</h2>
                <Button filled text="Buy Tickets Now" />
            </div>
        </div>
    )
}

Register.propTypes = {}

export default Register