import React from "react";
import { Film } from "./Film";

interface CarouselProps {
	films: Film[];
	genre: string;
}

const Carousel: React.FC<CarouselProps> = ({ films, genre }) => {
	return (
		<div className="carousel-container">
			<p className="genre-title">{genre}</p>
			<div className="film-list">
				{films.map((film) => (
					<div
						key={film.id}
						className="film-container">
						<img
							src={film.imageUrl}
							alt={film.title}
							className="film-image-characteristics"
						/>
						<div className="film-title">{film.title}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
