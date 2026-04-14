import React from 'react'
import { useState } from 'react';
import "./Modal.css"

const Modal = ({ book, isOpen, closeModal }) => {
  if (!isOpen) return null;
  return (
    <div className='modal-container' >

      

      <div className='modal'>

<button onClick={closeModal} className='modal-close'>&times;</button>

        <div className='modal-left'>
          {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="Book Cover" className='modal-book-cover' />}
        </div>

        <div className="modal-right">
          <div className="modal-header">
            <p>BEST SELLER</p>
            <h1>{book.title}</h1>
            <h2>{book.author_name?.[0]}</h2>
          </div>
          <div className="modal-first-wrapper">
            <div className="class-id">
              <p className='modal-label'>Cover ID</p>
              <p className='modal-value'>{book.cover_i}</p>
            </div>
            <div className="edition-count">
              <p className='modal-label'>Edition Count</p>
              <p className='modal-value'>{book.edition_count}</p>
            </div>
          </div>
          <div className="modal-second-wrapper">
            <div className="first-publish">
              <p className='modal-label'>First Publish Year</p>
              <p className='modal-value'>{book.first_publish_year}</p>
            </div>
            <div className="author_key">
              <p className='modal-label'>Author Key</p>
              <p className='modal-value'>{book.author_key}</p>
            </div>
          </div>
          <button className='modal-button'>Read Preview</button>
        </div>
      
      </div>

    </div>
  )
}

export default Modal
