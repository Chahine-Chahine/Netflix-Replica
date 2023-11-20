import './TextThenImage.css'
import image from './../../assets/HR-factory02.png'

interface Props {
    title: string;
    text: string;
    image: string;
}

function TextThenImage(props: Props){

    return(
        <>
        <div className="text-then-image">
            <div className="left-text">
                <h1 className='left-text-title'>
                    {props.title}
                </h1>
                <p className="left-text-text">
                    {props.text}
                </p>
            </div>
            <div className="right-image">
                <img src={props.image} className='right-image-image'/>
            </div>
        </div>
        <div className='break-div'></div>
        </>
    )
}

export default TextThenImage;