import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "../features/moviesSlice";

export default configureStore({
    reducer:{
        movies: moviesSlice.reducer
    }
})