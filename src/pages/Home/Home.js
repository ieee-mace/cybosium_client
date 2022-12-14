import React, { useEffect } from 'react'
import styles from "./Home.module.scss"
import Navbar from "../Navbar/Navbar"
import Hero from "./Hero/Hero"
import Intro from "./Intro/Intro"
import Counter from "./Counter/Counter"
import Tracks from "./Tracks/Tracks"
import Queries from "./Queries/Queries"
import Register from "./Register/Register"
import Footer from "./Footer/Footer"
import About from "./About/About"
import OneBotImage from "../../assets/images/one-bot.png"
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>Home | Cybosium</title>
            </Helmet>
            <div className={styles.Home}>
                <div className={styles.containerLines}>
                    <div className={styles.containerLinesItem}></div>
                    <div className={styles.containerLinesItem}></div>
                    <div className={styles.containerLinesItem}></div>
                    <div className={styles.containerLinesItem}></div>
                    <div className={styles.containerLinesItem}></div>
                    <div className={styles.containerLinesItem}></div>
                    <div className={styles.containerLinesItem}></div>
                </div>

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

                    <div className={styles.Home__Intro} data-aos="fade-up">
                        <Intro />
                    </div>

                    <div className={styles.Home__Counter} data-aos="fade-up">
                        <Counter />
                    </div>

                    <div className={styles.Home__About}>
                        <About />
                    </div>

                    <div className={styles.Home__Tracks}>
                        <Tracks />
                    </div>

                    <div className={styles.Home__Queries}>
                        <Queries />
                    </div>

                    <div className={styles.Home__Register}>
                        <Register />
                    </div>

                    <div className={styles.Home__Footer}>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
