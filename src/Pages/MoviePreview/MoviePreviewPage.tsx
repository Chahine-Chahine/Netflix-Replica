import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer";
import MoreLikeThis from "../../Components/MoviePreview/MoreLikeThis";
import footerStyles from '../../Components/Common/Footer.module.css'
import HeaderMoviePreview from '../../Components/MoviePreview/HeaderMoviePreview';
import Upcoming from "../../Components/MoviePreview/Upcoming";
import moviePreviewStyles from "./MoviePreview.module.css";
import Popular from '../../Components/MoviePreview/HeaderMoviePreview';
import {useParams} from 'react-router-dom';
import MoreDetails from '../../Components/MoviePreview/MoreDetails';




function MoviePreview() {
    let { id } = useParams();
    let userId
    console.log(id)
    return (
        <>
            <NavBarPages />
            <HeaderMoviePreview/>
            <MoreDetails/>
            <div className="pagesContainer">

                <MoreLikeThis />
                {/* Coming Soon Section */}
                <div className={moviePreviewStyles.column}>
                    <div className={moviePreviewStyles.title}>Comming Soon</div>
                    <div className={moviePreviewStyles.cardContainer}>
                        <Upcoming />
                        {/* Coming Soon Section */}
                    </div>
                </div>
                <Footer />
            </div>

        </>

    );
}

export default MoviePreview;

