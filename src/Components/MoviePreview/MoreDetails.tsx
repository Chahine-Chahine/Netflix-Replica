import moreDetailsStyles from './MoreDetails.module.css'

function MoreDetails(){
    return(
        <div className={moreDetailsStyles.moreDetails}>
            <h1 className={moreDetailsStyles.moredetailsHeader}>More Details</h1>
            <div className={moreDetailsStyles.detailsContainer}>
                <div className={moreDetailsStyles.detail}>
                    <p className={moreDetailsStyles.detailTitle}>Watch offline</p>
                    <p className={moreDetailsStyles.detailText}>Download and watch everywhere you go.</p>
                </div>
                <div className={moreDetailsStyles.detail}>
                    <p className={moreDetailsStyles.detailTitle}>Genres</p>
                    <p className={moreDetailsStyles.detailText}>Classic Movies, Crime Movies, Drama Movies, Thriller Movies</p>
                </div>
                <div className={moreDetailsStyles.detail}>
                    <p className={moreDetailsStyles.detailTitle}>This movie is...</p>
                    <p className={moreDetailsStyles.detailText}>Violent</p>
                </div>
                <div className={moreDetailsStyles.detail}>
                    <p className={moreDetailsStyles.detailTitle}>Audio</p>
                    <p className={moreDetailsStyles.detailText}>English - Audio Description, English [Original], French</p>
                </div>
                <div className={moreDetailsStyles.detail}>
                    <p className={moreDetailsStyles.detailTitle}>Subtitles</p>
                    <p className={moreDetailsStyles.detailText}>Arabic, English, French</p>
                </div>

            </div>
            <p className={moreDetailsStyles.castTitle}>Cast</p>
            <div className={moreDetailsStyles.detailsContainer}>
                <p className={moreDetailsStyles.castname}>Al Pacino</p>
                <p className={moreDetailsStyles.castname}>Steven Bauer</p>
                <p className={moreDetailsStyles.castname}>Mary Elizabeth Mastrantonio</p>
                <p className={moreDetailsStyles.castname}>Paul Shenar</p>
                <p className={moreDetailsStyles.castname}>Robert Loggia</p>
                <p className={moreDetailsStyles.castname}>Miriam Colon</p>
                <p className={moreDetailsStyles.castname}>F. Murray Abraham</p>
                <p className={moreDetailsStyles.castname}>Harris Yulin</p>
                <p className={moreDetailsStyles.castname}>Ángel Salazar</p>
                <p className={moreDetailsStyles.castname}>Pepe Serna</p>



            </div>
        </div>
    )
}

export default MoreDetails;