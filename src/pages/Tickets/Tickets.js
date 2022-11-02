import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashHeader from "../../components/DashHeader/DashHeader";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import * as requests from "../../requests"


const Tickets = () => {

    const [events, setEvents] = useState([]);

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

    return (
        <div className="row">
            <div className="col-2 text-center">
                <Navbar />
            </div>
            <div className="col-10">
                <DashHeader title="Tickets" subtitle="Buy tickets now!" />
                <div className="row">
                    {/* card  */}
                    {events.map((event) => (
                        <div className="card col-3" key={event._id}>
                            <div className="card-body">
                                <h5 className="card-title">{event.name}</h5>
                                <p className="card-text">{event.description}</p>
                                <p className="card-text">{event.price}</p>
                                <Link to={`/tickets/${event._id}`} className="btn btn-primary">Buy Tickets</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    // return (
    //     <>
    //         <Navbar />
    //         <div className="container">
    //             <h1>Tickets</h1>
    //             {user.is_admin && (
    //                 <form onSubmit={handleEventCreate}>
    //                     <div className="form-group">
    //                         <label htmlFor="title">Title: </label>
    //                         <input type="text" name="title" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label htmlFor="description">Description: </label>
    //                         <input type="text" name="description" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label htmlFor="date">Date: </label>
    //                         <input type="date" name="date" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label htmlFor="time">Time: </label>
    //                         <input type="time" name="time" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label htmlFor="location">Location: </label>
    //                         <input type="text" name="location" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label htmlFor="image">Image: </label>
    //                         <input type="text" name="image" />
    //                     </div>
    //                     <button type="submit">Create Event</button>
    //                 </form>
    //             )}

    //             <div className="row">
    //                 {events.map(event => (
    //                     event.registration_open == true &&
    //                     <div className="col-md-4" key={event._id}>
    //                         <div className="card">
    //                             <img src="https://images.unsplash.com/photo-1616626000003-8b8b2b8b8b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
    //                             <div className="card-body">
    //                                 <h5 className="card-title">{event.name}</h5>
    //                                 <p className="card-text">{event.description}</p>
    //                                 <p className="card-text">Rs.{event.price}</p>

    //                                 {event.registered == true ?
    //                                     <Link to={`/events/${event._id}`} className="btn btn-primary">View Event</Link>:
    //                                     <Link to={`/events/${event._id}`} className="btn btn-primary">Register</Link>
    //                                 }
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </>
    // );
}

export default Tickets;
