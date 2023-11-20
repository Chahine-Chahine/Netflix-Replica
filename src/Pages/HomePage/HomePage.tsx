
// import '../App/App'
import Footer from "../../Components/Common/Footer"
import HeaderHome from '../../Components/HomePage/HeaderHome';
import ImageThenText from "../../Components/HomePage/ImageThenText";
import TextThenImage from "../../Components/HomePage/TextThenImage";
import { Fragment, useEffect, useState } from "react";
// import '../App/App.css'
// import  '../../Components/Common/Footer.css'
// import  '../../Components/Common/NavBarPages.css'



function MoviePreview() {


    return (
        <>
            
            <HeaderHome />
            <TextThenImage />
            <ImageThenText />
            <TextThenImage />
            <ImageThenText />
            <div className="pages-container">
                <Footer />
            </div>
            {/* <Popular/> */}

            <h1>HOMEPAGE</h1>
          
        </>

    );
}

export default MoviePreview;