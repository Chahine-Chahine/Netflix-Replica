
// import '../App/App'
import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer"
import HeaderHome from '../../Components/HomePage/HeaderHome';
import { Fragment, useEffect, useState } from "react";
// import '../App/App.css'
// import  '../../Components/Common/Footer.css'
// import  '../../Components/Common/NavBarPages.css'



function MoviePreview() {


    return (
        <>
            
            <NavBarPages />
            <HeaderHome />
            <div className="pages-container">
                <Footer />
            </div>
            {/* <Popular/> */}

            <h1>HOMEPAGE</h1>
          
        </>

    );
}

export default MoviePreview;