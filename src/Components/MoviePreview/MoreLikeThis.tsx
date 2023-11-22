import moreLikeThisStyles from  '../../Components/MoviePreview/MoreLikeThis.module.css'
import blurred from './../../../src/assets/blurred-bg.png'
import { Link } from 'react-router-dom';


function MoviePreview() {

    return (
        <>
        <div className={moreLikeThisStyles.container}></div>
            <div className={moreLikeThisStyles.title}>
                <h2>More Like This</h2>
            </div>

            <Link to={`/MoviePreview/${4}`} className={moreLikeThisStyles.cardContainer}>
                <img src={blurred} className={moreLikeThisStyles.card} alt="" />
                <img src={blurred} className={moreLikeThisStyles.card} alt="" />
                <img src={blurred} className={moreLikeThisStyles.card} alt="" />
                <img src={blurred} className={moreLikeThisStyles.card} alt="" />
                <img src={blurred} className={moreLikeThisStyles.card} alt="" />
            </Link>

        </>

    );
}

export default MoviePreview;