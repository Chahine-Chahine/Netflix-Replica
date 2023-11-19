import './App.css'
import NavBarPages from '../Components/NavBar/NavbarPages';
import FooterPages from '../Components/Footer/FooterPages';

function AllMoviesPage() {
    return (
        <>
            <NavBarPages />
            <div className="pages-container">
                <FooterPages />
            </div>



            {/* <div className='center'>
                <p className='purple-bold'>All Movies Page.<br></br>Let's Do It Team!</p>
            </div> */}
        </>
    );
}

export default AllMoviesPage;