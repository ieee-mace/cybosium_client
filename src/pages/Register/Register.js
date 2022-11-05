import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Message from "../../components/Message/Message"
import { useAuth } from "../../context/AuthContext"
import * as requests from "../../requests"
import styles from "./Register.module.scss"

const Register = () => {
    const [form, setForm] = useState({})
    const { user, login } = useAuth()

    const [message, setMessage] = useState(null)

    const navigator = useNavigate()

    useEffect(() => {
        console.log(user)
        const asyncFunc = async () => {
            if (user) {
                navigator("/tickets")
            }
            else {
                const token = localStorage.getItem("token")
                try {
                    const user = await requests.getUser(token)
                    login({ user, token })
                    navigator("/tickets")
                }
                catch (err) { }
            }
        }
        asyncFunc()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { user, token } = await requests.registerUser({
                firstname: form.firstname,
                lastname: form.lastname,
                email: form.email,
                password: form.password
            })
            login({ user, token })
            navigator("/tickets")
        }
        catch (err) {
            console.log(err)
            setMessage({
                type: "error",
                text: err.message
            })
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const closeMessage = () => setMessage(null)

    return (
        <div>
            {message &&
                <div className={styles.messages}>
                    <Message message={message} closeMessage={closeMessage} />
                </div>
            }
            <div className={styles.Register}>
                <div className={styles.Register__left}>
                    <h1 className={styles.Register__title}>Register</h1>
                    <form onSubmit={handleSubmit} noValidate className={styles.Register__form}>
                        <div className={styles.Register__formRow}>
                            <div className={styles.Register__formGroup}>
                                <label htmlFor="login-form-firstname" className={styles.Register__formLabel}>Firstname</label>
                                <input type="text" className={styles.Register__formInput} name="firstname" id="login-form-firstname" onChange={handleChange} required />
                            </div>

                            <div className={styles.Register__formGroup}>
                                <label htmlFor="login-form-lastname" className={styles.Register__formLabel}>Lastname</label>
                                <input type="text" className={styles.Register__formInput} name="lastname" id="login-form-lastname" onChange={handleChange} required />
                            </div>
                        </div>
                        <div className={styles.Register__formGroup}>
                            <label htmlFor="login-form-email" className={styles.Register__formLabel}>Email</label>
                            <input type="email" className={styles.Register__formInput} name="email" id="login-form-email" onChange={handleChange} required />
                        </div>

                        <div className={styles.Register__formGroup}>
                            <label htmlFor="login-form-password" className={styles.Register__formLabel}>Password</label>
                            <input type="password" className={styles.Register__formInput} name="password" id="login-form-password" onChange={handleChange} required />
                        </div>
                        <button type="submit" className={styles.Register__formButton}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register