import DashHeader from "../DashHeader/DashHeader";
import Message from "../Message/Message";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

const Layout = ({ title, subtitle, children, message = null, closeMessage = () => { } }) => {
    return (
        <div className={styles.Layout}>
            {message &&
                <div className={styles.messages}>
                    <Message message={message} closeMessage={closeMessage} />
                </div>
            }
            <div className="row g-0">
                <div className="col-2 text-center border border-bottom vh-100">
                    <Navbar />
                </div>
                <div className="col-10">
                    <DashHeader title={title} subtitle={subtitle} />
                    <div className="container py-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Layout;