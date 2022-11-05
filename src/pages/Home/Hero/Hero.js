import styles from "./Hero.module.scss"

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.Hero__content}>
                <h1 className={styles.Hero__title}>CYBOSIUM</h1>
                <p className={styles.Hero__description}>ONE BOT AT A TIME</p>
            </div>
        </div>
    )
}

export default Hero