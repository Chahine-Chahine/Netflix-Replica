import { Fragment, useEffect, useState } from "react";
import { UpcomingMovieData, fetchUpcomingMovies } from "../ApiHandler/getupcoming";
import upcomingStyles from "./Upcoming.module.css"

function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchUpcomingMovies();
        setUpcomingMovies(moviesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      {upcomingMovies.slice(1,8).map((movie) => (
        <div className={upcomingStyles.upcomingCard}>
          <div className={upcomingStyles.upcomingTitle}>{movie.title}</div>
          <div className={upcomingStyles.upcomingDescription}>{movie.overview}</div>
        </div>
      ))}
    </>
  );
}

export default Upcoming;
