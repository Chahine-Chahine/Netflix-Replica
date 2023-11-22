import { Link } from 'react-router-dom';
import headerStyles from './HeaderMoviePreview.module.css'
import background from './../../../src/assets/headerBg.jpg'
import titleLogo from './../../../src/assets/titleLogo.png'
import logoN from './../../../src/assets/logo-n.png'
import { Fragment, useEffect, useState } from 'react';
import { MovieData, fetchPopularMovies } from '../ApiHandler/popularFetch';


let genreComparison = [28,14,878];
let genreName = ["Action","Fantasy","Science Fiction"]

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

    if (popularMovies.length === 0) {
        return <div>Loading...</div>; // or some other loading indicator
    }

    let lastMovie = popularMovies[0];

    // Check if lastMovie is defined before trying to access its properties
    if (!lastMovie || !lastMovie.genre_ids) {
        return <div>No movie data available</div>; // or handle this case accordingly
    }

    let genre = lastMovie.genre_ids[0];
    let finalGenre = "";
    for(let i=0; i<genreComparison.length; i++){
        if(genre === genreComparison[i]){
             finalGenre =genreName[i];
        }
    }

    return (
        
        <Fragment>
        <div>
          {lastMovie && (
            <Fragment>
                <div className={headerStyles.headerContainer}>
               <img className={headerStyles.imageContainer}  src={`https://image.tmdb.org/t/p/w500${lastMovie.backdrop_path}`}alt={lastMovie.title}/>
                <div className={headerStyles.contentContainer}>
                    <h2 className={headerStyles.titleLogo}>{lastMovie.title}</h2>
                    <div className={headerStyles.title}><h2>{lastMovie.title}</h2></div>
                    <div className={headerStyles.movieInfo}>
                        <div className={headerStyles.date}>
                            {lastMovie.release_date.slice(0,4)} |
                        </div>
                        <div className={headerStyles.maturity}>
                          +16
                        </div>
                        <div className={headerStyles.duration}>
                            | 2h 49min |
                        </div>
                        <div className={headerStyles.genre}>
                            {finalGenre}
                        </div>
                    </div>

                    <div className={headerStyles.movieDescription}>
                        {lastMovie.overview}
                    </div>

                    <div className={headerStyles.cast}>
                        <span>Starring : </span>
                        <div className={headerStyles.movieActor}>Al Pacino,</div>
                        <div className={headerStyles.movieActor}>Leo decatto,</div>
                    </div>

                </div>

                <div className={headerStyles.headerJoin}>
                    <div className={headerStyles.headerJoinLeft}>
                        <img src={logoN} alt="" />
                        <h3>Watch all you want</h3>
                    </div>
                    <div className={headerStyles.headerJoinRight}>
                        <Link to='../AllMoviesPage' className={headerStyles.btnLogin}>
                            JOIN NOW
                        </Link>

                    </div>
                </div>
                </div>
            </Fragment>
          )}
        </div>

 
           

   <Fragment/>
   </Fragment>


    );
}
export default Popular;

