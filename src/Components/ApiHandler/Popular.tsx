import { Fragment, useEffect, useState } from 'react';
import { MovieData, fetchPopularMovies } from './popularFetch';

function Popular() {
  const [popularMovies, setPopularMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchPopularMovies();
        setPopularMovies(moviesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 

  
  let lastMovie = popularMovies[0]; 

  return (
    <Fragment>
    <div>
      {lastMovie && (
        <Fragment>
          <img
            src={`https://image.tmdb.org/t/p/w500${lastMovie.poster_path}`}
            alt={lastMovie.title}
          />
          <h1>{lastMovie.title}</h1>
          <p>{lastMovie.overview}</p>
          <h4>{lastMovie.release_date}</h4>
        </Fragment>
      )}
    </div>
  </Fragment>
  );
}


