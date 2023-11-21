// tmdbService.ts
const api_key = 'bacbf2af719886e4ed1758de47d1c945';
const base_url = 'https://api.themoviedb.org/3/';


export interface MovieVideoData {
  id: number;
  poster_path: string | null;
  title: string;
  key: string;
  name: string;
}

export const fetchMovieVideo = async (): Promise<MovieVideoData[]> => {
  try {
    const response = await fetch(`${base_url}movie/297762/videos?api_key=${api_key}&append_to_response=videos`);
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
