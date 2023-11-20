import React from 'react';
import FilmsContainer from '../../Components/AllMovies/FilmsContainer';
import "../../Components/AllMovies/CaroaselComponents.css";

const App: React.FC = () => {
  return (
    
      <div className='all-page'>
        <FilmsContainer />
      </div>
  );
};

export default App;