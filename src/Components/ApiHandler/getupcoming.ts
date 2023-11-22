// tmdbService.ts
const api_key = 'bacbf2af719886e4ed1758de47d1c945';
const base_url = 'https://api.themoviedb.org/3';


export interface UpcomingMovieData {
  id: number;
  title: string;
  overview: string;
}

export const fetchUpcomingMovies = async (): Promise<UpcomingMovieData[]> => {
  try {
    const response = await fetch(`${base_url}/movie/upcoming?api_key=${api_key}`);
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
