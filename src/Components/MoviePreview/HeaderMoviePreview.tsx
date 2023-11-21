import blurred from './../../../src/assets/blurred-bg.png'
import { Link } from 'react-router-dom';
import headerStyles from './HeaderMoviePreview.module.css'
import background from './../../../src/assets/headerBg.jpg'
import titleLogo from './../../../src/assets/titleLogo.png'
import logoN from './../../../src/assets/logo-n.png'
import navbarStyles from '../../Components/Common/NavBarPages.module.css'



function HeaderMoviePreview() {

    return (
        <>
            <div className={headerStyles.headerContainer} style={{ backgroundImage: `url(${background})` }}>
                {/* <div className={headerStyles.imageContainer}  ></div> */}
                <div className={headerStyles.contentContainer}>
                    <img className={headerStyles.titleLogo} src={titleLogo} alt="" />
                    <div className={headerStyles.title}><h2>Scarface</h2></div>
                    <div className={headerStyles.movieInfo}>
                        <div className={headerStyles.date}>
                            1983 |
                        </div>
                        <div className={headerStyles.maturity}>
                            18+
                        </div>
                        <div className={headerStyles.duration}>
                            | 2h49min |
                        </div>
                        <div className={headerStyles.genre}>
                            Thrillers
                        </div>
                    </div>

                    <div className={headerStyles.movieDescription}>
                        In a ruthless rise to Miami drug lord, a Cuban-born gangster descends into addiction, obsession and brutality, with grisly consequences.
                    </div>

                    <div className={headerStyles.cast}>
                        <span>Starring : </span>
                        <div className={headerStyles.movieActor}>Al Pacino,</div>
                        <div className={headerStyles.movieActor}>Al Pacino,</div>
                    </div>

                </div>

                <div className={headerStyles.headerJoin}>
                    <div className={headerStyles.headerJoinLeft}>
                        <img src={logoN} alt="" />
                        <h3>Watch all you want</h3>
                    </div>
                    <div className={headerStyles.headerJoinRight}>
                        <Link to='../AllMoviesPage' className={headerStyles.btnLogin}>
                            JOIN NOW
                        </Link>
                     
                    </div>
                </div>
            </div>

        </>

    );
}

export default HeaderMoviePreview;