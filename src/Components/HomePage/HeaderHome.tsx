import bg from './../../assets/headerHomeBg.jpg'
import './HeaderHome.css'
import logo from './../../assets/logo-navbarPages.png'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";

function HeaderHome(){
    return(
        <>
        <div className="header-container">
            <div className="header-container-shadow">
            </div>
            <div className="home-header-nav">
                    <img src={logo} className='home-logo' alt='logo'/>
                    <div className="home-navs">
                        <div className="nav-language-selection">
                            <FaGlobe />
                            <span className='selected-language'>English</span>
                            <SlArrowDown />
                        </div>
                        <button className='signup-button'>Sign In </button>
                    </div>
            </div>
            <div className="header-text-container">
                <h1 className="header-title">Unlimited movies, TV shows, and more</h1>
                <p className="header-first-p">Watch anywhere. Cancel anytime.</p>
                <p className="header-second-p">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input-button">
                    <input type='text' placeholder='Email address' className='header-input'/>
                    <button className='header-button'>Get Started  <SlArrowRight className='arrow-right'/></button>
                </div>
            </div>
        </div>
        <div className='break-div'></div>
        </>
    )
}

export default HeaderHome;