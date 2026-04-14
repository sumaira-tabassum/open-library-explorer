import React, { useState } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import "./index.css"
import Modal from "./components/Modal";

function App() {
  const initialBookCount = 18;
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialBookCount);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState("null");
  const [loading, setLoading] = useState(false);
  const handleSearch = async (e) => {
    const value = e.target.value;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${value}`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false); 
  };
  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + initialBookCount);
  }
  const openModal = (book) => {
    setSelectedBook(book);
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <>
        <Searchbar
        search={search}
        onSearch={setSearch}
        handleSearch={handleSearch}
        loading={loading}
      />

      {isOpen && selectedBook && (
        <Modal
          book={selectedBook}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}

      <div className="cards">
        {books.slice(0, visibleCount).map((book, index) => (
          <Card
            key={index}
            book={book}
            openModal={() => openModal(book)}
          >
          </Card>))}
      </div>
      <div className="button-wrapper">
          {visibleCount < books.length && (<button onClick={loadMore} className="load-button">Load More</button>)}
      </div>
      
      
    </>
  );
}

export default App;