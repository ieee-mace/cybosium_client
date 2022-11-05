import React from 'react'
import Navbar from './Navbar/Navbar'
import styles from "./Home.module.scss"

const Home = () => {
    return (
        <div className={styles.Home}>
            <Navbar />
        </div>
    )
}

export default Home
