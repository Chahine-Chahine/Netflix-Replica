import './ImageThenText.css'

interface Props {
    title: string;
    text: string;
    image: string;
}

function ImageThenText(props: Props){
    return(
        <>
        <div className="image-then-text">
            <div className="left-image">
                <img src={props.image} className='left-image-image'/>
            </div>
            <div className="right-text">
                <h1 className='right-text-title'>
                    {props.title}
                </h1>
                <p className="right-text-text">
                    {props.text}
                </p>
            </div>
        </div>
        <div className='break-div'></div>
        </>
    )
}

export default ImageThenText;