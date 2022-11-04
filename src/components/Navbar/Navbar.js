import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from "./Navbar.module.scss";


const Navbar = () => {
    const { user, logout } = useAuth()

    const handleLogout = () => logout()

    return (
        <div className={`text-center ${styles.nav}`}>
            <div className="my-5">
                <img
                    src={`https://avatars.dicebear.com/api/initials/${user.firstname}.svg`}
                    style={{ height: "80px", borderRadius: "50%" }}
                    className="mb-3"
                />
                <h5>Hi {user.firstname}</h5>
            </div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/tickets">Tickets</Link>
                </li>
                <li class="nav-item">
                    <button class="btn" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar