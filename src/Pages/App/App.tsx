import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMoviesPage from '../AllMoviesPage/AllMoviesPage';
import MoviePreview from '../MoviePreviewPage/MoviePreviewPage';
import HomePage from '../HomePage/HomePage';

import '../App/App.css'


function App() {
  return (

      <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/AllMoviesPage" element={<AllMoviesPage />} />
            <Route path="/MoviePreviewPage" element={<MoviePreview />} />
          </Routes>
        </BrowserRouter>
      </div>

       
  );

}

export default App;