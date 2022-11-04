import styles from "./DashHeader.module.scss";

const DashHeader = ({ title, subtitle }) => (
    <div className={styles.dashHeader}>
        <div className="py-5">
            <div className="container">
                <h1 className="display-2">{title}</h1>
                <p className="lead">{subtitle}</p>
            </div>
        </div>
    </div>
)

export default DashHeader