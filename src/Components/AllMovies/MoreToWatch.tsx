
import { Link } from 'react-router-dom';
import blurred from './../../../src/assets/blurred-bg.png'
import styles from './MoreToWatch.module.css';

function MoreToWatch() {
    return (
        <>

        <div className={styles.moreToWatch}>

            <div className={styles.img}>
                <img  src={blurred} alt="" />
            </div>

            <div className={styles.moreToWatchBottom}>

                <div className={styles.moreToWatchText}>
                    <h2>There’s even more to watch.</h2>
                </div>

                <div className={styles.moreToWatchDescription}>
                    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                </div>
                <Link to='../AllMoviesPage' className={styles.btnLogin}>
                    JOIN NOW
                </Link>
            </div>

        </div>

       
        
        
        </>
        
    )

}

export default MoreToWatch;