// import React, { useState } from "react";
// import { Film } from "./Film";
// import style from "../../Components/AllMovies/CaroaselComponents.module.css";

// interface CarouselProps {
// 	films: Film[];
// 	genre: string;
// }

// const Carousel: React.FC<CarouselProps> = ({ films, genre }) => {
// 	const [scrollPosition, setScrollPosition] = useState(0);

// 	const handleScroll = (direction: "left" | "right") => {
// 		const increment = direction === "left" ? 120 : -120; // Reverse the increment direction
// 		const maxScrollPosition = (films.length - 1) * 299; // Assuming each box has a width of 299 pixels

// 		// Calculate the new scroll position
// 		let newScrollPosition = scrollPosition + increment;

// 		// Ensure it doesn't go beyond the boundaries
// 		newScrollPosition = Math.max(
// 			0,
// 			Math.min(newScrollPosition, maxScrollPosition)
// 		);

// 		setScrollPosition(newScrollPosition);
// 	};

// 	return (
// 		<div>
			
// 			<div className={style.carouselContainer}>
// 				<p className={style.genreTitle}>{genre}</p>

// // 				<div className={style.Test}>
// // 					<div className={style.scrollButtons}>
// // 						<button
// 							onClick={() => handleScroll("left")}
// 							className={style.leftScroll}>
// 							<code>&lt;</code>
// 						</button>
// 					</div>
// 					<div className={style.filmContainerCharacteristic}>
// 						<div
// 							style={{
// 								display: "flex",
// 								flexDirection: "row",
// 								transform: `translateX(${-scrollPosition}px)`,
// 								transition: "transform 0.5s ease",
// 							}}>
// 							{films.map((film) => (
// 								<div
// 									key={film.id}
// 									className={style.filmContainer}>
// 									<img
// 										src={film.imageUrl}
// 										alt={film.title}
// 										className={style.filmImageCharacteristics}
// 									/>

// 									<div className={style.filmTitle}>{film.title}</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>

// 					<div>
// 						<button
// 							onClick={() => handleScroll("right")}
// 							className={style.rightScroll}>
// 							<code>&gt;</code>
// 						</button>
// 					</div>
// 				</div>
// 				</div>	</div>
// 	);
// };
// export default Carousel;


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import style from "../../Components/AllMovies/CaroaselComponents.module.css";
import { useRef,Fragment, useEffect, useState } from 'react';
import { GenreMovieData, fetchMovieGenre } from '../ApiHandler/getMovieGenre';


interface CarouselProps {
	genre: number;
}

const Carousel= (props:CarouselProps) => {
  const [swiperRef, setSwiperRef] = useState<any | null>(null);
const [DiscoverGenre, setDiscoverGenre] = useState<GenreMovieData[]>([]);

useEffect(() => {
  const fetchData = async () => {
    // let genre : number = 14;
    try {
      const moviesData = await fetchMovieGenre(props.genre);
      setDiscoverGenre(moviesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);
  return (
    <div className={style.carouselContainer}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}  
        spaceBetween={0}      
        navigation={true}
        modules={[Navigation]}
        
      >
        {DiscoverGenre.map((film) => (
          <SwiperSlide key={film.id}>
            <div className={style.filmContainer}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                className={style.filmImageCharacteristics}
              />
              <div className={style.filmTitle}>{film.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;


