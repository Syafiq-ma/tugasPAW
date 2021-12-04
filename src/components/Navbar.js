import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="Navbar">
            <div >
            <Link className="Logo"to="/">Veterinary</Link>
            </div>
            <div className="Navigation">
                <div >
                    <Link className="Queue"to="/queue">Queue</Link>
                </div>
                <div >
                <Link className="Patient" to="/patients">Patient</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar