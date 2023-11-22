import FilmsContainer from '../../Components/AllMovies/FilmsContainer';
import style from "../../Components/AllMovies/CaroaselComponents.module.css";

const App= () => {
  return (
    
      <div className={style.allPage}>
        <FilmsContainer />
      </div>
  );
};

export default App;