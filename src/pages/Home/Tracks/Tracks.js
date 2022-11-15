import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Tracks.module.scss";
import Button from "../Button/Button"
import { useNavigate } from 'react-router-dom';

const Tracks = (props) => {
    const navigate = useNavigate()

    return (
        <div className={styles.Tracks}>
            <h1 className={styles.Tracks__title}>TRACKS</h1>
            <div className={styles.Tracks__cards}>
                <div className={styles.Tracks__card}>
                    <p>Aerial Robotics andUnmanned Aerial Vehicles</p>
                </div>
                <div className={styles.Tracks__card}>
                    <p>Autonomous Ground Vehicles and Intelligent Transportation Systems</p>
                </div>
                <div className={styles.Tracks__card}>
                    <p>Energy, Environment, and Safety Issues in Robotics and Automation</p>
                </div>
            </div>
            <div className={styles.Tracks__buttonWrapper}>
                <Button filled={true} text="Register Now" onclick={() => navigate("/opening-soon")} />
            </div>
        </div>
    )
}

Tracks.propTypes = {}

export default Tracks