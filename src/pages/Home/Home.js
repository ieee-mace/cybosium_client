import React from 'react'
import styles from "./Home.module.scss"
import Navbar from "./Navbar/Navbar"

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Navbar}>
                <Navbar />
            </div>
        </div>
    )
}

export default Home
