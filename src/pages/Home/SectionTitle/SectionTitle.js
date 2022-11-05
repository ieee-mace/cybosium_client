import styles from "./SectionTitle.module.scss"

const SectionTitle = ({ text, description }) => {
    return (
        <div className={styles.SectionTitle}>
            <h1 className={styles.SectionTitle__text}>{text}</h1>
            <p className={styles.SectionTitle__description}>{description}</p>
        </div>
    )
}

export default SectionTitle