
// import '../App/App'
import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer"
import { Fragment, useEffect, useState } from "react";
// import '../App/App.css'
// import  '../../Components/Common/Footer.css'
// import  '../../Components/Common/NavBarPages.css'



function MoviePreview() {


    return (
        <>
            <NavBarPages />
            <div className="pages-container">
                <Footer />
            </div>
            {/* <Popular/> */}
          
        </>

    );
}

export default MoviePreview;