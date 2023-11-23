import NavBarPages from '../../Components/Common/NavbarPages';
import MoreDetails from '../../Components/MoviePreview/MoreDetails';
import Footer from "../../Components/Common/Footer";
import MoreLikeThis from "../../Components/MoviePreview/MoreLikeThis";
import footerStyles from  '../../Components/Common/Footer.module.css'


function MoviePreview() {
    let { id } = useParams();
    let userId
    console.log(id)
    return (
        <>
        <div className={headerhome.morestyles}>
            <NavBarPages />
            {/* <Popular /> */}
            <HeaderMoviePreview/>
            <div className="pagesContainer">
                <MoreLikeThis/>
                <Footer />
            </div>
        </div>

        </>

    );
}

export default MoviePreview;

