import SectionTitle from "../SectionTitle/SectionTitle"
import styles from "./Tracks.module.scss"
import UfoIcon from "../../../assets/images/icons/ufo.png"
import InfraIcon from "../../../assets/images/icons/infra.png"
import BoltIcon from "../../../assets/images/icons/bolt.png"

const Tracks = () => {
    return (
        <div className={styles.Tracks}>
            <SectionTitle text="Event Tracks" description="" />
            <div className={styles.Tracks__cards}>
                <div className={styles.Card}>
                    <div className={styles.Card__img}>
                        <img src={UfoIcon} />
                    </div>
                    <div className={styles.Card__content}>
                        <h1 className={styles.Card__name}>Aerial Robotics andUnmanned Aerial Vehicles</h1>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.Card__img}>
                        <img src={InfraIcon} />
                    </div>
                    <div className={styles.Card__content}>
                        <h1 className={styles.Card__name}>Autonomous Ground Vehicles and Intelligent Transportation Systems</h1>
                    </div>
                </div>

                <div className={styles.Card}>
                    <div className={styles.Card__img}>
                        <img src={BoltIcon} />
                    </div>
                    <div className={styles.Card__content}>
                        <h1 className={styles.Card__name}>Energy, Environment, and Safety Issues in Robotics and Automation</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks