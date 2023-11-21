// import '../App/App'
import NavBarPages from '../../Components/Common/NavbarPages';
import Footer from "../../Components/Common/Footer"
// import  '../../Components/Common/Footer.css'


function AllMoviesPage() {
    return (
        <>
            <NavBarPages/>
            <MoreToWatch/>
            <div className="pagesContainer">
            <h3 className={footerStyles.upperLinkText}>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</h3>
                <Footer />
            </div>

        </>
    );
}
