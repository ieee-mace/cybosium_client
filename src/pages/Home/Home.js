import React from 'react'
import Navbar from './Navbar/Navbar'
import styles from "./Home.module.scss"
import Hero from './Hero/Hero'
import About from './About/About'
import Tracks from './Tracks/Tracks'
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Home__header}>
                <div className={styles.Home__navbar}>
                    <Navbar />
                </div>
                <div className={styles.Home__hero}>
                    <Hero />
                </div>
            </div>
            <div className={styles.Home__about}>
                <About />
            </div>

            <div className={styles.Home__tracks}>
                <Tracks />
            </div>

            <div className={styles.Home__footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Home
