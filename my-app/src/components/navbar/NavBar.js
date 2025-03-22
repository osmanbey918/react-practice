import React from 'react'
import "./NavBar.css"
export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='logo'>Logo</div>
            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Buying</a>
                <a href="#portfolio">Renting</a>
                <a href="#blog">Selling</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="navbar-buttons">
                <button>Sign Up</button>
                <button className='login'>Login</button>
            </div>
        </div>

    )
}
