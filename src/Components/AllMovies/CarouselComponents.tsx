import { useRef,Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from "../../Components/AllMovies/CaroaselComponents.module.css";
import {Mousewheel, Navigation } from 'swiper/modules';
import { GenreMovieData, fetchMovieGenre } from '../ApiHandler/getMovieGenre';
import { Link } from 'react-router-dom';



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

        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        onSwiper={setSwiperRef}
        // slidesPerView={4}
        centeredSlides={false}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}

      >
        {DiscoverGenre.map((film) => (
          <SwiperSlide key={film.id}>
            <div className={style.filmContainer}>
            <Link to={`/MoviePreview/${film.id}`} >
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                className={style.filmImageCharacteristics}/>
                </Link>
              <div className={style.filmTitle}>{film.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;


