// BookDetailsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styles from './bookdetails.module.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  // Find the book with the matching ID
  const book = books.find((book) => book.id === parseInt(id));
  

  // Check if the book is found
  if (!book) {
    return <div className={styles['loading']}>Loading...</div>; // Handle the case when the book is not found
  }

  const { title, author, isbn, description, published_date, Epub } = book.attributes;

  return (
    <div className={styles['book-details-page']}>
      <div className={styles['book-details-left']}>
        <img src={book.attributes.image} alt={title} />
      </div>
      <div className={styles['book-details-right']}>
        <h2>{title}</h2>
        <p><span className={styles.details}>Author:</span>{author}</p>
        <p> <span className={styles.details}>ISBN:</span> {isbn}</p>
        <p> <span className={styles.details}>Published Date:</span>{published_date}</p>
        <p> <span className={styles.details}>Description:</span> {description}</p>
        
        <div className={styles['button-container']}>
          <div className={styles['button']}>
            <Link to={`/read/${book.id}`}>Read Book</Link>
          </div>
          {Epub && (
            <div className={styles['button']}>
              <a
                href={Epub.data.attributes.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['download-epub']}
              >
                Download EPUB
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
