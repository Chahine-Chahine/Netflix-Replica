import Discover from '../../Components/ApiHandler/Genre';
import Popular from '../../Components/ApiHandler/Popular';
import Video from '../../Components/ApiHandler/Videos';
import Upcoming from '../../Components/MoviePreview/Upcoming';
import '../App/App.css'
import './MoviePreview.css'
function MoviePreview() {

   

    return (
        <>
          
            <Upcoming/>
            <Popular/>
            <Discover/>
            <Video/>
        </>

    );
}

export default MoviePreview;