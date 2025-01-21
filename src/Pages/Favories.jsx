import React from 'react';
import '../Css/Favorie.css';
import { FaRegHeart } from "react-icons/fa";

const Favories = ({ films, removeItem }) => {
    return (
        <div className='favorieCard'>
            {films.length === 0 ? (
                <p className='no-favorites-message'>No favorites added yet.</p>
            ) : (
                films.map((film) => (
                    <div key={film.id} className='fav-card'>
                        <div className='fav-poster'>
                            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                            <div className='movie-overlay'></div>
                        </div>
                        <div className='fav-info'>
                            <FaRegHeart className='favorie-btn' onClick={() => removeItem(film)} />
                            <h3>{film.title}</h3>
                            <p>{film.release_date}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Favories;
