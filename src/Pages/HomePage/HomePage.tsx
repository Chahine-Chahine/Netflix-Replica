
// import '../App/App'
import Footer from "../../Components/Common/Footer"
import HeaderHome from '../../Components/HomePage/HeaderHome';
import ImageThenText from "../../Components/HomePage/ImageThenText";
import TextThenImage from "../../Components/HomePage/TextThenImage";
import image1 from './../../assets/HR-factory02.png'
import image2 from './../../assets/HR-factory03.jpg'
import image3 from './../../assets/HR-factory06.png'
import image4 from './../../assets/HR-factory07.png'
import TextImage from '../../Components/HomePage/TextThenImage.module.css'
import Accordion from "../../Components/HomePage/Accordion";
import { Fragment, useEffect, useState } from "react";




function MoviePreview() {

    let titles = ["Enjoy on your TV","Download your shows to watch offline","Watch everywhere","Create profiles for kids"];
    let texts = ["Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
                 "Save your favorites easily and always have something to watch.",
                 "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
                 "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                ];

    return (
        <>
            <div className={TextImage.homepage}>
            <HeaderHome />
            <TextThenImage title={titles[0]} text={texts[0]} image={image1} videoStyle={TextImage.firstvideoright}
                videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
            <ImageThenText title={titles[1]} text={texts[1]} image={image2}/>
            <TextThenImage title={titles[2]} text={texts[2]} image={image3} videoStyle={TextImage.secondvideoright}
                videoSrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
            <ImageThenText title={titles[3]} text={texts[3]} image={image4}/>
            <div className="pages-container">
                <Accordion/>
                <Footer />
            </div>
            </div>
      
          
        </>

    );
}

export default MoviePreview;