import React, { useState } from "react"
import * as requests from "../requests"

const Register = () => {
    const [form, setForm] = useState({})
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { user, token } = await requests.registerUser({
                email: form.email,
                password: form.password,
                firstname: form.firstname,
                lastname: form.lastname
            })
            console.log(user)
            console.log(token)
        }
        catch(err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname: </label>
                    <input type="text" name="firstname" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Lastname: </label>
                    <input type="text" name="lastname" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register