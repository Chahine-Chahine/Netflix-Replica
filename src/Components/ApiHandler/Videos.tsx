import { Fragment, useEffect, useState } from 'react';
import { MovieVideoData, fetchMovieVideo } from './getMovieVideo';


function Video() {
  const [MovieVideo, setMovieVideo] = useState<MovieVideoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMovieVideo();
        setMovieVideo(moviesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 

  
  let FirstMovie = MovieVideo[4]; 

  return (
    <Fragment>
    <div>
      {FirstMovie && (
        <Fragment>
            <iframe width="200px" height="200px"src={`https://www.youtube.com/embed/${FirstMovie.key}`}></iframe>
        
          
          <h1>{FirstMovie.title}</h1>
        </Fragment>
      )}
    </div>
  </Fragment>
  );
}

export default Video;
