import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer"
import footerStyles from  '../../Components/Common/Footer.module.css'


function MoviePreview() {

    return (
        <>
            <NavBarPages />
            <div className={footerStyles.pagesContainer}>
                <Footer />
            </div>

        </>

    );
}

export default MoviePreview;