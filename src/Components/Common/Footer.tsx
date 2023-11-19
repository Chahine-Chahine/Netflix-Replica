
import React from 'react';
import { Link } from 'react-router-dom';

import { SlArrowDown } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";
import  './Footer.css'

const arr1_links=["FAQ","Investor Relations","Privacy","Speed Test"]
const list1_links = arr1_links.map(arr1_link => <a href='#'>{arr1_link}</a>);

function FooterPages() {
    return (

        <div className="footer-container">
            <h3 className='footer-title'>Questions? Contact us.</h3>
            
                <div className="links-container">

                    <div className="links">
                        {/* <a href="#">FAQ</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Speed Test</a> */}
                        {list1_links}
                        <div className="language-selection">
                            <FaGlobe />
                            <span>English</span>
                            <SlArrowDown />
                        </div>
                        <a href="#">Netflix Lebanon</a>
                    </div>

                    <div className="links">
                        <a href="#">Help Center</a>
                        <a href="#">Jobs</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Legal Notices</a>
                    </div>

                    <div className="links">
                        <a href="#">Account</a>
                        <a href="#">Ways to Watch</a>
                        <a href="#">Corporate Information</a>
                        <a href="#">Only on Netflix</a>
                    </div>

                    <div className="links">
                        <a href="#">Media Center</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Contact Us</a>
                    </div>


                </div>
            

        </div>
    )

}

export default FooterPages;