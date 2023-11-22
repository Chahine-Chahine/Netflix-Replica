// tmdbService.ts
const api_key = 'bacbf2af719886e4ed1758de47d1c945';
const base_url = 'https://api.themoviedb.org/3';


export interface MovieData {
  id: number;
  poster_path: string | null;
  title: string;
  overview: string;
  release_date: string;
}

export const fetchPopularMovies = async (): Promise<MovieData[]> => {
  try {
    const response = await fetch(`${base_url}/movie/popular?api_key=${api_key}`);
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
