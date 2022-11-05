import { useAuth } from "../../context/AuthContext";
import DashHeader from "../DashHeader/DashHeader";
import Message from "../Message/Message";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

const Layout = ({ title, subtitle, children, message = null, closeMessage = () => { }, active = null }) => {
    const { user } = useAuth();

    return (
        <div className={styles.Layout}>
            {message &&
                <div className={styles.messages}>
                    <Message message={message} closeMessage={closeMessage} />
                </div>
            }
            <div className={styles.Layout}>
                <div className={styles.Layout__navbar}>
                    <Navbar active={active} />
                </div>
                <div className={styles.Layout__dashboard}>
                    <DashHeader user={user} title={title} subtitle={subtitle} />
                    {children}
                </div>
            </div>
        </div>
    );
}


export default Layout;