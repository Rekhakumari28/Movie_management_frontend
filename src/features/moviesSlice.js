import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async()=>{
    const response = await axios.get("https://movies-management-backend.vercel.app/movies")
    const data = response.data
    return data
})

export const updateMovieAsync = createAsyncThunk("update/updateMovieAsync", async({movieId, updateMovie})=>{
    const response = await axios.put(`https://movies-management-backend.vercel.app/movies/${movieId}`,updateMovie)
    const data = response.data
    return data 
})

export const addMovieAsync  = createAsyncThunk("add/addMovieAsync", async(newMovie)=>{
    const response = await axios.post("https://movies-management-backend.vercel.app/movies", newMovie)
    const data = response.data
    return data
})

export const deleteMovieAsync = createAsyncThunk("delete/deleteMovieAsync", async(movieId)=>{
    const response = await axios.delete(`https://movies-management-backend.vercel.app/movies/${movieId}`)
    const data = response.data
    return data
})


export const moviesSlice = createSlice({
    name: "Movies",
    initialState:{
        movies: [],
        status: "idle",
        error: null
    },
    reducers:{},
    extraReducers: (builder) =>{
 //fetch movies

 builder.addCase(fetchMovies.pending, (state)=>{
    state.status = "Loading"
})
builder.addCase(fetchMovies.fulfilled, (state,action)=>{
    state.status = "Success"
    state.movies = action.payload
})
builder.addCase(fetchMovies.rejected , (state, action)=>{
    state.status = "error"
    state.error = action.error.message
})

//add movies
builder.addCase(addMovieAsync.pending, (state)=>{
    state.status = "Loading"
})
builder.addCase(addMovieAsync.fulfilled, (state,action)=>{
    state.status = "Movie added successfully"
    const addedMovie = action.payload;
    console.log(addedMovie, "addedMovie");
})
builder.addCase(addMovieAsync.rejected , (state, action)=>{
    state.status = "error"
    state.error = action.error.message
})


// delete Movie
 builder.addCase(deleteMovieAsync.pending, (state)=>{
    state.status = "Loading"
})
builder.addCase(deleteMovieAsync.fulfilled, (state,action)=>{
    state.status = "Movie deleted successfully"
    const deletedMovie = action.payload;
    console.log(deletedMovie, "deletedMovie");
})
builder.addCase(deleteMovieAsync.rejected , (state, action)=>{
    state.status = "error"
    state.error = action.error.message
})
    }
})

export default  moviesSlice.reducer