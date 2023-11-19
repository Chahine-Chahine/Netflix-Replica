// tmdbService.ts
const TMDB_API_KEY = 'bacbf2af719886e4ed1758de47d1c945';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
let genre = 80;

export interface GenreMovieData {
  id: number;
  poster_path: string | null;
  title: string;
}

export const fetchMovieGenre = async (): Promise<GenreMovieData[]> => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres= ${genre}`);
    const data = await response.json();

    if (response.ok) {
      return data.results;
    } else {
      throw new Error(`Error fetching popular movies: ${data.message}`);
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
