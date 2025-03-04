import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import store from './app/store.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import AddMovie from './components/AddMovie.jsx';
import MovieDetails from './components/MovieDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
<Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/addMovie" element={<AddMovie />} />
    <Route path="/addMovie/:movieId" element={<AddMovie />} />
    <Route path="/movieDetail/:movieId" element={<MovieDetails />} />
  </Routes>
</Router>    
    </Provider>
  </StrictMode>,
)


