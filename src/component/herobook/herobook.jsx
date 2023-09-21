import React from "react";
import styles from './herobook.module.css'; // Renamed to 'styles' for clarity
import { Link } from "react-router-dom";

const Herobook = ({book}) => {
  const {title, image, } = book.attributes;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Book Cover" />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit
          lectus enim id euismod. Gravida at praesent aliquam, at natoque at
          leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate
          magna.
        </p>
        <Link to={`/read/${book.id}`} className={styles.button}>
          Read Book
        </Link>
      </div>
    </div>
  );
}

export default Herobook;
