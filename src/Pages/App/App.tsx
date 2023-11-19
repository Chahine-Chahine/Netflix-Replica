import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMoviesPage from '../AllMoviesPage/AllMoviesPage';
import MoviePreview from '../MoviePreview/MoviePreview';

import Message from '../../Components/Message';
import './App.css'


function App() {
  return (
    <>

      {/* Route Configuration */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/AllMoviesPage" element={<AllMoviesPage />} />
            <Route path="/MoviePreview" element={<MoviePreview />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className='center'>
        <Message></Message>
        <p className='purple-bold'>A Big Hello from Chahine Team.<br></br>Let's Do This!</p>
      </div>
    </>
  );

}

export default App;