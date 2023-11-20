import moreLikeThisStyles from  '../../Components/MoviePreview/MoreLikeThis.module.css'


function MoviePreview() {

    return (
        <>
        <div className={moreLikeThisStyles.container}></div>
            <div className={moreLikeThisStyles.title}>
                <h2>More Like This</h2>
            </div>

            <div className={moreLikeThisStyles.cardContainer}>
                <div className={moreLikeThisStyles.card}></div>
                <div className={moreLikeThisStyles.card}></div>
                <div className={moreLikeThisStyles.card}></div>
                <div className={moreLikeThisStyles.card}></div>
                <div className={moreLikeThisStyles.card}></div>
                <div className={moreLikeThisStyles.card}></div>
                <div className={moreLikeThisStyles.card}></div>

            </div>

        </>

    );
}

export default MoviePreview;