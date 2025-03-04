import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addMovieAsync, updateMovieAsync } from "../features/moviesSlice";
import { useParams } from "react-router-dom";

const AddMovie = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGener] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [actors, setActors] = useState("");
  const [rating, setRating] = useState("");

  const movieId = useParams();
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const moviesExist =
    movieId && movies && movies.find((movie) => movie._id == movieId.movieId);
  const existing = Boolean(moviesExist);

useEffect(()=>{
  if (existing) {
    setMovieTitle(moviesExist.movieTitle || "");
    setDirector(moviesExist.director || "");
    setGener(moviesExist.genre || "");
    setReleaseYear(moviesExist.releaseYear || ""),
    setActors(moviesExist.actors || "")
    setRating(moviesExist.rating || "")
  }
},[existing, moviesExist])


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!existing){
      const newMovie = { movieTitle, director, genre };
      dispatch(addMovieAsync(newMovie));
      setMovieTitle("");
      setDirector("");
      setGener("");
    }else{
      const movieId = movieId.movieId
      const updateMovie = { movieTitle, director, genre, releaseYear: parseInt(releaseYear), actors, rating: parseInt(rating) };
      dispatch(updateMovieAsync({movieId ,updateMovie}));
      setMovieTitle("");
      setDirector("");
      setGener("");
      setReleaseYear(""),
      setActors("")
      setRating("")
    }
  
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="my-3">{existing ? "Edit Movie" : "Add Movie" }</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: "50%" }}
            className="form-control "
            type="text"
            placeholder="Movie Tital"
            value={movieTitle}
            onChange={(event) => setMovieTitle(event.target.value)}
          />
          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Director"
            value={director}
            onChange={(event) => setDirector(event.target.value)}
          />

          <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(event) => setGener(event.target.value)}
          /> <br />
          {existing ?  (
            <>
            <input
            style={{ width: "50%" }}
            className="form-control"
            type="Number"
            placeholder="Release Year"
            value={releaseYear}
            onChange={(event) => setReleaseYear(event.target.value)}
          /> <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="text"
            placeholder="Actors"
            value={actors}
            onChange={(event) => setActors(event.target.value)}
          /> <br />
          <input
            style={{ width: "50%" }}
            className="form-control"
            type="Number"
            placeholder="Rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
            
            </>
          ) : "" }
          

          <br />
          <button className="btn btn-primary my-2" type="submit">
           {existing ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddMovie;
