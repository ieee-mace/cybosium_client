import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Outlet } from 'react-router-dom';

const BootstrapWrapper = ({ children }) => {
    return <Outlet/>
}

export default BootstrapWrapper;