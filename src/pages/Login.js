import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import * as requests from "../requests"

const Login = () => {
    const [form, setForm] = useState({})
    const { user, login } = useAuth()

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
            console.log(user)
            console.log(token)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login