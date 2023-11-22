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
                    <p className={moreDetailsStyles.detailTitle}>Watch offline</p>
                    <p className={moreDetailsStyles.detailText}>Download and watch everywhere you go.</p>
                </div>
                <div className={moreDetailsStyles.detail}>
                    <p className={moreDetailsStyles.detailTitle}>Watch offline</p>
                    <p className={moreDetailsStyles.detailText}>Download and watch everywhere you go.</p>
                </div>
                <div className={moreDetailsStyles.detail}>
                    <p className={moreDetailsStyles.detailTitle}>Watch offline</p>
                    <p className={moreDetailsStyles.detailText}>Download and watch everywhere you go.</p>
                </div>

            </div>
        </div>
    )
}

export default MoreDetails;