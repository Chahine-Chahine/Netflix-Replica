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
// 		const increment = direction === "right" ? 120 : -120; // Reverse the increment direction
// 		const maxScrollPosition = (films.length - 1) * 299; // Assuming each box has a width of 299 pixels
	
// 		// Calculate the new scroll position
// 		let newScrollPosition = scrollPosition + increment;
	
// 		// Ensure it doesn't go beyond the boundaries
// 		newScrollPosition = Math.max(0, Math.min(newScrollPosition, maxScrollPosition));
	
// 		setScrollPosition(newScrollPosition);
// 	};

// 	return (
// 		<div className={style.carouselContainer}>
// 			<p className={style.genreTitle}>{genre}</p>
			
// 			<div className={style.Test}>
// 				<div className={style.scrollButtons}>
// 					<button
// 						onClick={() => handleScroll("left")}
// 						className={style.leftScroll}>
// 						<code>&lt;</code>
// 					</button>
// 				</div>
// 				<div className={style.filmContainerCharacteristic}>
// 					<div
// 						style={{
// 							display: "flex",
// 							flexDirection: "row",
// 							transform: `translateX(${-scrollPosition}px)`,
// 							transition: "transform 0.5s ease",
// 						}}>
// 						{films.map((film) => (
// 							<div
// 								key={film.id}
// 								className={style.filmContainer}>
//  								<img
// 									src={film.imageUrl}
// 									alt={film.title}
// 									className={style.filmImageCharacteristics}
// 								/>

// 								<div className={style.filmTitle}>{film.title}</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>

// 				<div>
// 					{" "}
// 					<button
// 						onClick={() => handleScroll("right")}
// 						className={style.rightScroll}>
// 						<code>&gt;</code>
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Carousel;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import style from "../../Components/AllMovies/CaroaselComponents.module.css";


// import required modules
import {Mousewheel, Navigation } from 'swiper/modules';

import { Film } from "./Film";

interface CarouselProps {
	films: Film[];
	genre: string;
}


const App: React.FC<CarouselProps> = ({ films, genre }) => {
  const [swiperRef, setSwiperRef] = useState<any | null>(null);

  return (
    <>
      <div className={style.container}>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
		  mousewheel={true}
          navigation={true}
          modules={[Mousewheel,Navigation]}
          className="mySwiper"
        >
								{films.map((film) => (
							<div
								key={film.id}
								className={style.filmContainer}>	
          <SwiperSlide>								
			<img
				src={film.imageUrl}
				alt={film.title}
				className={style.filmImageCharacteristics}/>
			</SwiperSlide>
			<div className={style.filmTitle}>{film.title}</div>
							</div>
						))}
        </Swiper>
      </div>
    </>
  );
};

export default App;