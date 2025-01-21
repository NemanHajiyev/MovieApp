import React from 'react'
import '../Css/MovieCard.css'

const MovieCard = ({ movie }) => {
    console.log(movie)

    const addFavorie = () => {
        console.log(movie.title)
    }
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <div className='movie-overlay'>

                </div>
            </div>
            <div className='movie-info'>
                <button className='favorie-btn' onClick={addFavorie}>
                    🤍
                </button>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard
