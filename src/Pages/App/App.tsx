import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMoviesPage from '../AllMoviesPage/AllMoviesPage';
import MoviePreview from '../MoviePreview/MoviePreview';

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

      
    </>
  );

}

export default App;