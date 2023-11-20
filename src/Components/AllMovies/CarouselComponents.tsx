import React from "react";
import { Film } from "./Film";

interface CarouselProps {
	films: Film[];
	genre: string;
}

const Carousel: React.FC<CarouselProps> = ({ films, genre }) => {
	return (
		<div className="carousel-container">
			<p>{genre}</p>
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
						<div className="film-title">
							<p>{film.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;