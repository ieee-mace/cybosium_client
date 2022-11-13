import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Navbar.module.scss";
import Icon from "../../../assets/images/cybosium-logo.png"
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__controls}>
                <div className={styles.Navbar__image}>
                    <img src={Icon} alt="Logo" />
                </div>

                <button className={styles.Navbar__menu} onClick={() => setMenuOpen(!menuOpen)}>+</button>
            </div>

            <ul className={`${styles.Navbar__links} ${menuOpen ? styles.Navbar__links_active : ""}`}>
                <li className={styles.Navbar__link}><Link to="/">Home page</Link></li>
                <li className={styles.Navbar__link}><Link to="/">Buy tickets</Link></li>
                <li className={styles.Navbar__link}><Link to="/">Call for sponsors</Link></li>
                <li className={styles.Navbar__link}><Link to="/">Call for robots</Link></li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar