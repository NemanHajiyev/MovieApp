import MovieCard from "./Components/MovieCard"
import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Favories from "./Pages/Favories"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorie" element={<Favories />} />
      </Routes>
    </div>
  )
}

export default App
