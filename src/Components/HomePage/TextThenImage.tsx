import TextImage from './TextThenImage.module.css'

interface Props {
    title: string;
    text: string;
    image: string;
    videoSrc: string;
    videoStyle: string;
}

function TextThenImage(props: Props){

    return(
        <>
        <div className={TextImage.textthenimage}>
            <div className={TextImage.lefttext}>
                <h1 className={TextImage.lefttexttitle}>
                    {props.title}
                </h1>
                <p className={TextImage.lefttexttext}>
                    {props.text}
                </p>
            </div>
            <div className={TextImage.rightimage}>
                <img src={props.image} className={TextImage.rightimageimage}/>
                <video className={props.videoStyle} autoPlay playsInline muted loop>
                    <source src={props.videoSrc}
                     type="video/mp4"/>
                </video>
            </div>
        </div>
        <div className={TextImage.breakDiv}></div>
        </>
    )
}

export default TextThenImage;