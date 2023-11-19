// import Popular from '../../Components/ApiHandler/Popular';
import { Fragment, useEffect, useState } from "react";
import '../App/App.css'

function MoviePreview() {


    const [popularMovies, setPopularMovies] = useState([]);

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=bacbf2af719886e4ed1758de47d1c945")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getMovie();
  }, []);

    return (
        <>
            <div className='center'>
                <p className='purple-bold'>Movie Preview Page.</p>
            </div>
            {/* <Popular/> */}
          
        </>

    );
}

export default MoviePreview;