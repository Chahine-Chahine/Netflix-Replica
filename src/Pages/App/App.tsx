import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMoviesPage from '../AllMoviesPage/AllMoviesPage';
import MoviePreview from '../MoviePreviewPage/MoviePreviewPage';
import HomePage from '../HomePage/HomePage';

import '../App/App.css'
import Popular from '../../Components/ApiHandler/Popular';


function App() {
  return (

      <div>
        <h1>hello</h1>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/AllMoviesPage" element={<AllMoviesPage />} />
            <Route path="/MoviePreview" element={<MoviePreview />} />
          </Routes>
        </BrowserRouter>
      </div>

  );

}

export default App;