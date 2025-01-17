import React from 'react'

const MovieCard = ({ movie }) => {

    const addFavorie = () => {
        console.log("Click")
    }
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.url} />
                <div className='movie-overlay'>
                    <button className='favorie-btn' onClick={addFavorie}>
                        🤍
                    </button>
                </div>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.relase_date}</p>
            </div>

        </div>
    )
}

export default MovieCard
