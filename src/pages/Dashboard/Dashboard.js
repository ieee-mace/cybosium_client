import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Dashboard</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1616626000003-8b8b2b8b8b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Online Tickets</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/tickets/online" className="btn btn-primary">Buy Tickets</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1616626000003-8b8b2b8b8b2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Offline Tickets</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/event/" className="btn btn-primary">Buy Tickets</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
