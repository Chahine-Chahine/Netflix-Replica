import React, { useState } from "react";
import { Film } from "./Film";

interface CarouselProps {
  films: Film[];
  genre: string;
}

const Carousel: React.FC<CarouselProps> = ({ films, genre }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const increment = direction === "left" ? 120 : -120; // Reverse the increment direction
    const maxScrollPosition = (films.length - 1) * 120; // Assuming each box has a width of 120 pixels

    // Calculate the new scroll position
    let newScrollPosition = scrollPosition + increment;

    // Ensure it doesn't go beyond the boundaries
    newScrollPosition = Math.max(0, Math.min(newScrollPosition, maxScrollPosition));

    setScrollPosition(newScrollPosition);
  };

  return (
    <div className="carousel-container">
      <p className="genre-title">{genre}</p>
      <div className="film-list-container" >
        <div
          className="film-list-content"
          style={{
            display: "flex",
            flexDirection: "row",
            width: `${films.length * 120}px`, // Adjust the width based on image box size
            transform: `translateX(${scrollPosition}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          {films.map((film) => (
            <div key={film.id} className="film-container">
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
      <button onClick={() => handleScroll("left")}>Scroll Left</button>
      <button onClick={() => handleScroll("right")}>Scroll Right</button>
    </div>
  );
};

export default Carousel;
