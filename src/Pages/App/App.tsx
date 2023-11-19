import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllMoviesPage from '../AllMoviesPage/AllMoviesPage';
import MoviePreview from '../MoviePreview/MoviePreview';
import HomePage from '../HomePage/HomePage';


import '../App/App.css'
import '../../Components/Common/Footer.css'
import '../../Components/Common/Footer.css'
import '../../Components/Common/NavBarPages.css'


function App() {
  return (

      <div>
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