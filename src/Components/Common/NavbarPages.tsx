
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo-navbarPages.png'
import navbarStyles from './NavBarPages.module.css'

function NavBarPages() {
    return (
        <div className={navbarStyles.navBarPages}>

            <div className={navbarStyles.navBarPagesLeft}>
                <img src={logo} alt="" />
            </div>

            <div className={navbarStyles.navBarPagesRight}>

                <div className={navbarStyles.navBarPagesText}>
                    UNLIMITED TV SHOWS & MOVIE
                </div>
                <Link to='../AllMoviesPage' className={navbarStyles.btnLogin}>
                    JOIN NOW
                </Link>
                <Link to='../' className={navbarStyles.btnSignIn}>
                    SIGN IN
                </Link>
            </div>
        </div>
    )

}

export default NavBarPages;