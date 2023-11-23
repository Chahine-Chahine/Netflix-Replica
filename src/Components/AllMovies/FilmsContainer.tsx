import style from "./CaroaselComponents.module.css";
import Carousel from "./CarouselComponents";

let moviesGenre = [
	[28, "Action"],
	[12, "Adventure"],
	[16, "Animation"],
	[37, "Western"],
	[80, "Crime"],
	[99, "Documentary"],
	[18, "Drama"],
	[10402, "Music"],
	[9648, "Mystery"],
	[10749, "Romance"],
	[10770, "TV Movie"],
	[53, "Thriller"],
	[35, "Comedy"],
	[10752, "War"],
	
];

const FilmsContainer = () => {
	return (
		<>
			<div className={style.headTextContainer}>
				<h1 className={style.headTitle}>Movies</h1>
				<p className={style.headParagraph}>
					Movies move us like nothing else can, whether they’re scary, funny,
					dramatic, romantic or anywhere in-between. So many titles, so much to
					experience.
				</p>
			</div>
			<div>
				{moviesGenre.map((genres) => {
					const genreId = genres[0] as number;
					const genreName = genres[1];
					
					return (
						<div>
							<p>{genreName}</p>
							<Carousel genre={genreId}/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default FilmsContainer;