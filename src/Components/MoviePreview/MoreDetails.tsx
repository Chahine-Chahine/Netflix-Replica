import moreDetailsStyles from './MoreDetails.module.css'

function MoreDetails(){

    const cast=["Al Pacino",
                "Steven Bauer",
                "Michelle Pfeiffer",
                "Mary Elizabeth Mastrantonio",
                "Paul Shenar",
                "Robert Loggia",
                "Miriam Colon",
                "F. Murray Abraham",
                "Harris Yulin",
                "Ángel Salazar",
                "Pepe Serna"];

    const Cast = cast.map((item) => (
        <p className={moreDetailsStyles.castname}>{item}</p>
      ));

    const details=[{title: "Watch offline",
                    text:"Download and watch everywhere you go."},
                    {title: "Genres",
                    text:"Classic Movies, Crime Movies, Drama Movies, Thriller Movies"},
                    {title: "This movie is...",
                    text:"Violent"},
                    {title: "Audio",
                    text:"English - Audio Description, English [Original], French"},
                    {title: "Subtitles",
                    text:"Arabic, English, French"}]

        const Details = details.map((item) => (
            <div className={moreDetailsStyles.detail}>
            <p className={moreDetailsStyles.detailTitle}>{item.title}</p>
            <p className={moreDetailsStyles.detailText}>{item.text}</p>
        </div>
        ));

    return(
        <div className={moreDetailsStyles.moreDetails}>
            <h1 className={moreDetailsStyles.moredetailsHeader}>More Details</h1>
            <div className={moreDetailsStyles.detailsContainer}>
                {Details}
            </div>
            <p className={moreDetailsStyles.castTitle}>Cast</p>
            <div className={moreDetailsStyles.detailsContainer}>
                {Cast}
            </div>
        </div>
    )
}

export default MoreDetails;