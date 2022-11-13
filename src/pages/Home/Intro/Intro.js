import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Intro.module.scss";

const Intro = (props) => {
    return (
        <div className={styles.Intro}>
            <h1 className={styles.Intro__title}>Be part of India&apos;s largest student-led robotics symposium.</h1>
            <p className={styles.Intro__description}>An immersive environment in one of the most beautiful cities in Brazil. Dozens of hours of content with industry experts. Hundreds of networking opportunities.</p>
        </div>
    )
}

Intro.propTypes = {}

export default Intro