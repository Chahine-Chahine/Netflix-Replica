
import './App.css'
import NavBarPages from '../Components/NavBar/NavbarPages';
import FooterPages from '../Components/Footer/FooterPages';

function MoviePreview() {
    return (
        <>
            <NavBarPages />
            <div className="pages-container">
                <FooterPages />
            </div>
        </>

    );
}

export default MoviePreview;