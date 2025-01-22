import React, { useState } from 'react';
import '../Css/MovieCard.css';
import { FaRegHeart } from "react-icons/fa";
import Modal from './Modal'

const MovieCard = ({ movie, addFavorie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const FavorieAdd = () => {
        addFavorie(movie);
        alert("elave oludnu")
    };

    const getMovieDetails = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <div className="movie-card-general">
            <div className='movie-card'>
                <div className='movie-poster'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className='movie-overlay'></div>
                </div>
                <div className='movie-info'>
                    <FaRegHeart className='favorie-btn' onClick={FavorieAdd} />
                    <h4>{movie.title}</h4>
                    <p>{movie.release_date}</p>
                    <button onClick={getMovieDetails} className='detail-btn'>Get Details</button>
                </div>
            </div>
            <div className='modal'>
                {isModalOpen && (
                    <Modal closeModal={closeModal} movie={movie} />
                )}
            </div>
        </div>
    );
};

export default MovieCard;
