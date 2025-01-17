import MovieCard from "./Components/MovieCard"

function App() {

  return (
    <div>
      <MovieCard movie={{ title: "Film-1", relase_date: "2022" }} />
      <MovieCard movie={{ title: "Film-2", relase_date: "2019" }} />
    </div>
  )
}

export default App
