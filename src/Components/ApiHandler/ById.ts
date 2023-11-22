const api_key = 'bacbf2af719886e4ed1758de47d1c945';
const base_url = 'https://api.themoviedb.org/3';

export interface IdData {
  id: number;
  poster_path: string | undefined;
  title: string;
  overview : string;
  release_date: string;
  genre_id : number;
  backdrop_path: string;
}

export const fetchById = async (id: number): Promise<IdData[]> => {
  try {
    const response = await fetch(`${base_url}/movie/${id}/similar?api_key=${api_key}`);
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
