import React from 'react'
import "./Card.css"

const Card = ({ book, openModal }) => {
  return (
    <div className="card" onClick={openModal}>

      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "/book_cover_placeholder.JPG"
        }
        alt="Book Cover"
        className="book-cover"
      />

      {/* {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="Book Cover" className='book-cover'/>} */}
      <div className='card-detail'>
        {/* <h3 className='edition-count'>{book.edition_count}</h3> */}
        <h3 className='book-title'>{book.title}</h3>
        <p className='book-author'>{book.author_name?.[0]}</p>
        {/* <p>Year: {book.first_publish_year}</p> */}
        {/* <p>{book.language}</p> */}
      </div>
    </div>
  )
}

export default Card
