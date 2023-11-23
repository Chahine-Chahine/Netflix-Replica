import React from 'react';
import FilmsContainer from '../../Components/AllMovies/FilmsContainer';
import style from "../../Components/AllMovies/CaroaselComponents.module.css";
import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer"
import MoreToWatch from '../../Components/AllMovies/MoreToWatch';
import footerStyles from "../../Components/Common/Footer.module.css"


function AllMoviesPage() {
	
    return (
        <>
            <NavBarPages/>
            <div className={style.allPage}>
                <FilmsContainer />
            </div>
            <MoreToWatch/>
            <div className="pagesContainer">
            <h3 className={footerStyles.upperLinkText}>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</h3>
                <Footer/>
            </div>

        </>
    );
}

export default AllMoviesPage;
