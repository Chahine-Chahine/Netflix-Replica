import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer";
import MoreLikeThis from "../../Components/MoviePreview/MoreLikeThis";
import footerStyles from  '../../Components/Common/Footer.module.css'
import HeaderMoviePreview from '../../Components/MoviePreview/HeaderMoviePreview';


function MoviePreview() {

    return (
        <>
            <NavBarPages />
            <HeaderMoviePreview/>
            <div className="pagesContainer">
                <MoreLikeThis/>
                <Footer />
            </div>

        </>

    );
}

export default MoviePreview;