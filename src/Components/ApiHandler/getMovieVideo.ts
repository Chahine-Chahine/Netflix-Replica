// tmdbService.ts
const TMDB_API_KEY = 'bacbf2af719886e4ed1758de47d1c945';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/';


export interface MovieVideoData {
  id: number;
  poster_path: string | null;
  title: string;
  key: string;
}

export const fetchMovieVideo = async (): Promise<MovieVideoData[]> => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}movie/297762/videos?api_key=${TMDB_API_KEY}&append_to_response=videos`);
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
