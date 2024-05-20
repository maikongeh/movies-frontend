import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import Layout  from './components/Layout';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer'; 
import Reviews from './components/reviews/Reviews';



function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get('api/v1/movies');
      setMovies(response.data);
      setReviews(response.data.reviews);

    } catch (error) {
      console.log(error); 
    }
  
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`api/v1/movies/imdb/${movieId}`);
      console.log(response.data);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();

  }, []);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element = {<Layout/> }> 
          <Route path='/' element = {<Home movies = {movies}/>} > </Route>
          <Route path='/Trailer/:tyTrailerId' element = {<Trailer/>} > </Route>
          <Route path='/Reviews/:movieId' element = {<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>} > </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
