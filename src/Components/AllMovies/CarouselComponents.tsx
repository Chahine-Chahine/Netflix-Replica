import { Film } from "./Film";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import style from "../../Components/AllMovies/CaroaselComponents.module.css";

interface CarouselProps {
  films: Film[];
  genre: string;
}

const Carousel: React.FC<CarouselProps> = ({ films, genre }) => {
  const [swiperRef, setSwiperRef] = useState<any | null>(null);

  return (
    <div className={style.container}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {films.map((film) => (
          <SwiperSlide key={film.id}>
            <div className={style.filmContainer}>
              <img
                src={film.imageUrl}
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
