import Popular from "../../Components/ApiHandler/Popular";
import Video from "../../Components/ApiHandler/Videos";
import "../App/App.css";

function MoviePreview() {
	return (
		<>
			<div className="center">
				<p className="purple-bold">Movie Preview Page.</p>
			</div>
			<Popular />
			<Video />
		</>
	);
}

export default MoviePreview;
