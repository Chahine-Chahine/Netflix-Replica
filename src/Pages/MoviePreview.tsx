import Movie from '../Components/ApiHandler/Popular';
import './App.css'

function MoviePreview() {
    return (
        <>
            <div className='center'>
                <p className='purple-bold'>Movie Preview Page.</p>
            </div>
            <Movie></Movie>
        </>

    );
}

export default MoviePreview;