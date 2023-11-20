import './ImageThenText.css'
import image from './../../assets/HR-factory03.jpg'


function ImageThenText(){
    return(
        <>
        <div className="image-then-text">
            <div className="left-image">
                <img src={image} className='left-image-image'/>
            </div>
            <div className="right-text">
                <h1 className='right-text-title'>
                Download your shows to watch offline                </h1>
                <p className="right-text-text">
                Save your favorites easily and always have something to watch.
                </p>
            </div>
        </div>
        <div className='break-div'></div>
        </>
    )
}

export default ImageThenText;