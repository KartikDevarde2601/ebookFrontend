// BookList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './booklist.module.css';

function BookList() {
  const books = useSelector((state) => state.books.books);

  return (
    <div className={styles.booklist}>
      {books.map((book) => (
        <div className={styles.book} key={book.id}>
          <img src={book.attributes.image} alt="Book Cover" className={styles.bookImage} />
          <h1 className={styles.bookTitle}>{book.attributes.title}</h1>
          <Link to={`/books/${book.id}`} className={styles.button}>
            Book Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;
