
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <h1>Welcome to Library System</h1>
      <ul className='Navbar'>
        <li><Link to="/">Home</Link></li>
        <li>
          <button onClick={toggleDropdown} className="dropdown-btn">
            Browse Books
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/browse/fiction">Fiction</Link></li>
              <li><Link to="/browse/non-fiction">Non-Fiction</Link></li>
              <li><Link to="/browse/sci-fi">Sci-Fi</Link></li>
              <li><Link to="/browse/romance">Romance</Link></li>
            </ul>
          )}
          <Link to="/add-book">Add Book</Link> 
        </li>
        
      </ul>

    </nav>
  );
}

export default Navbar;
