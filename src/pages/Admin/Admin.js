import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import * as requests from "../../requests"
import * as bootstrap from "bootstrap"
import Navbar from "./Navbar"
import $ from 'jquery'
import moment from "moment"

const Admin = () => {
    const { token } = useAuth()

    const [events, setEvents] = useState([])
    const [formOpen, setFormOpen] = useState(false)

    const updateEvents = async () => {
        try {
            const events = await requests.fetchEvents(token)
            setEvents(events)
        }
        catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        updateEvents()
    }, [])

    const submitForm = async (e) => {
        console.log("submitted")
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)
        try {
            await requests.createEvent({ ...data, registration_open: data.registration_open === "on", token })
        }
        catch (err) {
            return alert(err)
        }
        updateEvents()
    }

    const handleEventDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            try {
                await requests.deleteEvent({ id, token })
                updateEvents()
            }
            catch (err) {
                alert(err)
            }
        }
    }

    const handleEventUpdate = (id) => {

    }

    return (
        <div>
            <Navbar />
            <main>
                <div className="d-flex align-items-start">
                    <div
                        className="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            className="nav-link active"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            Events
                        </button>
                    </div>
                    <div className="tab-content w-100" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade show active "
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                            tabIndex={0}
                        >

                            <h1>Events</h1>
                            <hr />
                            <h2 className="mb-3">List of Events</h2>
                            <div className="mb-3">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setFormOpen(!formOpen)}
                                >
                                    Create Event +
                                </button>

                            </div>

                            {formOpen &&
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <form onSubmit={submitForm}>
                                            <div className="mb-3">
                                                <label htmlFor="form_create_event_name" className="col-form-label">
                                                    Name:
                                                </label>
                                                <input type="text" name="name" className="form-control" id="form_create_event_name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="form_create_event_description" className="col-form-label">
                                                    Description:
                                                </label>
                                                <input type="text" name="description" className="form-control" id="form_create_event_description" />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="form_create_event_price" className="col-form-label">
                                                    Price:
                                                </label>
                                                <input type="text" name="price" className="form-control" id="form_create_event_price" />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="form_create_event_date" className="col-form-label">
                                                    Date:
                                                </label>
                                                <input type="date" name="date" className="form-control" id="form_create_event_date" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="form_create_event_mode" className="col-form-label">
                                                    Mode:
                                                </label>
                                                <select id="form_create_event_mode" defaultValue="online" className="form-select" name="mode">
                                                    <option value="online">Online</option>
                                                    <option value="offline">Offline</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-check-label" htmlFor="form_create_event_open">
                                                    Registration Open &nbsp;
                                                </label>
                                                <input className="form-check-input" type="checkbox" name="registration_open" id="form_create_event_open" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            }


                            <table className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Registration Open</th>
                                        <th>Mode</th>
                                        <th>Date</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((event, id) => (
                                        <tr key={id}>
                                            <td>{event.name}</td>
                                            <td>{event.description}</td>
                                            <td>{event.price}</td>
                                            <td>{String(event.registration_open)}</td>
                                            <td>{event.mode}</td>
                                            <td>{moment(new Date(event.date)).format("MMMM Do, YYYY")}</td>
                                            <td style={{ width: "100px" }}>
                                                <button className="btn btn-info" onClick={() => handleEventUpdate(event._id)}>Update</button>
                                            </td>
                                            <td style={{ width: "100px" }}>
                                                <button className="btn btn-danger mx-2" onClick={() => handleEventDelete(event._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >

            </main >

        </div >
    )
}

export default Admin