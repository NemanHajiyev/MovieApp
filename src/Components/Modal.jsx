import React from 'react'
import '../Css/Modal.css'

const Modal = ({ closeModal, movie }) => {
    console.log(movie)
    return (
        <div className='modal-card'>
            <span onClick={closeModal} className='close'>X</span>
            <div className='img-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='img' alt="" />
            </div>
            <strong>Overview</strong>
            <p>{movie.overview}</p>
            <p>Original Language : {movie.original_language}</p>
            <p>Movie Name : {movie.original_title}</p>
            <p>Raiting : {movie.vote_count}</p>
        </div>
    )
}

export default Modal
