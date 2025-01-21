import React from 'react'
import '../Css/MovieCard.css'

const Favories = ({ films, removeItem }) => {

    return (
        <div>
            {
                films?.map((film) => (
                    <div className='movie-card'>
                        <div className='movie-poster'>
                            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
                            <div className='movie-overlay'>

                            </div>
                        </div>
                        <div className='movie-info'>
                            <button className='favorie-btn' onClick={() => removeItem(film)}>
                                🤍
                            </button>
                            <h3>{film.title}</h3>
                            <p>{film.release_date}</p>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Favories


