import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Counter.module.scss";

const Counter = (props) => {
    return (
        <div className={styles.Counter}>
            <div className={styles.Counter__item}>
                <p className={styles.Counter__text}>Number of speakers</p>
                <h1 className={styles.Counter__number}>10+</h1>
            </div>
            <div className={styles.Counter__item}>
                <p className={styles.Counter__text}>Number of events</p>
                <h1 className={styles.Counter__number}>20+</h1>
            </div>
            <div className={styles.Counter__item}>
                <p className={styles.Counter__text}>Number of participants</p>
                <h1 className={styles.Counter__number}>500+</h1>
            </div>
        </div>
    )
}

Counter.propTypes = {}

export default Counter