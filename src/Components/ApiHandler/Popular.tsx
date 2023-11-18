import { useEffect, useState } from "react";

interface MovieData {
  id: number;
  poster_path: string | null;
  title: string;
}

function Popular() {
  const [popularMovies, setPopularMovies] = useState<MovieData[]>([]);

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=bacbf2af719886e4ed1758de47d1c945")
      .then((res) => res.json())
      .then((json: { results: MovieData[] }) => setPopularMovies(json.results))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(popularMovies);

  return (
    <div>
      {popularMovies.map((movie) => (
        <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      ))}
    </div>
  );
}

export default Popular;
