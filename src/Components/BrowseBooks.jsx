
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '../Utils/Books';

function BrowseBooks() {
  const { category } = useParams(); 
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const filteredBooks = booksData.filter((book) => {
    
    const matchesCategory =
      !category || category === 'all' || book.category.toLowerCase() === category.toLowerCase();

    
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  
  useEffect(() => {
    setSearchTerm('');
  }, [category]);

  return (
    <div>
      <h2>Browse Books</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <h3>Books in {category || 'All Categories'}</h3>

      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
              <br></br>
              <button onClick={() => navigate(`/books/${book.id}`)}>View Details</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BrowseBooks;
