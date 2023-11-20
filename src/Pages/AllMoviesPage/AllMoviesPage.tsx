import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer"
import MoreToWatch from '../../Components/AllMovies/MoreToWatch';
import footerStyles from  '../../Components/Common/Footer.module.css'



function AllMoviesPage() {
    return (
        <>
            <NavBarPages/>
            <MoreToWatch/>
            <div className={footerStyles.pagesContainer}>
            <h3 className={footerStyles.upperLinkText}>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</h3>
                <Footer />
            </div>

        </>
    );
}

export default AllMoviesPage;