
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import BrowseBooks from './Components/BrowseBooks';
import BookDetails from './Components/BookDetails';
import PageNotFound from './Components/NotFound';
import AddBookPage from './Components/AddBookPage';
import './App.css';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseBooks />} />  
        <Route path="/browse/:category" element={<BrowseBooks />} /> 
        <Route path="/books/:id" element={<BookDetails />} />  
        <Route path="/add-book" element={<AddBookPage />} /> 
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
