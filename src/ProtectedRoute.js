import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import * as requests from "./requests"

const ProtectedRoute = () => {
    const navigator = useNavigate()

    const { user, login } = useAuth()

    useEffect(() => {
        const asyncFunc = async () => {
            if(!user) {
                const token = localStorage.getItem("token")
                if(token) {
                    try {
                        const user = await requests.getUser(token)
                        login({user, token})
                    }
                    catch(err) {
                        navigator("/login")
                    }
                }else {
                    navigator("/login")
                }
            }
        }
        asyncFunc()
    }, [])

    return <Outlet/>
}

export default ProtectedRoute