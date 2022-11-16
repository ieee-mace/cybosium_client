import React from 'react'
import PropTypes from 'prop-types'
import styles from "./OpeningSoon.module.scss";
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet';

const OpeningSoon = (props) => {
    return (
        <>
            <Helmet>
                <title>Opening Soon | Cybosium</title>
            </Helmet>
            <div className={styles.OpeningSoon}>
                <div className={styles.OpeningSoon__navbar}>
                    <Navbar />
                </div>
                <div className={styles.OpeningSoon__content}>
                    <h1>Registrations Opening Soon!</h1>
                </div>
            </div>
        </>
    )
}

OpeningSoon.propTypes = {}

export default OpeningSoon