import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../features/moviesSlice";
import { Header } from "./Header";

const MovieDetails = () => {
  const movieId = useParams();
  const {movies} = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const movieData = movieId && movies && movies.find(movie=> movie._id === movieId.movieId)
console.log(movieData)
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return <div> <Header/>
  <div className='container'>
    <h1 className='my-3'>Movie Details</h1>
  
  <div className='row'>
    
    <div className='col-md-7 border rounded p-3'>
      <h5>{movieData?.movieTitle}</h5>
      <p className='mb-2 mt-4'>Director: {movieData?.director}</p>
      <p className='mb-2'>Genre: {movieData?.genre}</p>  

    </div>
  </div>

  </div></div>;
};

export default MovieDetails;
