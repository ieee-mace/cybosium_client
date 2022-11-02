// create a bootstrap page selling online event ticket

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashHeader from "../../components/DashHeader/DashHeader";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import * as requests from "../../requests";

const __DEV__ = document.domain == 'localhost';

const Event = () => {
    const params = useParams()

    const { token } = useAuth()

    const [event, setEvent] = useState({});

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const event = await requests.fetchEvent({ id: params.id, token });
                setEvent(event);
            }
            catch (error) {
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
        <div className="row">
            <div className="col-2 text-center">
                <Navbar />
            </div>
            <div className="col-10 container">
                <DashHeader title="Tickets" subtitle="Buy tickets now!" />
                <div className="hero-text">
                    <h1>{event.name}</h1>
                    <p>{event.description}</p>
                    <button onClick={handleOpenStripeCheckout} className="btn btn-primary">Buy Tickets</button>
                </div>
            </div>
        </div>
    );
}

export default Event;
