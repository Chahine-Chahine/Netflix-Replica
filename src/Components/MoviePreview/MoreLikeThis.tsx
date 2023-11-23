import moreLikeThisStyles from '../../Components/MoviePreview/MoreLikeThis.module.css'
import blurred from './../../../src/assets/blurred-bg.png'
import { Link } from 'react-router-dom';
import { IdData, fetchSimilarMovies } from '../ApiHandler/similar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';


function MoviePreview() {
    const [byId, setById] = useState<IdData[]>([]);
    //   let params = useParams();
    const { id } = useParams();
    console.log("in more like this", { id })


    useEffect(() => {

        const fetchDataId = async () => {
            try {
                const moviesData = await fetchSimilarMovies(Number(id));
                setById(moviesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataId();
    }, [Number(id)]);

    const id_list = byId.slice(0, 7).map((id) =>

        <Link to={`/MoviePreview/${id.id}`} className={moreLikeThisStyles.cardContainer}>
            <img src={`https://image.tmdb.org/t/p/w500${id.backdrop_path}`} className={moreLikeThisStyles.card} alt="" /> 
        </Link>
       

    );



    return (
        <>
            <div className={moreLikeThisStyles.container}></div>
            <div className={moreLikeThisStyles.title}>
                <h2>More Like This</h2>
            </div>

            <div className={moreLikeThisStyles.cardContainer}>
                {id_list}
            </div>

        </>

    );
}

export default MoviePreview;