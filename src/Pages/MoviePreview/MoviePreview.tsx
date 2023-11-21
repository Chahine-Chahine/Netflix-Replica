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
      <div className={moviePreviewStyles.column}>
        <div className={moviePreviewStyles.title}>Comming Soon</div>
      <div className={moviePreviewStyles.cardContainer}>
        <Upcoming />
        {/* Coming Soon Section */}
      </div>
      </div>
    </>
  );
}

export default MoviePreview;
