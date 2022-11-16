import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from "./Counter.module.scss";
import { CountUp } from 'countup.js'

const Counter = (props) => {
    useEffect(() => {
        const countUp1 = new CountUp('CounterVal1', 10, { enableScrollSpy: true, scrollSpyOnce: true });
        const countUp2 = new CountUp('CounterVal2', 20, { enableScrollSpy: true, scrollSpyOnce: true });
        const countUp3 = new CountUp('CounterVal3', 500, { enableScrollSpy: true, scrollSpyOnce: true });
    }, [])

    return (
        <div className={styles.Counter}>
            <div className={styles.Counter__item}>
                <p className={styles.Counter__text}>Number of speakers</p>
                <h1 className={styles.Counter__number}><span id="CounterVal1">10</span>+</h1>
            </div>
            <div className={styles.Counter__item}>
                <p className={styles.Counter__text}>Number of events</p>
                <h1 className={styles.Counter__number}><span id="CounterVal2">20</span>+</h1>
            </div>
            <div className={styles.Counter__item}>
                <p className={styles.Counter__text}>Number of participants</p>
                <h1 className={styles.Counter__number}><span id="CounterVal3">500</span>+</h1>
            </div>
        </div>
    )
}

Counter.propTypes = {}

export default Counter