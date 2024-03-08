import './App.css';
import Navbar from './pages/navbar';
import HomePage from './pages/homePage';
import Movies from './pages/movies';
import TV from './pages/tv';
import Free from './pages/free';
import MyFrame from './pages/myFrame';
import Footer from './pages/footer';
import MovieDetails from './pages/movieDetails';
import SerieDetails from './pages/serieDetails';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/series/:id" element={<SerieDetails />} />
            <Route path="/free" element={<Free />} />
            <Route path="/myFrame" element={<MyFrame />} />
          </Routes> 
        </div>
      <Footer />
    </Router>
     
  
  );
}

export default App;
