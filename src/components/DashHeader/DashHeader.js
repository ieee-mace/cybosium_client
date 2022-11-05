import styles from "./DashHeader.module.scss";

const DashHeader = ({ user = {}, title, subtitle }) => (
    <div className={styles.DashHeader}>
        <div className={styles.DashHeader__container}>
            <h2 className={styles.DashHeader__welcome}>Hi, {user.firstname}</h2>
            <h1 className={styles.DashHeader__title}>{title}</h1>
            <p className={styles.DashHeader__subtitle}>{subtitle}</p>
        </div>
    </div>
)

export default DashHeader