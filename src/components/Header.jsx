import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../img/logo.png'

const Header = () => {
    return (
        <section id="particles-js" className="section home">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <img src={Logo} id="log" />
                <div className="col-md-10 col-12 mx-auto">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ml-auto pr-4 list">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/breeds">Breeds</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    )
}

export default Header