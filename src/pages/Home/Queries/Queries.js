import Button from "../Button/Button"
import styles from "./Queries.module.scss"
import TextareaAutosize from "react-autosize-textarea"
import { useState } from "react"

const Queries = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleClick = () => {
        window.location.assign('mailto:devadarsan@ieee.org?subject=Query from ' + name + ' (' + email + ') &body=' + message)
    }

    return (
        <div className={styles.Queries}>
            <div className={styles.Queries__content}>
                <p className={styles.Queries__title}>Ask us any <span>Queries</span> you have!</p>
                <form action="">
                    <div className={styles.Queries__form}>
                        <div className={styles.Queries__formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={styles.Queries__formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.Queries__formGroup}>
                            <label htmlFor="message">Message</label>
                            <TextareaAutosize placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.Queries__buttonWrapper}>
                        <Button filled={true} text="Send Query" onclick={handleClick} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Queries