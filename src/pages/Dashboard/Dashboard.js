import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import * as requests from "../../requests"


const Dashboard = () => {

    const [events, setEvents] = useState([]);

    const { token } = useAuth()

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

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Dashboard</h1>
                <div className="row">
                    {events.map(event => (
                        event.registration_open == true &&
                        <div className="col-md-4" key={event._id}>
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1616626000003-8b8b2b8b8b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{event.name}</h5>
                                    <p className="card-text">{event.description}</p>
                                    <p className="card-text">Rs.{event.price}</p>

                                    {event.registered == true ?
                                        <Link to={`/events/${event._id}`} className="btn btn-primary">View Event</Link>:
                                        <Link to={`/events/${event._id}`} className="btn btn-primary">Register</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
