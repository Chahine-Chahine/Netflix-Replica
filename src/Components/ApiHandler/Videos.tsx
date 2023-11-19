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
 

  
  let videoIndex = MovieVideo[15]; 

  return (
    <Fragment>
    <div>
      {videoIndex && (
        <Fragment>
            <iframe width="200px" height="200px"src={`https://www.youtube.com/embed/${videoIndex.key}`}></iframe>
          <h1>{videoIndex.name}</h1>
        </Fragment>
      )}
    </div>
  </Fragment>
  );
}

export default Video;
