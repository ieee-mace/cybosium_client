// create a bootstrap page selling online event ticket

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import * as requests from "../../requests";

const __DEV__ = document.domain == 'localhost';

const Event = () => {
    const params = useParams()

    const [event, setEvent] = useState({});

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const event = await requests.fetchEvent(params.id);
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
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDY4NDQ2NjE1ZjgwYjYzMjY2M2E0NCIsImVtYWlsIjoicm9zaGFuMTJAZ21haWwuY29tIiwiaWF0IjoxNjY2NjA1ODQ5fQ.gu996RZzsSuam35UXucXlZUiP-wZHaDqaLo1PgzLBUg`
            }
        })
        if (!response.ok) {
            return alert("Something went wrong")
        }
        const session = await response.json()
        window.location.href = session.url
    }

    return(
        <>
            <Navbar/>
            {/* hero section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero-text">
                                <h1>{event.name}</h1>
                                <p>{event.description}</p>
                                <button onClick={handleOpenStripeCheckout} className="btn btn-primary">Buy Tickets</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero-img">
                                <img src="https://images.unsplash.com/photo-1616626000003-8b8b2b8b8b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of hero section */}
        </>
    );
}

export default Event;
