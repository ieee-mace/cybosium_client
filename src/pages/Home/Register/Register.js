import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Register.module.scss";
import CybosiumImage from "../../../assets/images/cybosium.png"
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate()

    return (
        <div className={styles.Register}>
            <div className={styles.Register__content}>
                <img src={CybosiumImage} />
                <h2 className={styles.Register__description}>ONE BOT AT A TIME</h2>
                <Button filled text="Buy Tickets Now" onclick={() => navigate("/opening-soon")} />
            </div>
        </div>
    )
}

Register.propTypes = {}

export default Register