import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
      <p className='mb-2 mt-3'>Director: {movieData?.director}</p>
      <p className='mb-2'>Genre: {movieData?.genre}</p>  
       {movieData?.releaseYear ? <p className='mb-2'>Release Year: {movieData?.releaseYear}</p> :""} 
       {movieData?.actors ? <p className='mb-2'>Actors: {movieData?.actors}</p>  : ""}
       {movieData?.rating ? <p className='mb-2'>Rating: {movieData?.rating}</p>    :""}
      
      <Link className="bg-warning text-emphesis-warning py-2 px-3 mt-4 rounded" to={ `/addMovie/${movieData._id}`}>Edit</Link>
    </div>
  </div>

  </div></div>;
};

export default MovieDetails;
