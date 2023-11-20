import './TextThenImage.css'
import image from './../../assets/HR-factory02.png'


function TextThenImage(){
    return(
        <>
        <div className="text-then-image">
            <div className="left-text">
                <h1 className='left-text-title'>
                    Enjoy on your TV
                </h1>
                <p className="left-text-text">
                    Watch on Smart TVs, Playstation, Xbox,
                    Chromecast, Apple TV, Blu-ray players, and more.
                </p>
            </div>
            <div className="right-image">
                <img src={image} className='right-image-image'/>
            </div>
        </div>
        <div className='break-div'></div>
        </>
    )
}

export default TextThenImage;