import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer__text}>
                <p>Copyright &copy; 2022 CYBOSIUM. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer