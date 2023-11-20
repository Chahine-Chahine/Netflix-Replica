import React, { useState } from "react";
import { Film } from "./Film";
import style from "../../Components/AllMovies/CaroaselComponents.module.css";

interface CarouselProps {
  films: Film[];
  genre: string;
}

const Carousel: React.FC<CarouselProps> = ({ films, genre }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const increment = direction === "right" ? 120 : -120; // Reverse the increment direction
    const maxScrollPosition = (films.length - 1) * 200; // Assuming each box has a width of 120 pixels

    // Calculate the new scroll position
    let newScrollPosition = scrollPosition + increment;

    // Ensure it doesn't go beyond the boundaries
    newScrollPosition = Math.max(0, Math.min(newScrollPosition, maxScrollPosition));

    setScrollPosition(newScrollPosition);
  };

  return (
    <div className={style.carouselContainer}>
   		
	  <p className={style.genreTitle}>{genre}</p>
		<div></div>
		<button onClick={() => handleScroll("left")} className={style.leftScroll}><code>&lt;</code></button>
		<button onClick={() => handleScroll("right")} className={style.rightScroll}><code>&gt;</code></button>
      <div className={style.filmContainerCharacteristic}>
		
        <div
          className={style.filmListContent}
          style={{
            display: "flex",
            flexDirection: "row",
            width: `${films.length * 120}px`, // Adjust the width based on image box size
            transform: `translateX(${-scrollPosition}px)`,
            transition: "transform 0.5s ease",
          }}>
		


          {films.map((film) => (
            <div key={film.id} className={style.filmContainer}>
              <img
                src={film.imageUrl}
                alt={film.title}
                className={style.filmImageCharacteristics}
              />
			  
              <div className={style.filmTitle}>{film.title}</div>
            </div>
          ))}
        </div>
      </div>
      
      
    </div>
  );
};

export default Carousel;
