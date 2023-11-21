import ImageText from './ImageThenText.module.css'

interface Props {
    title: string;
    text: string;
    image: string;
}

function ImageThenText(props: Props){
    return(
        <>
        <div className={ImageText.imagethentext}>
            <div className={ImageText.leftimage}>
                <img src={props.image} className={ImageText.leftimageimage}/>
            </div>
            <div className={ImageText.righttext}>
                <h1 className={ImageText.righttexttitle}>
                    {props.title}
                </h1>
                <p className={ImageText.righttexttext}>
                    {props.text}
                </p>
            </div>
        </div>
        <div className={ImageText.breakDiv}></div>
        </>
    )
}

export default ImageThenText;