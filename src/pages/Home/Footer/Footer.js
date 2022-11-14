import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Footer.module.scss";
import CybosiumLogo from "../../../assets/images/cybosium-logo.png"
import FacebookLogo from "../../../assets/images/icons/facebook.png"
import LinkedinLogo from "../../../assets/images/icons/linkedin.png"
import InstagramLogo from "../../../assets/images/icons/instagram.png"

const Footer = (props) => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__logoContainer}>
                <img src={CybosiumLogo} />
            </div>
            <div className={styles.Footer__icons}>
                <img src={FacebookLogo} />
                <img src={LinkedinLogo} />
                <img src={InstagramLogo} />
            </div>

            <p className={styles.Footer__text}>
                <span>© All rights reserved - Cybosium - 2022</span>
                <span><strong>CYBOSIUM IEEE MACE - Mar Athanasius College of Engineering</strong></span>
                <span>94004-36827 / roshanrjv.27@gmail.com</span>
            </p>
        </div>
    )
}

Footer.propTypes = {}

export default Footer