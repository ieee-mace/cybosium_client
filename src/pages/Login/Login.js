import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Message from "../../components/Message/Message"
import { useAuth } from "../../context/AuthContext"
import * as requests from "../../requests"
import styles from "./Login.module.scss"

const Login = () => {
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
            const { user, token } = await requests.loginUser({
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
            <div className={styles.Login}>
                <div className={styles.Login__left}>
                    <h1 className={styles.Login__title}>Login</h1>
                    <form onSubmit={handleSubmit} noValidate className={styles.Login__form}>
                        <div className={styles.Login__formGroup}>
                            <label htmlFor="login-form-email" className={styles.Login__formLabel}>Email address</label>
                            <input type="email" className={styles.Login__formInput} name="email" id="login-form-email" onChange={handleChange} required />
                        </div>
                        <div className={styles.Login__formGroup}>
                            <label htmlFor="login-form-password" className={styles.Login__formLabel}>Password</label>
                            <input type="password" className={styles.Login__formInput} name="password" id="login-form-password" onChange={handleChange} required />
                        </div>
                        <button type="submit" className={styles.Login__formButton}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login