import BookList from './BookList';
import './Home.css';


function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Romance"];

  return (
    <div>

      <section>
        <h3>Book Categories</h3>
        <ul className='category'>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        
      </section>

      <section className='popular'>
        <h3>Popular Books</h3>
        <BookList />
      </section>
    </div>
  );
}

export default Home;
