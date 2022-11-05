import styles from "./DashHeader.module.scss";

const DashHeader = ({ title, subtitle }) => (
    <div className={styles.DashHeader}>
        <div className={styles.DashHeader__container}>
            <h2 className={styles.DashHeader__welcome}>Hi, Roshan</h2>
            <h1 className={styles.DashHeader__title}>{title}</h1>
            <p className={styles.DashHeader__subtitle}>{subtitle}</p>
        </div>
    </div>
)

export default DashHeader