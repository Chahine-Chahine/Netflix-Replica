import NavBarPages from '../../Components/Common/NavbarPages';
import MoreDetails from '../../Components/MoviePreview/MoreDetails';
import Footer from "../../Components/Common/Footer";
import MoreLikeThis from "../../Components/MoviePreview/MoreLikeThis";
import footerStyles from  '../../Components/Common/Footer.module.css'
import headerhome from '../../Components/HomePage/HeaderHome.module.css'


function MoviePreview() {

    return (
        <>
        <div className={headerhome.morestyles}>
            <NavBarPages />
            <div className="pagesContainer">
                <MoreDetails />
                <MoreLikeThis />
                <Footer />
            </div>
        </div>

        </>

    );
}

export default MoviePreview;