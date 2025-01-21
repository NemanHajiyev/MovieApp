import React from 'react'
import '../Css/MovieCard.css'
import { FaRegHeart } from "react-icons/fa";


const MovieCard = ({ movie, addFavorie }) => {
    const FavorieAdd = () => {
        addFavorie(movie)
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <div className='movie-overlay'>

                </div>
            </div>
            <div className='movie-info'>

                <FaRegHeart className='favorie-btn' onClick={FavorieAdd} />

                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard
