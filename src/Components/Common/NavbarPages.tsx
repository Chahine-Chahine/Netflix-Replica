
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo-navbarPages.png'
import './NavBarPages.css'




function NavBarPages() {
    return (
        <div className="navBarPages">

            <div className="navBarPages-left">
                <img src={logo} alt="" />
            </div>

            <div className="navBarPages-right">

                <div className="navBarPages-text">
                    UNLIMITED TV SHOWS & MOVIE
                </div>
                <Link to='../AllMoviesPage' className="btn-login">
                    JOIN NOW
                </Link>
                <Link to='../MoviePreview' className="btn-signIn">
                    SIGN IN
                </Link>
            </div>
        </div>
    )

}

export default NavBarPages;