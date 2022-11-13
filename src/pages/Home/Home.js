import React from 'react'
import styles from "./Home.module.scss"
import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
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

            </div>
        </div>
    )
}

export default Home
