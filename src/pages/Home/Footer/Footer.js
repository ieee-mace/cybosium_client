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
                <a href="https://google.com" target="_blank"><img src={FacebookLogo} /></a>
                <a href="https://google.com" target="_blank"><img src={LinkedinLogo} /></a>
                <a href="https://google.com" target="_blank"><img src={InstagramLogo} /></a>
            </div>

            <p className={styles.Footer__text}>
                <span>© All rights reserved - Cybosium - 2022</span>
                <span><strong>CYBOSIUM IEEE MACE - Mar Athanasius College of Engineering</strong></span>
                <span><a href='tel:+919526593349'>9526-593349</a> / <a href='mailto:devadarsan@ieee.org'>devadarsan@ieee.org</a></span>
            </p>
        </div>
    )
}

Footer.propTypes = {}

export default Footer