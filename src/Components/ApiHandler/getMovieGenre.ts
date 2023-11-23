// tmdbService.ts
const api_key = 'bacbf2af719886e4ed1758de47d1c945';
const base_url = 'https://api.themoviedb.org/3';

export interface GenreMovieData {
  id: number;
  poster_path: string | null;
  title: string;
  overview : string;
  release_date: string;
  genre_id : number;
}

export const fetchMovieGenre = async (genre: number): Promise<GenreMovieData[]> => {
  try {
    const response = await fetch(`${base_url}/discover/movie?api_key=${api_key}&with_genres= ${genre}`);
    const data = await response.json();

    if (response) {
      return data.results;
    } else {
      throw new Error(`Error fetching popular movies: ${data.message}`);
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
