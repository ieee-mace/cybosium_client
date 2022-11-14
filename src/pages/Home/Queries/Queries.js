import Button from "../Button/Button"
import styles from "./Queries.module.scss"
import TextareaAutosize from "react-autosize-textarea"

const Queries = () => {
    return (
        <div className={styles.Queries}>
            <div className={styles.Queries__content}>
                <p className={styles.Queries__title}>Ask us any <span>Queries</span> you have!</p>
                <form action="">
                    <div className={styles.Queries__form}>
                        <div className={styles.Queries__formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className={styles.Queries__formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className={styles.Queries__formGroup}>
                            <label htmlFor="message">Message</label>
                            <TextareaAutosize placeholder="Message" />
                        </div>
                    </div>
                    <div className={styles.Queries__buttonWrapper}>
                        <Button filled={true} text="Send Query" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Queries