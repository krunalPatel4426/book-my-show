import { Route, Routes } from 'react-router-dom';
import './App.css';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


import HomePage from './Pages/Home.page';
import MoviePage from './Pages/Movie.page';
import PlayPage from './Pages/Play.page';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies/:id' element={<MoviePage />} />
      <Route path='/plays' element={<PlayPage />} />

    </Routes>
  );
}

export default App;
