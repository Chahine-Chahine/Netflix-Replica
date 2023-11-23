import headerStyles from "./HeaderHome.module.css"
import logo from './../../assets/logo-navbarPages.png'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderHome(){
    return(
        <>
        <div className={headerStyles.headerContainer}>
            <div className={headerStyles.headerContainerShadow}>
            </div>
            <div className={headerStyles.homeHeaderNav}>
                    <img src={logo} className={headerStyles.homeLogo} alt='logo'/>
                    <div className={headerStyles.homeNavs}>
                        <div className={headerStyles.navLanguageSelection}>
                            <FaGlobe />
                            <span className={headerStyles.selectedLanguage}>English</span>
                            <SlArrowDown />
                        </div>
                        <button  className={headerStyles.signupButton}>Sign In </button>
                    </div>
            </div>
            <div className={headerStyles.headerTextContainer}>
                <h1 className={headerStyles.headerTitle}>Unlimited movies, TV shows, and more</h1>
                <p className={headerStyles.headerFirstP}>Watch anywhere. Cancel anytime.</p>
                <p className={headerStyles.headerSecondP}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className={headerStyles.inputButton}>
                    <input type='text' placeholder='Email address' className={headerStyles.headerInput}/>
                    <Link  to='../AllMoviesPage'>
                    <button className={headerStyles.headerButton}>Get Started  <SlArrowRight className={headerStyles.arrowRight}/></button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={headerStyles.breakDiv}></div>
        </>
    )
}

export default HeaderHome;