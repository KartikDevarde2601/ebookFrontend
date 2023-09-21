// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from './redux/bookSlice';
import Home from './page/homePage/home';
import ReadBook from './page/readbook/readbook';
import BookDetailsPage from './page/bookdetails/bookdetails';
import Navbar from './component/navbar/navbar';
import LoadingSpinner from './component/loading/loading';

function App() {
  const isLoading = useSelector((state) => state.books.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" exact element={<BookDetailsPage />} />
          <Route path="/read/:id" exact element={<ReadBook />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
