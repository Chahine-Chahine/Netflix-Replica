import NavBarPages from '../../Components/Common/NavbarPages';
import MoreDetails from '../../Components/MoviePreview/MoreDetails';
import Footer from "../../Components/Common/Footer";
import MoreLikeThis from "../../Components/MoviePreview/MoreLikeThis";
import footerStyles from  '../../Components/Common/Footer.module.css'
import { useParams } from 'react-router';
import HeaderMoviePreview from '../../Components/MoviePreview/HeaderMoviePreview';
import Upcoming from '../../Components/MoviePreview/Upcoming';


function MoviePreview() {
    let { id } = useParams();
    let userId
    console.log(id)
    return (
        <>
        <div>
            <NavBarPages />
            <HeaderMoviePreview/>
                <MoreDetails/>
            <div className="pagesContainer">
                <MoreLikeThis/>
                </div>
                <div className='wrapper'>
                <Upcoming/>
                </div>
                <Footer />
            </div>
        

        </>

    );
}

export default MoviePreview;

