import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieAsync, fetchMovies } from "../features/moviesSlice";
import { Header } from "./Header";
import { Link } from "react-router-dom";

const MoviesView = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  console.log(movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const handleDelete = (movieId) => {
    dispatch(deleteMovieAsync(movieId));
    setTimeout(()=>{
      window.location.reload()
    },2000)
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="my-3">MoviesView</h1>
        {status === "Loading" ? (
          <p className="bg-success-subtle text-success-emphasis p-3 rounded">
            {status}
          </p>
        ) : (
          <ul className="list-group">
            {movies &&
              movies.length > 0 &&
              movies.map((movie) => (
                <li key={movie._id} className="list-group-item">
                  <Link
                    to={`/movieDetail/${movie._id}`}
                    className="text-black text-blue-hover link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    {movie.movieTitle} 
                  </Link>
                  <span>
                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="btn btn-outline-danger float-end"
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
          </ul>
        )}
        {error && (
          <p className="bg-danger-subtle text-danger-emphasis p-3 rounded">
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default MoviesView;
