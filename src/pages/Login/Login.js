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
        <div className="container">
            {message &&
                <div className={styles.messages}>
                    <Message message={message} closeMessage={closeMessage} />
                </div>
            }
            <div className="row">
                <div className="col-12 col-md-4">
                    <h1 className="my-4">Login</h1>
                    <form onSubmit={handleSubmit} noValidate className="was-validated">
                        <div class="mb-3">
                            <label htmlFor="login-form-email" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" id="login-form-email" onChange={handleChange} required />
                            <div class="invalid-feedback">Enter a valid email</div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="login-form-password" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="login-form-password" onChange={handleChange} required />
                            <div className="invalid-feedback">Password is required</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login