import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Favories from "./Pages/Favories"
import { useState } from "react"

function App() {

  const [films, setFilms] = useState([]);

  const addFavorie = (movie) => {
    const isAlreadyFavorite = films.some((film) => film.id === movie.id);
    if (!isAlreadyFavorite) {
      setFilms([...films, movie]);
    } else {
      alert(`${movie.title} is already in favorites.`);
    }
  }

  const removeItem = (movie) => {
    const filtered = films.filter((film) => film.id !== movie.id);
    setFilms(filtered)
  };


  return (
    <div className="App" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addFavorie={addFavorie} />} />
        <Route path="/favorie" element={<Favories films={films} removeItem={removeItem} />} />
      </Routes>
    </div>
  )
}

export default App


