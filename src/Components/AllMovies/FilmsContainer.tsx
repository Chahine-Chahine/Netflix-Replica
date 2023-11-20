// FilmsContainerComponent.tsx
import React from "react";
import Carousel from "./CarouselComponents";
import { Film } from "./Film";

const filmCategories: { genre: string; films: Film[] }[] = [
	{
		genre: "Action",
		films: [
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
			{ id: 1, title: "Film 1", imageUrl: "https://example.com/film1.jpg" },
			{ id: 2, title: "Film 2", imageUrl: "https://example.com/film2.jpg" },
		],
	},
	{
		genre: "Comedy",
		films: [
			{ id: 3, title: "Film 3", imageUrl: "https://example.com/film3.jpg" },
			{ id: 4, title: "Film 4", imageUrl: "https://example.com/film4.jpg" },
		],
	},
	// Add more genres as needed
	{
		genre: "Drama",
		films: [
			{ id: 5, title: "Film 5", imageUrl: "https://example.com/film5.jpg" },
			{ id: 6, title: "Film 6", imageUrl: "https://example.com/film6.jpg" },
		],
	},
];

const FilmsContainer: React.FC = () => {
	return (
		<div>
			{filmCategories.map((category) => (
				<Carousel
					key={category.genre}
					films={category.films}
					genre={category.genre}
				/>
			))}
		</div>
	);
};

export default FilmsContainer;
