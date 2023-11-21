import Discover from "../../Components/ApiHandler/Genre";
import Popular from "../../Components/ApiHandler/Popular";
import Video from "../../Components/ApiHandler/Videos";
import Upcoming from "../../Components/MoviePreview/Upcoming";
import "../App/App.css";
import moviePreviewStyles from "./MoviePreview.module.css";
function MoviePreview() {
  return (
    <>


      {/* Coming Soon Section */}
      <div className={moviePreviewStyles.cardContainer}>
        <div></div>
        <Upcoming />
        {/* Coming Soon Section */}
      </div>
    </>
  );
}

export default MoviePreview;
