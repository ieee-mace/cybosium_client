import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const BootstrapWrapper = ({ children }) => {
    return <Outlet />
}

export default BootstrapWrapper;