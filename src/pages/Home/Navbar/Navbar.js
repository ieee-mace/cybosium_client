import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/cybosium-logo.png"
import styles from "./Navbar.module.scss"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__logo}>
                <img src={Logo} />
            </div>
            <button className={styles.Navbar__hamburger} onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg></button>
            <ul className={`${styles.Navbar__nav} ${isOpen && styles.Navbar__nav__open}`}>
                <li className={styles.Navbar__navItem}><Link to="/">Home</Link></li>
                <li className={styles.Navbar__navItem}><Link to="/tickets">Dashboard</Link></li>
                <li className={`${styles.Navbar__navItem} ${styles.Navbar__navBtn}`}><Link>Login</Link></li>
            </ul>
        </div>
    )

}

export default Navbar