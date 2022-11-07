import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashHeader from "../../components/DashHeader/DashHeader";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import * as requests from "../../requests"
import styles from "./Tickets.module.scss"
import moment from "moment";

const __DEV__ = document.domain == 'localhost';
const API_URL = "https://api-cybosium.ieeemace.org/api"

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
        const url = __DEV__ ? `http://localhost:7000/api/events/${event._id}/register` : `${API_URL}/events/${event.id}/register`;
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
                            <div className={styles.Ticket__content}>
                                <button className={styles.Ticket__close} onClick={closeTicketWindow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                                <h1 className={styles.Ticket__name}>{event.name}</h1>
                                <p className={styles.Ticket__description}>{event.description}</p>
                                <p className={styles.Ticket__date}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                                    <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg> {moment(new Date(event.date)).format("MMMM Do, YYYY")}</p>
                                <button onClick={handleOpenStripeCheckout} className={styles.Ticket__buy}>Buy Tickets</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default Tickets;
