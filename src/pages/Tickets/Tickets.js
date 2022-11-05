import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashHeader from "../../components/DashHeader/DashHeader";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import * as requests from "../../requests"
import styles from "./Tickets.module.scss"

const __DEV__ = document.domain == 'localhost';

const Tickets = () => {

    const [events, setEvents] = useState([]);
    const [ticketWindow, setTicketWindow] = useState(false)
    const [event, setEvent] = useState({});

    const [message, setMessage] = useState(null)

    const closeMessage = () => setMessage(null)

    const { token, user } = useAuth()

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const events = await requests.fetchEvents(token);
                console.log(events)
                setEvents(events);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchEvent()
    }, [token])

    const handleEventCreate = () => {

    }

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

    const openTicketWindow = (id) => {
        console.log(id)
        const fetchEvent = async () => {
            try {
                const event = await requests.fetchEvent({ id, token });
                setEvent(event);
                setTicketWindow(true)
            }
            catch (error) {
                // setMessage({
                //     type: 'error',
                //     text: error.message
                // })
                console.log(error);
            }
        }

        fetchEvent()
    }
    const closeTicketWindow = () => setTicketWindow(false)

    return (
        <Layout title="Tickets" subtitle="Buy tickets now!" active="tickets">
            <div className={styles.container}>
                <div className={styles.Tickets}>
                    {events.map((event) => (
                        <div className={styles.Card} key={event._id}>
                            <div className={styles.Card__img}></div>
                            <div className={styles.Card__content}>
                                <h1 className={styles.Card__name}>{event.name}</h1>
                                <p className={styles.Card__description}>{event.description}</p>
                                <h4 className={styles.Card__price}>${event.price}</h4>
                                <button className={styles.Card__buy} onClick={() => openTicketWindow(event._id)}>Buy Tickets</button>
                            </div>
                        </div>
                    ))}
                </div>
                {ticketWindow &&
                    <div className={styles.BuyTicket}>
                        <div className={styles.Ticket}>
                            <div className={styles.Ticket__img}></div>
                            <button className={styles.Ticket__close} onClick={closeTicketWindow}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                            <h1 className={styles.Ticket__name}>{event.name}</h1>
                            <p className={styles.Ticket__description}>{event.description}</p>
                            <button onClick={handleOpenStripeCheckout} className={styles.Ticket__buy}>Buy Tickets</button>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default Tickets;
