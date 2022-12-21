import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation()
    const buttonColor = (current) => {

        if (location.pathname === current) {
            return "rgba(0, 0, 0, 0.8)"
        } else {
            return "gray"
        }
    }
    return (
        <nav className="navbar navbar-expand-lg container mt-5">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link text-white" to="/layout-1"><span style={{ background: buttonColor('/layout-1') }}>Layout 1</span></Link>
                    <Link className="nav-item nav-link text-white ms-4" to="/layout-2"><span style={{ background: buttonColor('/layout-2') }}>Layout 2</span></Link>
                    <Link className="nav-item nav-link text-white ms-4" to="/layout-3"><span style={{ background: buttonColor('/layout-3') }}>Layout 3</span></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;