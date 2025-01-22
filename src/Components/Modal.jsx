import React from 'react'
import '../Css/Modal.css'

const Modal = ({ closeModal, movie }) => {
    return (
        <div className='modal-card'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </div>
    )
}

export default Modal
