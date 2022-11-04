import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Message from "../../components/Message/Message"
import { useAuth } from "../../context/AuthContext"
import * as requests from "../../requests"
import styles from "./Register.module.scss"

const Register = () => {
    const [form, setForm] = useState({})
    const { login } = useAuth()

    const navigator = useNavigate()

    const [message, setMessage] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { user, token } = await requests.registerUser({
                email: form.email,
                password: form.password,
                firstname: form.firstname,
                lastname: form.lastname
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
                <div className="col-12 col-md-5">
                    <h1 className="my-4">Register</h1>
                    <form onSubmit={handleSubmit} noValidate className="was-validated">
                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label htmlFor="login-form-firstname" className="form-label">Firstname</label>
                                <input type="text" className="form-control" name="firstname" id="login-form-firstname" onChange={handleChange} required />
                                <div className="invalid-feedback">Firstname is required</div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="login-form-lastname" className="form-label">Lastname</label>
                                <input type="text" className="form-control" name="lastname" id="login-form-lastname" onChange={handleChange} required />
                                <div className="invalid-feedback">Lastname is required</div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="login-form-email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" id="login-form-email" onChange={handleChange} required />
                            <div className="invalid-feedback">Enter valid email</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="login-form-password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="login-form-password" onChange={handleChange} required />
                            <div className="invalid-feedback">Password is required</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register