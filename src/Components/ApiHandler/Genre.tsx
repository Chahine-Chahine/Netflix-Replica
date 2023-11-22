import { Fragment, useEffect, useState } from 'react';
import { MovieData, fetchPopularMovies } from './popularFetch';
import { fetchMovieGenre } from './getMovieGenre';

function Discover() {
  const [DiscoverGenre, setDiscoverGenre] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMovieGenre(35);
        setDiscoverGenre(moviesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 

  
  let FirstMovie = DiscoverGenre[10]; 

  return (
    <Fragment>
    <div>
      {FirstMovie && (
        <Fragment>
          <img
            src={`https://image.tmdb.org/t/p/w500${FirstMovie.poster_path}`}
            alt={FirstMovie.title}
          />
          <h1>{FirstMovie.title}</h1>
          <p>{FirstMovie.overview}</p>
          <h4>{FirstMovie.release_date}</h4>
        </Fragment>
      )}
    </div>
  </Fragment>
  );
}

export default Discover;
