import moreLikeThisStyles from  '../../Components/MoviePreview/MoreLikeThis.module.css'
import blurred from './../../../src/assets/blurred-bg.png'
import { Link } from 'react-router-dom';
import { IdData, fetchById } from '../ApiHandler/ById';
import { useState } from 'react';
import { useEffect } from 'react';

function MoviePreview() {
  const [byId, setById] = useState<IdData[]>([]);

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const moviesData = await fetchById(670292);
        setById(moviesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataId();  
  }, []);

  const id_list = byId.slice(0,7).map((id) =>   <img src={`https://image.tmdb.org/t/p/w500${id.backdrop_path}`} className={moreLikeThisStyles.card} alt="" />);

    return (
        <>
        <div className={moreLikeThisStyles.container}></div>
            <div className={moreLikeThisStyles.title}>
                <h2>More Like This</h2>
            </div>

            <Link to='../AllMoviesPage' className={moreLikeThisStyles.cardContainer}>
                {id_list}
            </Link>

        </>

    );
}

export default MoviePreview;