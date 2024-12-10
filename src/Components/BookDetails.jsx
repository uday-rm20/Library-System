
import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '../Utils/Books';
import './BookDetails.css';


function BookDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className='BookDetails'>
      <h2>Book Details</h2>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>

      
      <button onClick={() => navigate('/browse')}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;
