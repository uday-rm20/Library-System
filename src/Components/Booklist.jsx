import './BookList.css';

function BookList() {
    const books = [
      { id: 1, title: "1984", author: "George Orwell", Rating: 4 },
      { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", Rating: 4 },
      { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", Rating: 5 },
    ];
  
    return (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <br></br> 
            <br></br>
            <a href={`/books/${book.id}`}> View Details</a>
          </li>
        ))}
      </ul>
    );
  }
  
  export default BookList;
  