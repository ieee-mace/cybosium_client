import React from 'react'
import styles from "./Home.module.scss"
import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Intro from "./Intro/Intro"
import Counter from "./Counter/Counter"
import Tracks from "./Tracks/Tracks"
import OneBotImage from "../../assets/images/one-bot.png"

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Home__container}>
                <div className={styles.Home__HeroWrapper}>
                    <div className={styles.Home__Navbar}>
                        <Navbar />
                    </div>

                    <div className={styles.Home__Hero}>
                        <div className={styles.Home__HeroContent}>
                            <Hero />
                        </div>
                        {/* <img className={styles.Home__HeroBg} src={OneBotImage} alt="" /> */}
                    </div>

                </div>

                <div className={styles.Home__Intro}>
                    <Intro />
                </div>

                <div className={styles.Home__Counter}>
                    <Counter />
                </div>

                <div className={styles.Home__Tracks}>
                    <Tracks />
                </div>
            </div>
        </div>
    )
}

export default Home
