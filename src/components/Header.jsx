import React from 'react'
import Logo from '../img/logo.png'

const Header = () => {
    return (
        <section id="particles-js" className="section home">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <img src={Logo} id="log" />
            </nav>
        </section>
    )
}

export default Header