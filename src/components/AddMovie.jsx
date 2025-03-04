import React, { useState } from 'react'
import { Header } from './Header'
import { useDispatch } from 'react-redux'
import { addMovieAsync } from '../features/moviesSlice'

const AddMovie = () => {
  const [movieTitle, setMovieTitle] = useState("")
  const [director, setDirector] = useState("")
  const [genre, setGener] = useState("")

  const dispatch = useDispatch()

const handleSubmit = (event)=>{
  event.preventDefault()
  const newMovie ={movieTitle, director, genre}
  dispatch(addMovieAsync(newMovie))
  setMovieTitle("")
  setDirector("")
  setGener("")
}

  return (
    <>
    <Header/>
<div className='container'>
  <h1 className='my-3'>Add Movie</h1>
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
          />

          <br />
          <button className="btn btn-primary my-2" type="submit">
            Add
          </button>
        </form>
</div>

    </>
  )
}

export default AddMovie