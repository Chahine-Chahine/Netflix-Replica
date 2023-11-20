import { Fragment, useEffect, useState } from "react";
import { UpcomingMovieData, fetchUpcomingMovies } from "../ApiHandler/getupcoming";
import "./Upcoming.css"

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
      {upcomingMovies.map((movie) => (
        <div className="upcoming-card">
          <div className="upcoming-title">{movie.title}</div>
          <div className="upcoming-description">{movie.overview}</div>
        </div>
      ))}
    </>
  );
}

export default Upcoming;
