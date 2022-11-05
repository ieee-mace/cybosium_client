// create a bootstrap page selling online event ticket

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashHeader from "../../components/DashHeader/DashHeader";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import * as requests from "../../requests";

import styles from "./Ticket.module.scss"

const __DEV__ = document.domain == 'localhost';

const Event = () => {
    const params = useParams()

    const { token } = useAuth()

    const [event, setEvent] = useState({});

    const [message, setMessage] = useState(null)

    const closeMessage = () => setMessage(null)

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const event = await requests.fetchEvent({ id: params.id, token });
                setEvent(event);
            }
            catch (error) {
                setMessage({
                    type: 'error',
                    text: error.message
                })
                console.log(error);
            }
        }

        fetchEvent()
    }, [])

    const handleOpenStripeCheckout = async () => {
        const url = __DEV__ ? `http://localhost:7000/api/events/${event._id}/register` : 'PRODUCTION_URL';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        if (!response.ok) {
            return alert("Something went wrong")
        }
        const session = await response.json()
        window.location.href = session.url
    }

    return (
        <Layout title="Tickets" subtitle="Buy tickets now!" message={message} closeMessage={closeMessage}>
            <div className={styles.Ticket}>
                <h1 className={styles.Ticket__name}>{event.name}</h1>
                <p className={styles.Ticket__description}>{event.description}</p>
                <button onClick={handleOpenStripeCheckout} className={styles.Ticket__buy}>Buy Tickets</button>
            </div>
        </Layout>
    );
}

export default Event;
